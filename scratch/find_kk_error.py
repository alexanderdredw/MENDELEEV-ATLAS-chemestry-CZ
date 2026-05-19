import os

filepath = r'c:\Users\Александр\OneDrive\Рабочий стол\chemestry\locales\kk_v2.json'

with open(filepath, 'rb') as f:
    content_bytes = f.read()

# Position 7121
pos = 7121
context_bytes = content_bytes[pos-20:pos+20]
print(f"Context around 7121 (hex): {context_bytes.hex()}")
# Map each byte to its char if possible
for i, b in enumerate(context_bytes):
    print(f"{pos-20+i}: {hex(b)} {chr(b) if b < 128 else '?'}")
