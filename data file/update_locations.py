import pandas as pd
import random
import re

coords_map = {
    'bandar lampung': [-5.4294, 105.2638],
    'lampung selatan': [-5.7196, 105.5905],
    'lampung tengah': [-4.9458, 105.2238],
    'lampung timur': [-5.1118, 105.6729],
    'pesawaran': [-5.4214, 105.0886],
    'pringsewu': [-5.3582, 104.9749],
    'metro': [-5.1136, 105.3067],
    'metro kota': [-5.1136, 105.3067],
    'way kanan': [-4.4447, 104.5247],
    'waykanan': [-4.4447, 104.5247],
    'tanggamus': [-5.4347, 104.6247],
    'lampung utara': [-4.8197, 104.8824],
    'lampung barat': [-5.0347, 104.0531],
    'pesisir barat': [-5.1953, 103.9333],
    'tulang bawang': [-4.3978, 105.7483],
    'tulang bawang barat': [-4.4533, 105.0483],
    'mesuji': [-4.0381, 105.3853]
}

def get_jitter():
    return (random.random() - 0.5) * 0.1

html_path = '../index.html'
with open(html_path, 'r', encoding='utf-8') as f:
    html_content = f.read()

# Extract existing names to avoid duplicates
existing_names = set()
for match in re.finditer(r'name:\s*"([^"]+)"', html_content):
    existing_names.add(match.group(1).lower().strip())

df = pd.read_excel('UMKM FOOD AND BEVERAGE PROVINSI LAMPUNG (USAHA KULINER) (Responses) (1).xlsx')

new_entries = []
for idx, row in df.iterrows():
    try:
        usaha_col = 'Nama/Merk Usaha'
        kab_col = 'Alamat Usaha (Kabupaten / Kota)'
        prod_col = 'Produk Kuliner (exc. Bakso,Pempek, dll)'
        kec_col = 'Alamat Usaha (Kecamatan)'

        usaha_raw = str(row[usaha_col])
        usaha = usaha_raw.strip()
        if pd.isna(row[usaha_col]) or usaha_raw.lower() == 'nan':
            continue
            
        if usaha.lower() in existing_names:
            continue
            
        kab = str(row[kab_col]).strip().lower()
        
        base_coord = None
        for k, v in coords_map.items():
            if k in kab:
                base_coord = v
                break
        
        if not base_coord:
            base_coord = coords_map['bandar lampung']
            
        lat = round(base_coord[0] + get_jitter(), 4)
        lon = round(base_coord[1] + get_jitter(), 4)
        
        produk = str(row[prod_col]).replace('\"', '').replace('\\', '').replace('\n', ' ').strip()
        if produk == 'nan': produk = 'Kuliner/Jajanan'

        kecamatan = str(row[kec_col]).replace('\"', '').replace('\n', ' ').strip()
        if kecamatan == 'nan': kecamatan = ''
        
        desc = f'UMKM: {produk}. Lokasi: {kecamatan}, {str(row[kab_col]).strip()}.'
        
        usaha_escaped = usaha.replace('\"', '\\\"').replace('\n', ' ')
        desc_escaped = desc.replace('\"', '\\\"')
        
        entry = f'            {{ name: "{usaha_escaped}", coords: [{lat}, {lon}], desc: "{desc_escaped}", type: "umkm" }}'
        new_entries.append(entry)
        existing_names.add(usaha.lower())
    except Exception as e:
        print(f"Error row {idx}: {e}")
        continue

print(f"Found {len(new_entries)} new entries to add.")

if new_entries:
    parts = html_content.split('        ];\n\n        locations.forEach')
    if len(parts) == 2:
        new_content = parts[0] + ',\n' + ',\n'.join(new_entries) + '\n        ];\n\n        locations.forEach' + parts[1]
        with open(html_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print("Successfully updated index.html")
    else:
        print("Could not find insertion point in index.html")
else:
    print("No new entries to add.")
