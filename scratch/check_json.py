import json
import os

def check_json(filepath):
    print(f"Checking {filepath}...")
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            # Try to load it normally first
            data = json.loads(content)
            print("  JSON is syntactically valid.")
            
            # Check for duplicate keys by parsing manually or using a custom decoder
            def dict_raise_on_duplicates(ordered_pairs):
                """Reject duplicate keys."""
                d = {}
                for k, v in ordered_pairs:
                    if k in d:
                        print(f"  DUPLICATE KEY FOUND: {k}")
                    d[k] = v
                return d

            json.loads(content, object_pairs_hook=dict_raise_on_duplicates)
            
    except Exception as e:
        print(f"  ERROR: {e}")

locales_dir = r'c:\Users\Александр\OneDrive\Рабочий стол\chemestry\locales'
for filename in os.listdir(locales_dir):
    if filename.endswith('.json'):
        check_json(os.path.join(locales_dir, filename))
