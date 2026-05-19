import json
import sys

file_path = r'c:\Users\Александр\OneDrive\Рабочий стол\chemestry\locales\kk_v2.json'

with open(file_path, 'rb') as f:
    content = f.read()

# Try to decode as utf-8, see where it fails
try:
    decoded = content.decode('utf-8')
    print("UTF-8 Decode OK")
    try:
        json.loads(decoded)
        print("JSON Load OK")
    except json.JSONDecodeError as e:
        print(f"JSON Error: {e}")
except UnicodeDecodeError as e:
    print(f"UTF-8 Decode Error: {e}")
    print(f"At byte {e.start}")
    # Context
    start = max(0, e.start - 50)
    end = min(len(content), e.start + 50)
    print(f"Context: {content[start:end]}")
