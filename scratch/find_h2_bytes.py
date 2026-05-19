
import json

with open(r'locales\kk_v2.json', 'rb') as f:
    data = f.read()

# Find the string 'синен екі атомды молекулалар — H'
pattern = 'екі атомды молекулалар — H'.encode('utf-8')
pos = data.find(pattern)
if pos != -1:
    start = pos
    end = pos + len(pattern) + 5
    chunk = data[start:end]
    print(f"Bytes: {' '.join(f'{b:02x}' for b in chunk)}")
else:
    print("Pattern not found")
