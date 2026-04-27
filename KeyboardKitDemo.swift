// KeyboardKitDemo.swift
// Paste into a new Xcode project (iOS App target) or Swift Playgrounds.
// For Xcode: this file IS the app — keep @main at the bottom.
// For Swift Playgrounds: remove @main + KeyboardKitDemoApp, then add:
//   import PlaygroundSupport
//   PlaygroundPage.current.setLiveView(KeyboardDemoScreen())

import SwiftUI

// ─────────────────────────────────────────────────────────────────
// MARK: - Status Bar
// ─────────────────────────────────────────────────────────────────

private struct CellularBars: View {
    var body: some View {
        HStack(alignment: .bottom, spacing: 1.5) {
            ForEach(0..<4) { i in
                RoundedRectangle(cornerRadius: 1)
                    .frame(width: 3, height: 4 + CGFloat(i) * 2.5)
                    .opacity(i == 3 ? 0.38 : 1.0)
            }
        }
    }
}

private struct StatusBar: View {
    var body: some View {
        HStack {
            Text("9:41")
                .font(.system(size: 15, weight: .semibold))
            Spacer()
            HStack(spacing: 6) {
                CellularBars()
                Image(systemName: "wifi")
                    .font(.system(size: 13, weight: .medium))
                Image(systemName: "battery.100")
                    .font(.system(size: 14, weight: .medium))
            }
        }
        .padding(.horizontal, 22)
        .frame(height: 50)
    }
}

// ─────────────────────────────────────────────────────────────────
// MARK: - Dynamic Island
// ─────────────────────────────────────────────────────────────────

private struct DynamicIsland: View {
    var body: some View {
        RoundedRectangle(cornerRadius: 20)
            .fill(Color.black)
            .frame(width: 125, height: 36)
    }
}

// ─────────────────────────────────────────────────────────────────
// MARK: - Navigation Bar
// ─────────────────────────────────────────────────────────────────

private struct NavBar: View {
    var body: some View {
        HStack {
            // Back button
            Button(action: {}) {
                HStack(spacing: 3) {
                    Image(systemName: "chevron.left")
                        .font(.system(size: 18, weight: .semibold))
                    Text("Messages")
                        .font(.system(size: 17))
                }
                .foregroundColor(.blue)
            }

            Spacer()

            // Contact
            VStack(spacing: 2) {
                ZStack {
                    Circle()
                        .fill(Color.blue.opacity(0.15))
                        .frame(width: 36, height: 36)
                    Text("A")
                        .font(.system(size: 16, weight: .bold))
                        .foregroundColor(.blue)
                }
                Text("Alex")
                    .font(.system(size: 11))
                    .foregroundColor(.secondary)
            }

            Spacer()

            // Video call
            Button(action: {}) {
                Image(systemName: "video")
                    .font(.system(size: 18))
                    .foregroundColor(.blue)
            }
        }
        .padding(.horizontal, 16)
        .padding(.vertical, 8)
        .background(.ultraThinMaterial)
        .overlay(alignment: .bottom) { Divider() }
    }
}

// ─────────────────────────────────────────────────────────────────
// MARK: - Message Bubble
// ─────────────────────────────────────────────────────────────────

private struct Bubble: View {
    let text: String
    let isFromMe: Bool

    var body: some View {
        HStack {
            if isFromMe { Spacer(minLength: 50) }
            Text(text)
                .font(.system(size: 15))
                .padding(.horizontal, 14)
                .padding(.vertical, 9)
                .background(isFromMe ? Color.blue : Color(UIColor.systemGray5))
                .foregroundColor(isFromMe ? .white : .primary)
                .clipShape(RoundedRectangle(cornerRadius: 18, style: .continuous))
            if !isFromMe { Spacer(minLength: 50) }
        }
    }
}

// ─────────────────────────────────────────────────────────────────
// MARK: - Text Input Bar
// ─────────────────────────────────────────────────────────────────

private struct InputBar: View {
    let text: String
    let cursorOn: Bool

    var body: some View {
        HStack(spacing: 10) {
            Button(action: {}) {
                Image(systemName: "plus.circle")
                    .font(.title2)
                    .foregroundColor(.blue)
            }

            HStack(spacing: 0) {
                Text(text)
                    .font(.body)
                    .lineLimit(1)
                if cursorOn {
                    Rectangle()
                        .fill(Color.blue)
                        .frame(width: 2, height: 19)
                        .padding(.leading, 1)
                }
                Spacer(minLength: 0)
            }
            .padding(.horizontal, 14)
            .padding(.vertical, 9)
            .background(Color(UIColor.systemBackground))
            .clipShape(RoundedRectangle(cornerRadius: 20, style: .continuous))
            .overlay(
                RoundedRectangle(cornerRadius: 20, style: .continuous)
                    .stroke(Color(UIColor.systemGray4), lineWidth: 1)
            )

            Button(action: {}) {
                Image(systemName: "arrow.up.circle.fill")
                    .font(.system(size: 28))
                    .foregroundColor(text.isEmpty ? Color(UIColor.systemGray3) : .blue)
            }
        }
        .padding(.horizontal, 10)
        .padding(.vertical, 8)
        .background(Color(UIColor.systemGray6))
    }
}

// ─────────────────────────────────────────────────────────────────
// MARK: - Keyboard Architecture  (KeyboardKit-inspired)
// ─────────────────────────────────────────────────────────────────

/// Models every possible key action in the keyboard.
enum KKAction: Equatable {
    case character(String), shift, backspace, space, `return`, numeric
}

/// Describes a single key's label, action, and layout hints.
struct KKKey: Identifiable {
    let id = UUID()
    let label: String
    let action: KKAction
    var isSpecial: Bool = false
    var fixedWidth: CGFloat? = nil

    init(_ label: String, _ action: KKAction, special: Bool = false, width: CGFloat? = nil) {
        self.label = label
        self.action = action
        self.isSpecial = special
        self.fixedWidth = width
    }
}

// ─────────────────────────────────────────────────────────────────
// MARK: - Key Cap View
// ─────────────────────────────────────────────────────────────────

private struct KeyCap: View {
    let key: KKKey
    let isShifted: Bool

    @Environment(\.colorScheme) private var scheme

    private var displayLabel: String {
        if case .character(let c) = key.action { return isShifted ? c.uppercased() : c }
        return key.label
    }

    private var bg: Color {
        key.isSpecial
            ? (scheme == .dark
                ? Color(UIColor.systemGray3)
                : Color(UIColor(red: 0.67, green: 0.71, blue: 0.74, alpha: 1)))
            : (scheme == .dark ? Color(UIColor.systemGray) : .white)
    }

    var body: some View {
        ZStack {
            RoundedRectangle(cornerRadius: 5, style: .continuous)
                .fill(bg)
                .shadow(color: .black.opacity(0.3), radius: 0, x: 0, y: 1)

            if key.action == .space {
                // Spacebar carries the subtle KeyboardKit watermark
                VStack(spacing: 1) {
                    Text("⌨")
                        .font(.system(size: 9))
                        .foregroundColor(.blue.opacity(0.45))
                    Text(displayLabel)
                        .font(.system(size: 16))
                        .foregroundColor(.primary)
                }
            } else {
                Text(displayLabel)
                    .font(.system(
                        size: key.isSpecial ? 14 : 17,
                        weight: key.isSpecial ? .medium : .regular
                    ))
                    .foregroundColor(.primary)
            }
        }
        .frame(height: 42)
    }
}

// ─────────────────────────────────────────────────────────────────
// MARK: - Keyboard View  (owns all keyboard state)
// ─────────────────────────────────────────────────────────────────

struct KeyboardView: View {
    @State private var isShifted = false
    @Environment(\.colorScheme) private var scheme

    private var kbBg: Color {
        scheme == .dark
            ? Color(UIColor.systemGray4)
            : Color(UIColor(red: 0.82, green: 0.84, blue: 0.87, alpha: 1))
    }

    private let row1 = Array("qwertyuiop").map { String($0) }
    private let row2 = Array("asdfghjkl").map  { String($0) }
    private let row3 = Array("zxcvbnm").map    { String($0) }

    var body: some View {
        VStack(spacing: 5) {

            // Row 1 — 10 keys
            HStack(spacing: 5) {
                ForEach(row1, id: \.self) { c in
                    KeyCap(key: KKKey(c, .character(c)), isShifted: isShifted)
                }
            }

            // Row 2 — 9 keys, centered
            HStack(spacing: 5) {
                Spacer().frame(width: 18)
                ForEach(row2, id: \.self) { c in
                    KeyCap(key: KKKey(c, .character(c)), isShifted: isShifted)
                }
                Spacer().frame(width: 18)
            }

            // Row 3 — Shift · letters · Backspace
            HStack(spacing: 5) {
                Button(action: { isShifted.toggle() }) {
                    KeyCap(
                        key: KKKey(isShifted ? "⬆︎" : "⇧", .shift, special: true),
                        isShifted: false
                    )
                }
                .frame(width: 42)

                ForEach(row3, id: \.self) { c in
                    KeyCap(key: KKKey(c, .character(c)), isShifted: isShifted)
                }

                Button(action: {}) {
                    KeyCap(key: KKKey("⌫", .backspace, special: true), isShifted: false)
                }
                .frame(width: 42)
            }

            // Row 4 — 123 · Emoji · Space · Return
            HStack(spacing: 5) {
                KeyCap(key: KKKey("123", .numeric, special: true), isShifted: false)
                    .frame(width: 44)
                KeyCap(key: KKKey("🙂", .character("🙂"), special: true), isShifted: false)
                    .frame(width: 44)
                KeyCap(key: KKKey("space", .space), isShifted: false)   // watermark rendered inside
                KeyCap(key: KKKey("return", .return, special: true), isShifted: false)
                    .frame(width: 88)
            }
        }
        .padding(.horizontal, 3)
        .padding(.vertical, 10)
        .background(kbBg)
    }
}

// ─────────────────────────────────────────────────────────────────
// MARK: - Home Indicator
// ─────────────────────────────────────────────────────────────────

private struct HomeIndicator: View {
    var body: some View {
        RoundedRectangle(cornerRadius: 2.5)
            .fill(Color.black.opacity(0.2))
            .frame(width: 134, height: 5)
            .frame(maxWidth: .infinity)
            .padding(.vertical, 8)
    }
}

// ─────────────────────────────────────────────────────────────────
// MARK: - Full Demo Screen  (iPhone 16 Pro: 393 × 852 pt)
// ─────────────────────────────────────────────────────────────────

struct KeyboardDemoScreen: View {
    @State private var displayedText = ""
    @State private var cursorOn = true

    private let fullText = "I'm writing this with KeyboardKit"

    private let messages: [(text: String, fromMe: Bool)] = [
        ("Hey! Building something new? 👀",            false),
        ("Yeah — a custom keyboard app 🎹",            true),
        ("Ooh, using any SDK for that?",               false),
        ("KeyboardKit. Seriously powerful stuff.",      true),
        ("Nice! Show me — type something 👇",          false),
    ]

    var body: some View {
        VStack(spacing: 0) {

            // Status bar with Dynamic Island overlay
            ZStack(alignment: .top) {
                StatusBar()
                DynamicIsland().padding(.top, 5)
            }

            NavBar()

            // Message thread
            ScrollView {
                VStack(alignment: .leading, spacing: 8) {
                    ForEach(messages.indices, id: \.self) { i in
                        Bubble(text: messages[i].text, isFromMe: messages[i].fromMe)
                    }
                    HStack {
                        Spacer()
                        Text("Delivered")
                            .font(.caption2)
                            .foregroundColor(.secondary)
                    }
                }
                .padding(.horizontal, 12)
                .padding(.vertical, 10)
            }
            .background(Color(UIColor.systemBackground))

            InputBar(text: displayedText, cursorOn: cursorOn)
            KeyboardView()
            HomeIndicator()
        }
        .frame(width: 393, height: 852)
        .background(Color(UIColor.systemBackground))
        .clipShape(RoundedRectangle(cornerRadius: 47, style: .continuous))
        .shadow(color: .black.opacity(0.28), radius: 40, x: 0, y: 15)
        .onAppear {
            animateTyping()
            animateCursor()
        }
    }

    private func animateTyping() {
        var i = 0
        Timer.scheduledTimer(withTimeInterval: 0.07, repeats: true) { timer in
            guard i < fullText.count else { return timer.invalidate() }
            let idx = fullText.index(fullText.startIndex, offsetBy: i)
            displayedText += String(fullText[idx])
            i += 1
        }
    }

    private func animateCursor() {
        Timer.scheduledTimer(withTimeInterval: 0.5, repeats: true) { _ in
            cursorOn.toggle()
        }
    }
}

// ─────────────────────────────────────────────────────────────────
// MARK: - Preview
// ─────────────────────────────────────────────────────────────────

#Preview {
    ZStack {
        Color(UIColor.systemGray5).ignoresSafeArea()
        KeyboardDemoScreen()
    }
}

// ─────────────────────────────────────────────────────────────────
// MARK: - App Entry Point
// Remove the struct below if adding this file to an existing project.
// ─────────────────────────────────────────────────────────────────

@main
struct KeyboardKitDemoApp: App {
    var body: some Scene {
        WindowGroup {
            ZStack {
                Color(UIColor.systemGray5).ignoresSafeArea()
                KeyboardDemoScreen()
            }
        }
    }
}
