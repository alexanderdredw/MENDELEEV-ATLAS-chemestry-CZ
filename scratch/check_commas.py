import sys

file_path = r'c:\Users\Александр\OneDrive\Рабочий стол\chemestry\locales\kk_v2.json'

with open(file_path, 'rb') as f:
    lines = f.readlines()
    print(f"Line 109: {repr(lines[108])}")
    print(f"Line 110: {repr(lines[109])}")
