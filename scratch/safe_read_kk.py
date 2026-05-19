
import sys

path = r'c:\Users\Александр\OneDrive\Рабочий стол\chemestry\locales\kk_v2.json'
output_path = r'c:\Users\Александр\OneDrive\Рабочий стол\chemestry\scratch\kk_full_dump.txt'

with open(path, 'rb') as f:
    data = f.read()

with open(output_path, 'w', encoding='utf-8') as out:
    lines = data.split(b'\n')
    for i, line in enumerate(lines):
        try:
            decoded = line.decode('utf-8')
            out.write(f"{decoded}\n")
        except UnicodeDecodeError as e:
            # For the broken part, I'll just skip or placeholder
            out.write(f"// DECODE ERROR AT LINE {i+1}: {line.hex()}\n")

print(f"Dumped {len(lines)} lines to {output_path}")
