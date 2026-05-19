import os
import json

locales_dir = r'c:\Users\Александр\OneDrive\Рабочий стол\chemestry\locales'
filepath = os.path.join(locales_dir, 'kk_v2.json')

with open(filepath, 'r', encoding='utf-8', errors='replace') as f:
    content = f.read()

# Fix the broken character at 10876
# We saw \xd0 followed by space. It's likely the end of 'Тритий' -> 'Тритий'
# Wait, let's see what else is there.

try:
    data = json.loads(content)
    print("JSON loaded with replacement characters.")
    
    def dict_raise_on_duplicates(ordered_pairs):
        d = {}
        for k, v in ordered_pairs:
            if k in d:
                print(f"DUPLICATE KEY: {k}")
            d[k] = v
        return d

    json.loads(content, object_pairs_hook=dict_raise_on_duplicates)
except Exception as e:
    print(f"JSON Error: {e}")
