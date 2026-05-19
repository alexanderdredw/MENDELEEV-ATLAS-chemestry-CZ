import os

filepath = r'c:\Users\Александр\OneDrive\Рабочий стол\chemestry\locales\kk_v2.json'

with open(filepath, 'rb') as f:
    lines = f.readlines()

for i in range(74, 80):
    if i < len(lines):
        line = lines[i].strip()
        print(f"Line {i+1} length: {len(line)}")
        print(f"Line {i+1} last 5 bytes (hex): {line[-5:].hex()}")
