import os

filepath = r'c:\Users\Александр\OneDrive\Рабочий стол\chemestry\locales\kk_v2.json'

with open(filepath, 'rb') as f:
    content = f.read()

pos = 7122
end = pos + 1000
print(f"Content after 7122: {content[pos:end].decode('utf-8', errors='replace')}")
