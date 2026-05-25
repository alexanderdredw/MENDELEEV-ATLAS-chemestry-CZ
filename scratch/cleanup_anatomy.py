import json
import re

files = ['../locales/en_v2.json', '../locales/ru_v2.json', '../locales/kk_v3.json', '../locales/kk_v2.json']
anatomy = ['respiratory', 'digestive', 'cardiovascular', 'reproductive', 'nervous', 'muscular', 'integumentary', 'skeletal', 'immune', 'urinary', 'endocrine']

for file in files:
    try:
        with open(file, 'r', encoding='utf-8') as f:
            data = json.load(f)
        
        keys_to_delete = []
        for key in data.keys():
            for sys in anatomy:
                if key.startswith(f"system.{sys}.") or key.startswith(f"ai.{sys}.") or key.startswith(f"group.{sys}") or key.startswith(f"glossary.sect.{sys}"):
                    keys_to_delete.append(key)
                    
        if not keys_to_delete:
            print(f"No keys to delete in {file}")
            continue
            
        for key in keys_to_delete:
            del data[key]
            
        with open(file, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=4)
        print(f"Deleted {len(keys_to_delete)} keys from {file}")
    except Exception as e:
        print(f"Error processing {file}: {e}")
