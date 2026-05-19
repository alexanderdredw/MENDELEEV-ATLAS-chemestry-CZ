import sys

file_path = r'c:\Users\Александр\OneDrive\Рабочий стол\chemestry\locales\kk_v2.json'

with open(file_path, 'rb') as f:
    for i in range(50):
        line = f.readline()
        print(f"{i+1}: {repr(line)}")
