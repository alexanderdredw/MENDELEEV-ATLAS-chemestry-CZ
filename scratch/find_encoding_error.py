import sys

file_path = r'c:\Users\Александр\OneDrive\Рабочий стол\chemestry\locales\kk_v2.json'

with open(file_path, 'r', encoding='utf-8', errors='replace') as f:
    lines = f.readlines()
    for i, line in enumerate(lines):
        if '' in line: # Unicode replacement character
            print(f"Error at line {i+1}: {line.strip()}")
            # Print some context
            for j in range(max(0, i-2), min(len(lines), i+3)):
                print(f"{j+1}: {lines[j].strip()}")
            print("-" * 20)
