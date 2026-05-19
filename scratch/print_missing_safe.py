import json
import os

locales_dir = r'c:\Users\Александр\OneDrive\Рабочий стол\chemestry\locales'
all_data = {}
for filename in ['en_v2.json', 'ru_v2.json', 'kk_v2.json']:
    path = os.path.join(locales_dir, filename)
    with open(path, 'r', encoding='utf-8', errors='replace') as f:
        all_data[filename] = json.load(f)

en_keys = set(all_data['en_v2.json'].keys())
ru_keys = set(all_data['ru_v2.json'].keys())
kk_keys = set(all_data['kk_v2.json'].keys())

missing_ru = en_keys - ru_keys
missing_kk = en_keys - kk_keys

print(f"Missing in RU: {len(missing_ru)}")
print(f"Missing in KK: {len(missing_kk)}")
if missing_kk: print("Some missing keys in KK:", sorted(list(missing_kk))[:20])
