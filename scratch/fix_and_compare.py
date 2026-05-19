import json
import os

def fix_json_file(filepath):
    print(f"Fixing {filepath}...")
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        def keep_last_duplicate(ordered_pairs):
            d = {}
            for k, v in ordered_pairs:
                d[k] = v
            return d
        
        data = json.loads(content, object_pairs_hook=keep_last_duplicate)
        
        with open(filepath, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=4)
        print("  Fixed and saved.")
        return data
    except Exception as e:
        print(f"  Error fixing {filepath}: {e}")
        return None

locales_dir = r'c:\Users\Александр\OneDrive\Рабочий стол\chemestry\locales'
all_data = {}
for filename in ['en_v2.json', 'ru_v2.json', 'kk_v2.json']:
    path = os.path.join(locales_dir, filename)
    all_data[filename] = fix_json_file(path)

# Compare keys
en_keys = set(all_data['en_v2.json'].keys()) if all_data['en_v2.json'] else set()
ru_keys = set(all_data['ru_v2.json'].keys()) if all_data['ru_v2.json'] else set()
kk_keys = set(all_data['kk_v2.json'].keys()) if all_data['kk_v2.json'] else set()

print("\nMissing keys in RU relative to EN:", en_keys - ru_keys)
print("Missing keys in KK relative to EN:", en_keys - kk_keys)
print("Extra keys in RU relative to EN:", ru_keys - en_keys)
print("Extra keys in KK relative to EN:", kk_keys - en_keys)
