import json
import re
import os

files = [
    '../locales/en_v2.json',
    '../locales/ru_v2.json',
    '../locales/kk_v3.json',
    '../locales/kk_v2.json'
]

def remove_spoilers_from_val(val):
    original = val
    # English/kk_v2 (e.g. "Ruthenium is element #44, a versatile...")
    val = re.sub(r'^[A-Za-z]+\s*is element #\d+,\s*a\s*', 'A ', val)
    val = re.sub(r'^[A-Za-z]+\s*is element #\d+,\s*an\s*', 'An ', val)
    
    # Russian (e.g. "Рутений — это элемент №44, универсальный...")
    val = re.sub(r'^[А-Яа-яёЁ]+\s*[-—–]\s*это элемент №\d+,\s*', '', val)
    
    # Kazakh (e.g. "Рутений — бұл №44 элемент, әртүрлі...")
    val = re.sub(r'^[А-Яа-яёЁәғқңөұүһіӘҒҚҢӨҰҮҺІ]+\s*[-—–]\s*бұл №\d+\s*элемент,\s*', '', val)
    
    if val != original and len(val) > 0:
        val = val[0].upper() + val[1:]
    return val

for filepath in files:
    if not os.path.exists(filepath):
        continue
        
    with open(filepath, 'r', encoding='utf-8') as f:
        data = json.load(f)
        
    updated = 0
    for key, val in data.items():
        if key.startswith('system.') and key.endswith('.desc'):
            new_val = remove_spoilers_from_val(val)
            if new_val != val:
                data[key] = new_val
                updated += 1
                
    if updated > 0:
        with open(filepath, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=4)
        print(f"Updated {updated} descKeys in {filepath}")
    else:
        print(f"No changes in {filepath}")
