import os

filepath = r'c:\Users\Александр\OneDrive\Рабочий стол\chemestry\locales\kk_v2.json'

with open(filepath, 'rb') as f:
    lines = f.readlines()

for i in range(75, 85):
    if i < len(lines):
        line = lines[i].strip()
        print(f"Line {i+1}: {line[:50].hex()} ... {line[-20:].hex()}")
