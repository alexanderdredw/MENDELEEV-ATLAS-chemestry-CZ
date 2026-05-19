import os

filepath = r'c:\Users\Александр\OneDrive\Рабочий стол\chemestry\locales\kk_v2.json'

with open(filepath, 'rb') as f:
    lines = f.readlines()

line81 = lines[80]
print(f"Line 81 length: {len(line81)}")
print(f"Line 81: {line81.hex()}")
