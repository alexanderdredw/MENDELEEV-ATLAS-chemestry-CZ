
import json

def find_missing_keys(source_file, target_file):
    with open(source_file, 'r', encoding='utf-8') as f:
        source_data = json.load(f)
    
    with open(target_file, 'r', encoding='utf-8') as f:
        target_data = json.load(f)
    
    missing_keys = {}
    for key, value in source_data.items():
        if key not in target_data:
            missing_keys[key] = value
            
    return missing_keys

ru_path = r'locales\ru_v2.json'
kk_path = r'locales\kk_v2.json'
out_path = r'scratch\missing_keys_kk.json'

missing = find_missing_keys(ru_path, kk_path)
with open(out_path, 'w', encoding='utf-8') as f:
    json.dump(missing, f, indent=4, ensure_ascii=False)
print(f"Found {len(missing)} missing keys in KK. Results saved to {out_path}")
