import sys

file_path = r'c:\Users\Александр\OneDrive\Рабочий стол\chemestry\locales\kk_v2.json'

with open(file_path, 'rb') as f:
    content = f.read()
    
pos = 13996
line_no = content[:pos].count(b'\n') + 1
print(f"Byte offset {pos} is at line {line_no}")

# Show context around that byte
ctx_start = max(0, pos - 50)
ctx_end = min(len(content), pos + 50)
print(f"Context (repr): {repr(content[ctx_start:ctx_end])}")
