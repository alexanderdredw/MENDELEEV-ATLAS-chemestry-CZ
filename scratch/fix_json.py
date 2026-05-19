import json
import os
import re

def fix_json_file(filepath):
    print(f"Fixing {filepath}...")
    
    # Read binary to handle encoding issues
    with open(filepath, 'rb') as f:
        content_bytes = f.read()
    
    # Standardize to UTF-8, replacing errors
    content = content_bytes.decode('utf-8', errors='replace')
    
    # Specific fix for kk_v2.json broken char at 10876
    if 'kk_v2.json' in filepath:
        # We saw \xd0 followed by space at 10876
        # Let's see if we can find it in the decoded string
        # Replacement character is \ufffd
        content = content.replace('\ufffd ', ' ') # remove the broken byte if it's a stand-alone \xd0

    # Remove duplicate keys
    try:
        def keep_last_duplicate(ordered_pairs):
            d = {}
            for k, v in ordered_pairs:
                d[k] = v
            return d
        
        # This will naturally keep the last value for each key
        data = json.loads(content, object_pairs_hook=keep_last_duplicate)
        
        # Save back as pretty-printed JSON
        with open(filepath, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=4)
        print("  Fixed and saved.")
        
    except json.JSONDecodeError as e:
        print(f"  JSON Decode Error: {e}")
        # If it's a quote issue, try to fix common mistakes
        # (Very basic fix for unescaped quotes inside values)
        # This is risky, let's try to just report it if it fails.
        pass

locales_dir = r'c:\Users\Александр\OneDrive\Рабочий стол\chemestry\locales'
for filename in os.listdir(locales_dir):
    if filename.endswith('.json'):
        fix_json_file(os.path.join(locales_dir, filename))
