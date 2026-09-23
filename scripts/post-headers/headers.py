#!/usr/bin/env python3
"""Blog header generator.

  python3 headers.py prepare <repo> <out>/posts.json [<from> <to>]
  python3 headers.py single <title> <tag> <yyyy-mm-dd> <target.jpg> <out>/posts.json
  python3 headers.py build <template.sketch> <posts.json> <sizes.json> <out>/headers.sketch
  python3 headers.py install <posts.json> <out>/images
"""
import copy, glob, json, os, re, shutil, sys, uuid, zipfile
from collections import Counter

TAGS = {
    "ai": "AI", "css": "CSS", "gamedev": "Game Dev", "general": "Blog", "html": "HTML",
    "ios": "iOS", "javascript": "JavaScript", "macos": "macOS", "sdks": "SDKs", "spm": "SPM",
    "sponsored-content": "Sponsored Content", "swiftui": "SwiftUI", "xcode": "Xcode",
    "docc": "DocC", "visionos": "visionOS", "watchos": "watchOS", "tvos": "tvOS",
}

def eyebrow(tag):
    if not tag: return "Blog"
    if tag in TAGS: return TAGS[tag]
    if tag != tag.lower(): return tag
    return " ".join(w.capitalize() for w in tag.split("-"))

def prepare(repo, out, start=None, end=None):
    posts = []
    for f in sorted(glob.glob(os.path.join(repo, "collections/_posts/**/*.md"), recursive=True)):
        s = open(f, encoding="utf-8").read()
        fm = re.match(r"---\s*\n(.*?)\n---", s, re.S).group(1)
        get = lambda k: (re.search(r"^" + k + r":[ \t]*(.*)$", fm, re.M) or [None, ""])[1].strip()
        title = get("title")
        if len(title) > 1 and title[0] in "\"'" and title[-1] == title[0]:
            title = title[1:-1].replace('\\"', '"') if title[0] == '"' else title[1:-1].replace("''", "'")
        base = os.path.basename(f)[:-3].replace(" copy", "")
        m = re.match(r"(\d{4})-(\d{2})-(\d{2})-(.*)", base)
        tags = get("tags").replace(",", " ").split()
        folder = f"{m.group(1)[2:]}/{m.group(2)}{m.group(3)}"
        image = get("image")
        posts.append(dict(file=os.path.relpath(f, repo), title=title,
                          eyebrow=eyebrow(tags[0] if tags else ""),
                          date=f"{m.group(1)}-{m.group(2)}-{m.group(3)}",
                          image=image if image.startswith(f"/assets/blog/{folder}/") else "",
                          folder=folder, slug=m.group(4)))
    counts = Counter(p["folder"] for p in posts)
    for p in posts:
        p["name"] = f"{p['folder']}/image" + (f"-{p['slug']}" if counts[p["folder"]] > 1 else "")
        # Rewrite the post's own image if it lives in its asset folder, else <asset folder>/<name>.jpg
        rel = p.pop("image").lstrip("/") or f"assets/blog/{p['name']}.jpg"
        p["target"] = os.path.abspath(os.path.join(repo, rel))
    if start: posts = [p for p in posts if start <= p["date"] <= (end or start)]
    if os.environ.get("LIMIT"): posts = posts[-int(os.environ["LIMIT"]):]
    json.dump(posts, open(out, "w", encoding="utf-8"), indent=1, ensure_ascii=False)
    print(f"{len(posts)} posts -> {out}")

def single(title, tag, date, target, out):
    m = re.fullmatch(r"(\d{4})-(\d{2})-(\d{2})", date)
    if not m: sys.exit(f"Invalid date: {date} (expected yyyy-mm-dd)")
    post = dict(title=title, eyebrow=eyebrow(tag), date=date,
                name=f"{m.group(1)[2:]}/{m.group(2)}{m.group(3)}/image", target=os.path.abspath(target))
    json.dump([post], open(out, "w", encoding="utf-8"), indent=1, ensure_ascii=False)
    print(f"1 post -> {out}")

def install(posts_path, images):
    for p in json.load(open(posts_path, encoding="utf-8")):
        src = os.path.join(images, p["name"] + ".jpg")
        if not os.path.exists(src): sys.exit(f"Missing exported image: {src}")
        if os.path.abspath(src) == p["target"]: continue
        os.makedirs(os.path.dirname(p["target"]), exist_ok=True)
        shutil.copyfile(src, p["target"])
        print(f"{p['title']} -> {p['target']}")

def u16(s): return len(s.encode("utf-16-le")) // 2

def new_ids(o):
    if isinstance(o, dict):
        if "do_objectID" in o: o["do_objectID"] = str(uuid.uuid4()).upper()
        for v in o.values(): new_ids(v)
    elif isinstance(o, list):
        for v in o: new_ids(v)

def find(layer, name):
    if layer.get("name") == name: return layer
    for c in layer.get("layers", []):
        r = find(c, name)
        if r: return r

def title_layer(board):
    content = find(board, "Content")
    if not content: sys.exit(f"No 'Content' layer in the '{board['name']}' artboard")
    title = find(content, "Title")
    if not title: sys.exit("No 'Title' layer in the 'Content' layer")
    return title

def set_title(layer, eyebrow, title, size):
    """Replaces "<eyebrow><separator><title>", keeping the eyebrow, separator and title styles."""
    a = layer["attributedString"]
    s, runs = a["string"], a["attributes"]
    if "\n" not in s: sys.exit(f"Title layer text should be '<eyebrow>\\n<title>', but is {s!r}")
    i = s.index("\n")
    eb_end = len(s[:i].rstrip())
    title_start = i + 1 + len(s[i + 1:]) - len(s[i + 1:].lstrip())
    run_at = lambda pos: next(r for r in runs if r["location"] <= u16(s[:pos]) < r["location"] + r["length"])
    parts = [(eyebrow, run_at(0))] + [(c, run_at(eb_end + j)) for j, c in enumerate(s[eb_end:title_start])] + [(title, run_at(title_start))]
    merged = []
    for text, run in parts:
        if merged and merged[-1][1] is run: merged[-1][0] += text
        else: merged.append([text, run])
    new_runs, loc = [], 0
    for text, run in merged:
        r = copy.deepcopy(run)
        r["location"], r["length"] = loc, u16(text)
        loc += r["length"]
        new_runs.append(r)
    new_runs[-1]["attributes"]["MSAttributedStringFontAttribute"]["attributes"]["size"] = size
    a["string"], a["attributes"] = "".join(t for t, _ in merged), new_runs
    layer.pop("glyphBounds", None)

def build(template, posts_path, sizes_path, out):
    posts = json.load(open(posts_path, encoding="utf-8"))
    sizes = json.load(open(sizes_path, encoding="utf-8"))
    zin = zipfile.ZipFile(template)
    meta = json.loads(zin.read("meta.json"))
    page_id = next(k for k, v in meta["pagesAndArtboards"].items() if v["name"] == "Page 1")
    page_file = f"pages/{page_id}.json"
    page = json.loads(zin.read(page_file))
    tpl = next(l for l in page["layers"] if l["name"] == "image")
    title_layer(tpl)

    layers, boards = [], {}
    for i, p in enumerate(posts):
        g = copy.deepcopy(tpl)
        new_ids(g)
        g["name"] = p["name"]
        g["frame"]["x"] = (i % 20) * 3000
        g["frame"]["y"] = (i // 20) * 2000
        set_title(title_layer(g), p["eyebrow"], p["title"], sizes.get(p["name"], 70))
        layers.append(g)
        boards[g["do_objectID"]] = {"name": p["name"]}
    page["layers"] = layers
    meta["pagesAndArtboards"][page_id]["artboards"] = boards

    with zipfile.ZipFile(out, "w", zipfile.ZIP_DEFLATED) as zout:
        for n in zin.namelist():
            if n == page_file: zout.writestr(n, json.dumps(page, ensure_ascii=False))
            elif n == "meta.json": zout.writestr(n, json.dumps(meta, ensure_ascii=False))
            elif n.startswith("previews/"): continue
            else: zout.writestr(n, zin.read(n))
    print(f"{len(layers)} headers -> {out}")

if __name__ == "__main__":
    cmd = sys.argv[1]
    if cmd == "prepare": prepare(*sys.argv[2:6])
    elif cmd == "single": single(*sys.argv[2:7])
    elif cmd == "build": build(*sys.argv[2:6])
    elif cmd == "install": install(*sys.argv[2:4])
    else: sys.exit(__doc__)
