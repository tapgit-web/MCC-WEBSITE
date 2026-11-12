import urllib.request
import urllib.parse
import ssl
import json
import os
import re
import base64
import time

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

BASE_URL = "https://ciratechnology.com"

def fetch_url(url, retries=3):
    for attempt in range(retries):
        try:
            req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
            with urllib.request.urlopen(req, context=ctx, timeout=30) as resp:
                return resp.read()
        except Exception as e:
            if attempt == retries - 1:
                raise e
            time.sleep(1)

def ensure_dir(path):
    d = os.path.dirname(path)
    if d:
        os.makedirs(d, exist_ok=True)

def save_file(path, data, mode='wb'):
    ensure_dir(path)
    if 'b' in mode and isinstance(data, str):
        data = data.encode('utf-8')
    with open(path, mode) as f:
        f.write(data)

print("1. Fetching asset manifest and sourcemaps...")
manifest_data = fetch_url(f"{BASE_URL}/asset-manifest.json")
manifest = json.loads(manifest_data.decode('utf-8'))
save_file("asset-manifest.json", manifest_data)
save_file("public/asset-manifest.json", manifest_data)

js_map_data = fetch_url(f"{BASE_URL}/static/js/main.a7186b53.js.map")
js_map = json.loads(js_map_data.decode('utf-8'))

css_map_data = fetch_url(f"{BASE_URL}/static/css/main.41a5c4b2.css.map")
css_map = json.loads(css_map_data.decode('utf-8'))

print("2. Downloading root public files...")
public_files = ['favicon.ico', 'logo192.png', 'logo512.png', 'manifest.json', 'robots.txt']
for pf in public_files:
    try:
        content = fetch_url(f"{BASE_URL}/{pf}")
        save_file(pf, content)
        save_file(f"public/{pf}", content)
        print(f"  Downloaded: {pf}")
    except Exception as e:
        print(f"  Error downloading {pf}: {e}")

print("3. Downloading all media from asset-manifest.json...")
manifest_files = manifest.get('files', {})
downloaded_media = {}

for key, rel_url in manifest_files.items():
    clean_url = rel_url.lstrip('/')
    target_prod_path = clean_url # e.g. static/media/foo.png
    full_url = f"{BASE_URL}{rel_url}"
    try:
        quote_url = urllib.parse.quote(full_url, safe=':/')
        data = fetch_url(quote_url)
        save_file(target_prod_path, data)
        save_file(f"public/{target_prod_path}", data)
        base = os.path.basename(rel_url)
        # Store for mapping to src/
        downloaded_media[base.lower()] = data
        # Also map without CRA hash if possible
        # e.g. ELECTROMAGNETICFLOWMETER.a1a9495ff84b78a97c5b.jpg -> ELECTROMAGNETICFLOWMETER.jpg
        orig_key = key.replace('static/media/', '').strip()
        downloaded_media[orig_key.lower()] = data
        print(f"  Downloaded: {target_prod_path}")
    except Exception as e:
        print(f"  Error downloading {target_prod_path}: {e}")

print("4. Extracting and decoding inlined data URIs from main.js...")
main_js_data = fetch_url(f"{BASE_URL}/static/js/main.a7186b53.js").decode('utf-8', errors='ignore')
save_file("static/js/main.a7186b53.js", main_js_data.encode('utf-8'))
save_file("public/static/js/main.a7186b53.js", main_js_data.encode('utf-8'))

# Also download chunk and css
try:
    chunk_data = fetch_url(f"{BASE_URL}/static/js/453.332eea84.chunk.js")
    save_file("static/js/453.332eea84.chunk.js", chunk_data)
    save_file("public/static/js/453.332eea84.chunk.js", chunk_data)
except Exception as e:
    print("  Chunk download note:", e)

main_css_data = fetch_url(f"{BASE_URL}/static/css/main.41a5c4b2.css")
save_file("static/css/main.41a5c4b2.css", main_css_data)
save_file("public/static/css/main.41a5c4b2.css", main_css_data)

# Save sourcemaps as well
save_file("static/js/main.a7186b53.js.map", js_map_data)
save_file("static/css/main.41a5c4b2.css.map", css_map_data)

# Extract data URIs
inlined_map = {
    'level1.png': None,
    'vibrationmonitoring1.png': None,
    'guidedwaveradarlevel.jpeg': None,
    'float.jpeg': None,
    'silica analyzer.jpeg': None
}

uris = re.findall(r'"data:(image/[^;]+);base64,([^"]+)"', main_js_data)
if len(uris) >= 5:
    inlined_map['level1.png'] = base64.b64decode(uris[0][1])
    inlined_map['vibrationmonitoring1.png'] = base64.b64decode(uris[1][1])
    inlined_map['guidedwaveradarlevel.jpeg'] = base64.b64decode(uris[2][1])
    inlined_map['float.jpeg'] = base64.b64decode(uris[3][1])
    inlined_map['silica analyzer.jpeg'] = base64.b64decode(uris[4][1])
    for k, v in inlined_map.items():
        if v:
            downloaded_media[k] = v
            print(f"  Extracted inlined media: {k} ({len(v)} bytes)")

print("5. Downloading PDFs...")
pdf_list = [
    '/pdf/Flow/1.EMF.pdf',
    '/pdf/Flow/2.Vortex_FM.pdf',
    '/pdf/Flow/3.Coriolis_FM.pdf',
    '/pdf/Flow/4.Thermalmass_FM.pdf',
    '/pdf/Flow/5.Ultrasonic_Gas_FM.pdf',
    '/pdf/Flow/6.Ultrasonic_clamp_FM.pdf',
    '/pdf/Flow/7.Custody_Transfer_Gas_FM.pdf',
    '/pdf/Flow/8.Turbine_FM.pdf',
    '/pdf/Flow/9.Oval_Gear_FM.pdf',
    '/pdf/Flow/10.Variable_Area_FM.pdf',
    '/pdf/Flow/11.Woltman_Type_FM.pdf'
]

# Simple valid fallback PDF generator for any missing/empty PDF
def make_simple_pdf(title):
    stream = f"BT /F1 24 Tf 100 700 Td ({title}) Tj ET"
    stream_len = len(stream)
    pdf = f"""%PDF-1.4
1 0 obj << /Type /Catalog /Pages 2 0 R >> endobj
2 0 obj << /Type /Pages /Kids [3 0 R] /Count 1 >> endobj
3 0 obj << /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >> endobj
4 0 obj << /Length {stream_len} >> stream
{stream}
endstream endobj
5 0 obj << /Type /Font /Subtype /Type1 /BaseFont /Helvetica >> endobj
xref
0 6
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000244 00000 n 
0000000300 00000 n 
trailer << /Size 6 /Root 1 0 R >>
startxref
370
%%EOF"""
    return pdf.encode('latin1')

for p in pdf_list:
    clean_p = p.lstrip('/')
    url = f"{BASE_URL}{p}"
    quote_url = urllib.parse.quote(url, safe=':/')
    try:
        data = fetch_url(quote_url)
        # If the file returned is an HTML 404 page (starts with <!doctype or <html)
        if data.strip().startswith(b'<!doctype') or data.strip().startswith(b'<html'):
            print(f"  PDF {clean_p} returned HTML on server, creating valid PDF...")
            data = make_simple_pdf(f"CIRA Technology - {os.path.basename(clean_p)}")
        save_file(clean_p, data)
        save_file(f"public/{clean_p}", data)
        print(f"  Saved PDF: {clean_p} ({len(data)} bytes)")
    except Exception as e:
        print(f"  Error downloading PDF {clean_p}: {e}, creating fallback...")
        fallback = make_simple_pdf(f"CIRA Technology - {os.path.basename(clean_p)}")
        save_file(clean_p, fallback)
        save_file(f"public/{clean_p}", fallback)

print("6. Extracting React JS/JSX source files from main.a7186b53.js.map...")
sources = js_map.get('sources', [])
contents = js_map.get('sourcesContent', [])
for s, c in zip(sources, contents):
    if c and not s.startswith('../webpack') and not 'node_modules' in s:
        target_path = os.path.join("src", s)
        save_file(target_path, c, mode='w')
        print(f"  Saved JS source: {target_path}")

print("7. Extracting CSS source files from main.41a5c4b2.css.map...")
css_sources = css_map.get('sources', [])
css_contents = css_map.get('sourcesContent', [])
for s, c in zip(css_sources, css_contents):
    if c and not 'node_modules' in s:
        target_path = os.path.join("src", s)
        save_file(target_path, c, mode='w')
        print(f"  Saved CSS source: {target_path}")

# Ensure App.css exists
save_file("src/App.css", "/* App.css */\n", mode='w')

print("8. Populating all images into src/components/images/...")
# Use needed images map
source_dict = dict(zip(sources, contents))
needed_images = {}
for s, c in source_dict.items():
    if c and not 'node_modules' in s:
        file_dir = os.path.dirname(s)
        for line in c.split('\n'):
            line = line.strip()
            if line.startswith('//'):
                continue
            m = re.search(r'import\s+.*?from\s+[\'"](.*?\.(?:png|jpg|jpeg|webp|avif|svg|gif|pdf))[\'"]', line)
            if m:
                rel_path = m.group(1)
                full_src_rel = os.path.normpath(os.path.join(file_dir, rel_path)).replace('\\', '/')
                needed_images[full_src_rel] = os.path.basename(rel_path)

# Also check back1.png in ContactPage.css
needed_images['components/images/back1.png'] = 'back1.png'

matched_count = 0
missing_count = 0
for target_rel, base_name in sorted(needed_images.items()):
    b_low = base_name.lower().strip()
    data = downloaded_media.get(b_low)
    if data:
        full_dest = os.path.join("src", target_rel)
        save_file(full_dest, data)
        matched_count += 1
    else:
        print(f"  WARNING: Image not found in downloaded media: {target_rel} ({base_name})")
        missing_count += 1

print(f"Populated images: {matched_count} copied, {missing_count} missing.")

print("\nClone extraction complete!")
