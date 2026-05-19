import os
import re

filepath = r'c:\Users\Александр\OneDrive\Рабочий стол\chemestry\locales\kk_v2.json'

with open(filepath, 'rb') as f:
    content = f.read()

pos = 7122
rest = content[pos:].decode('utf-8', errors='replace')

keys = re.findall(r'"([^"]+)"\s*:', rest)
print(f"Found keys after 7122: {keys[:20]}")
