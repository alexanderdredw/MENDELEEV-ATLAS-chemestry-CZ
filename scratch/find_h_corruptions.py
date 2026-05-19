
import json
import re

with open(r'locales\kk_v2.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

for key, value in data.items():
    if isinstance(value, str):
        matches = re.findall(r'H[^\s\w\.,\(\)<b><br>•—]', value)
        if matches:
            print(f"Key: {key}")
            print(f"Value: {value}")
            print(f"Matches: {matches}")
            print("-" * 20)
