import os

filepath = r'c:\Users\Александр\OneDrive\Рабочий стол\chemestry\locales\kk_v2.json'

with open(filepath, 'rb') as f:
    lines = f.readlines()

line77 = lines[76]
start = 1260
end = 1280
print(f"Line 77 around 1270 (hex): {line77[start:end].hex()}")
print(f"Line 77 around 1270 (ascii): {line77[start:end].decode('ascii', errors='replace')}")
