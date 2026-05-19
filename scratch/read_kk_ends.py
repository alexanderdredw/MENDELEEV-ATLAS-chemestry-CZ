import os

filepath = r'c:\Users\Александр\OneDrive\Рабочий стол\chemestry\locales\kk_v2.json'

with open(filepath, 'rb') as f:
    lines = f.readlines()

for i in [75, 76, 77]:
    line = lines[i].strip()
    print(f"Line {i+1} end (hex): {line[-20:].hex()}")
    print(f"Line {i+1} end (ascii): {line[-20:].decode('ascii', errors='replace')}")
