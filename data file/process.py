import pandas as pd
import random
import json

df = pd.read_excel('Daftar_UMKM_Jajanan_Ringan_Format.xlsx')

coords_map = {
    'bandar lampung': [-5.4294, 105.2638],
    'lampung selatan': [-5.7196, 105.5905],
    'lampung tengah': [-4.9458, 105.2238],
    'lampung timur': [-5.1118, 105.6729],
    'pesawaran': [-5.4214, 105.0886],
    'pringsewu': [-5.3582, 104.9749],
    'metro': [-5.1136, 105.3067],
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

js_entries = []

# To avoid identical coordinates, we add a small jitter (around ~5-10km offset)
def get_jitter():
    return (random.random() - 0.5) * 0.1

for idx, row in df.iterrows():
    try:
        usaha_col = 'Nama/Merk Usaha'
        kab_col = 'Alamat Usaha (Kabupaten / Kota)'
        prod_col = 'Produk Kuliner (exc. Bakso,Pempek, dll)'
        kec_col = 'Alamat Usaha (Kecamatan)'

        usaha = str(row[usaha_col]).strip()
        if pd.isna(row[usaha_col]) or usaha == 'nan':
            continue
        
        kab = str(row[kab_col]).strip().lower()
        
        # Find base coord
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
        
        # Escape quotes
        usaha = usaha.replace('\"', '\\\"').replace('\n', ' ')
        desc = desc.replace('\"', '\\\"')
        
        entry = f'            {{ name: "{usaha}", coords: [{lat}, {lon}], desc: "{desc}", type: "umkm" }}'
        js_entries.append(entry)
    except Exception as e:
        print(f"Error row {idx}: {e}")
        continue

print(f'Total UMKM processed: {len(js_entries)}')

with open('umkm_output.txt', 'w', encoding='utf-8') as f:
    f.write(',\n'.join(js_entries))
