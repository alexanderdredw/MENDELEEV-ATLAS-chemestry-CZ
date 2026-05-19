import re
import json
import os

def rescue_json(filepath):
    print(f"Rescuing {filepath}...")
    with open(filepath, 'rb') as f:
        content = f.read().decode('utf-8', errors='replace')
    
    # Try to find all "key": "value" pairs
    # Note: this is a heuristic and might miss complex values, but these files are simple.
    # We look for "key": "value" where value is anything up to a ", or "}
    pattern = r'"([^"]+)"\s*:\s*"(.*?)"(?=\s*[,}])'
    matches = re.findall(pattern, content, re.DOTALL)
    
    rescued_data = {}
    for key, value in matches:
        # If key is duplicated, the later one wins (usually the newer/better one)
        # But for system.* keys, we might want to be careful.
        rescued_data[key] = value
    
    # Save back
    with open(filepath, 'w', encoding='utf-8') as f:
        json.dump(rescued_data, f, ensure_ascii=False, indent=4)
    print(f"  Rescued {len(rescued_data)} keys.")

locales_dir = r'c:\Users\Александр\OneDrive\Рабочий стол\chemestry\locales'
rescue_json(os.path.join(locales_dir, 'kk_v2.json'))
