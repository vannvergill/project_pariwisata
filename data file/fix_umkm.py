import pandas as pd
import random
import re

coords_map = {
    'bandar lampung': [-5.3850, 105.2600], # Moved inland (north of coast)
    'lampung selatan': [-5.6500, 105.6000], # Inland from Kalianda/Bakauheni
    'lampung tengah': [-4.9458, 105.2238],
    'lampung timur': [-5.1118, 105.6729],
    'pesawaran': [-5.3900, 105.0886], # Moved north slightly
    'pringsewu': [-5.3582, 104.9749],
    'metro': [-5.1136, 105.3067],
    'metro kota': [-5.1136, 105.3067],
    'way kanan': [-4.4447, 104.5247],
    'waykanan': [-4.4447, 104.5247],
    'tanggamus': [-5.4000, 104.6247], # Inland from Kota Agung
    'lampung utara': [-4.8197, 104.8824],
    'lampung barat': [-5.0347, 104.0531],
    'pesisir barat': [-5.1700, 103.9500], # Moved inland (east/north) from Krui
    'tulang bawang': [-4.3978, 105.7483],
    'tulang bawang barat': [-4.4533, 105.0483],
    'mesuji': [-4.0381, 105.3853]
}

def get_jitter():
    # very small jitter (approx 1-2 km max) to prevent spawning in sea
    return (random.random() - 0.5) * 0.015

files = [
    'Daftar_UMKM_Jajanan_Ringan_Format.xlsx',
    'UMKM FOOD AND BEVERAGE PROVINSI LAMPUNG (USAHA KULINER) (Responses) (1).xlsx'
]

seen_names = set()
new_entries = []

for file in files:
    df = pd.read_excel(file)
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
                
            if usaha.lower() in seen_names:
                continue
            seen_names.add(usaha.lower())
                
            kab_raw = str(row[kab_col]).strip()
            kab = kab_raw.lower()
            
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
            
            # clean up display string
            kab_disp = kab_raw if kab_raw.lower() != 'nan' else 'Lampung'
            if kecamatan:
                lokasi_str = f"{kecamatan}, {kab_disp}"
            else:
                lokasi_str = kab_disp
                
            desc = f'UMKM: {produk}. Lokasi: {lokasi_str}.'
            
            usaha_escaped = usaha.replace('\"', '\\\"').replace('\n', ' ')
            desc_escaped = desc.replace('\"', '\\\"')
            
            entry = f'            {{ name: "{usaha_escaped}", coords: [{lat}, {lon}], desc: "{desc_escaped}", type: "umkm" }}'
            new_entries.append(entry)
        except Exception as e:
            print(f"Error row {idx}: {e}")
            continue

print(f"Total UMKM generated: {len(new_entries)}")

html_path = '../index.html'
with open(html_path, 'r', encoding='utf-8') as f:
    html_content = f.read()

# Replace the UMKM section in index.html
# Find the marker
marker = '            // UMKM & Kuliner (Data dari Excel)'
end_marker = '        ];\n\n        locations.forEach'

if marker in html_content and end_marker in html_content:
    parts = html_content.split(marker)
    before_marker = parts[0] + marker + '\n'
    
    parts_after = parts[1].split(end_marker)
    after_marker = '\n        ];\n\n        locations.forEach' + parts_after[1]
    
    new_html = before_marker + ',\n'.join(new_entries) + after_marker
    
    with open(html_path, 'w', encoding='utf-8') as f:
        f.write(new_html)
    print("Successfully fixed coordinates and updated index.html")
else:
    print("Markers not found in index.html")
