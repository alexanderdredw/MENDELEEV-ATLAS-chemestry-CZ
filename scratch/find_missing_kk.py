import os

filepath = r'c:\Users\Александр\OneDrive\Рабочий стол\chemestry\locales\kk_v2.json'

with open(filepath, 'rb') as f:
    content = f.read()

keys_to_find = [b'system.skeletal.fact', b'system.muscular.title', b'system.muscular.desc']
for key in keys_to_find:
    if key in content:
        print(f"Key {key} found at {content.find(key)}")
    else:
        print(f"Key {key} NOT found")
