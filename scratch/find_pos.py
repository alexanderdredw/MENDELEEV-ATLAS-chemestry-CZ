import os

filepath = r'c:\Users\Александр\OneDrive\Рабочий стол\chemestry\locales\kk_v2.json'

with open(filepath, 'rb') as f:
    content = f.read()

target = b'"system.nervous.title"'
pos = content.find(target)
print(f"Position of {target}: {pos}")
if pos > 0:
    print(f"Bytes before: {content[pos-20:pos].hex()}")
