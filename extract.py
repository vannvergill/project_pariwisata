import re

def process_file(html_file, css_file, js_file):
    with open(html_file, 'r', encoding='utf-8') as f:
        content = f.read()

    # Extract CSS
    style_matches = list(re.finditer(r'<style>\s*(.*?)\s*</style>', content, re.DOTALL))
    if style_matches:
        with open(css_file, 'w', encoding='utf-8') as f:
            f.write(style_matches[0].group(1))
        # Replace the first style block with link, remove others if any
        content = content.replace(style_matches[0].group(0), f'<link rel="stylesheet" href="{css_file}">')
        for m in style_matches[1:]:
            content = content.replace(m.group(0), '')

    # Extract JS (excluding script tags with src)
    script_matches = list(re.finditer(r'<script>\s*(.*?)\s*</script>', content, re.DOTALL))
    if script_matches:
        combined_js = "\n\n".join([m.group(1) for m in script_matches])
        with open(js_file, 'w', encoding='utf-8') as f:
            f.write(combined_js)
        
        # Replace the last script block with the link (so it's after Leaflet for index.html)
        content = content.replace(script_matches[-1].group(0), f'<script src="{js_file}"></script>')
        
        # Remove the other script blocks
        for m in script_matches[:-1]:
            content = content.replace(m.group(0), '')

    # Ensure empty lines aren't left behind excessively
    content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)

    with open(html_file, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"Processed {html_file}")

process_file('index.html', 'css/style.css', 'js/script.js')
process_file('regency.html', 'css/regency.css', 'js/regency.js')
process_file('way-kambas.html', 'css/way-kambas.css', 'js/way-kambas.js')
