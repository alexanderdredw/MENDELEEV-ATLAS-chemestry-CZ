import sys

file_path = r'c:\Users\Александр\OneDrive\Рабочий стол\chemestry\locales\kk_v2.json'

with open(file_path, 'rb') as f:
    content = f.read()

target = b'ai.cardio.study.1'
idx = content.find(target)
print(f"Key {target} found at {idx}")
if idx != -1:
    print(f"Context: {content[idx:idx+200]}")
    try:
        print(f"Decoded UTF-8: {content[idx:idx+200].decode('utf-8')}")
    except:
        print("UTF-8 decode failed")
    try:
        print(f"Decoded CP1251: {content[idx:idx+200].decode('cp1251')}")
    except:
        print("CP1251 decode failed")
