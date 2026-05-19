import json
import os

locales_dir = r'c:\Users\Александр\OneDrive\Рабочий стол\chemestry\locales'
with open(os.path.join(locales_dir, 'en_v2.json'), 'r', encoding='utf-8') as f:
    en_data = json.load(f)
print(f"EN keys: {len(en_data)}")

with open(os.path.join(locales_dir, 'kk_v2.json'), 'r', encoding='utf-8') as f:
    kk_data = json.load(f)
print(f"KK keys: {len(kk_data)}")

missing = set(en_data.keys()) - set(kk_data.keys())
print(f"Missing in KK: {len(missing)}")
if missing: print("Top 10 missing:", sorted(list(missing))[:10])
