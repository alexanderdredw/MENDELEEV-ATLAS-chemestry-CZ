import json
import re
import os

files = [
    '../locales/en_v2.json',
    '../locales/ru_v2.json',
    '../locales/kk_v3.json',
    '../locales/kk_v2.json'
]

def capitalize_first(s):
    if not s:
        return s
    return s[0].upper() + s[1:]

for filepath in files:
    if not os.path.exists(filepath):
        continue
        
    with open(filepath, 'r', encoding='utf-8') as f:
        data = json.load(f)
        
    updated = 0
    for key, val in data.items():
        if key.startswith('system.') and key.endswith('.desc'):
            original_val = val
            
            # English / kk_v2 fallback: "Ruthenium is element #44, a versatile..."
            match_en = re.match(r'^[A-Za-z]+ is element #\d+, a (.*)', val)
            if match_en:
                val = 'A ' + match_en.group(1)
                
            # Russian: "Рутений — это элемент №44, универсальный..."
            # Note: handle cases where it might be "универсальный" or something else
            match_ru = re.match(r'^[А-Яа-яёЁ]+ — это элемент №\d+, (.*)', val)
            if match_ru:
                val = capitalize_first(match_ru.group(1))

            # Kazakh (kk_v3): "Рутений — бұл №44 элемент, әртүрлі..."
            match_kk = re.match(r'^[А-Яа-яёЁәғқңөұүһіӘҒҚҢӨҰҮҺІ]+ — бұл №\d+ элемент, (.*)', val)
            if match_kk:
                val = capitalize_first(match_kk.group(1))

            # Another Kazakh format just in case: "Рутений - бұл №44 элемент, "
            match_kk2 = re.match(r'^[А-Яа-яёЁәғқңөұүһіӘҒҚҢӨҰҮҺІ]+\s*[-—]\s*бұл №\d+ элемент, (.*)', val)
            if match_kk2:
                val = capitalize_first(match_kk2.group(1))

            if val != original_val:
                data[key] = val
                updated += 1
                
    if updated > 0:
        with open(filepath, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=4)
        print(f"Updated {updated} descKeys in {filepath}")
    else:
        print(f"No changes in {filepath}")
