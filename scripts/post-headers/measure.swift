// Picks a title font size per post, so that the first (justified) line
// of the title is well filled, without the title getting too tall.
//
//   swift measure.swift posts.json sizes.json

import AppKit
import CoreText

struct Post: Decodable { let name: String; let title: String }

let args = CommandLine.arguments
let posts = try JSONDecoder().decode([Post].self, from: Data(contentsOf: URL(fileURLWithPath: args[1])))

let boxWidth: Double = 1123     // Title text layer width
let maxHeight: Double = 360     // Space for the title lines above the footer
let baseSize = 70
let sizeRange = 58...84
let minFill = 0.92              // First line must fill 92% of the width

var warned = false
func font(_ size: Int) -> NSFont {
    if let f = NSFont(name: "SFProDisplay-Medium", size: CGFloat(size)) { return f }
    if !warned { FileHandle.standardError.write("SFProDisplay-Medium not found, using system font\n".data(using: .utf8)!); warned = true }
    return NSFont.systemFont(ofSize: CGFloat(size), weight: .medium)
}

func layout(_ text: String, _ size: Int) -> (lines: Int, fill: Double, height: Double) {
    let f = font(size)
    let str = NSAttributedString(string: text, attributes: [.font: f])
    let ts = CTTypesetterCreateWithAttributedString(str)
    let length = str.length
    var start = 0, lines = 0, firstWidth = 0.0
    while start < length {
        let count = CTTypesetterSuggestLineBreak(ts, start, boxWidth)
        if lines == 0 {
            let line = CTTypesetterCreateLine(ts, CFRange(location: start, length: count))
            firstWidth = CTLineGetTypographicBounds(line, nil, nil, nil) - CTLineGetTrailingWhitespaceWidth(line)
        }
        lines += 1
        start += max(count, 1)
    }
    let lineHeight = Double(f.ascender - f.descender + f.leading)
    return (lines, firstWidth / boxWidth, Double(lines) * lineHeight)
}

var sizes: [String: Int] = [:]
let candidates = sizeRange.sorted { abs($0 - baseSize) == abs($1 - baseSize) ? $0 < $1 : abs($0 - baseSize) < abs($1 - baseSize) }
for post in posts {
    let results = candidates.map { ($0, layout(post.title, $0)) }.filter { $0.1.height <= maxHeight }
    let good = results.first { $0.1.lines == 1 || $0.1.fill >= minFill }
    let best = good ?? results.max { $0.1.fill < $1.1.fill } ?? (baseSize, layout(post.title, baseSize))
    sizes[post.name] = best.0
    print(String(format: "%2d  %d lines  %3.0f%%  %@", best.0, best.1.lines, best.1.fill * 100, post.title) + (good == nil ? "  (best effort)" : ""))
}
let enc = JSONEncoder(); enc.outputFormatting = [.prettyPrinted, .sortedKeys]
try enc.encode(sizes).write(to: URL(fileURLWithPath: args[2]))
