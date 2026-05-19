import sys

file_path = r'c:\Users\Александр\OneDrive\Рабочий стол\chemestry\locales\kk_v2.json'

with open(file_path, 'rb') as f:
    content = f.read()

# Try to find common JSON errors or weird bytes
for i, b in enumerate(content):
    if b > 127:
        # Check if it's part of a valid UTF-8 sequence
        try:
            content[i:i+4].decode('utf-8')
        except UnicodeDecodeError:
            # Check if this is the start of an invalid sequence
            # But wait, it might be in the middle of a sequence.
            # Let's just find the \xbc we saw earlier.
            pass

target = b'\xbc'
start = 0
while True:
    idx = content.find(target, start)
    if idx == -1:
        break
    print(f"Found \\xbc at byte offset {idx}")
    # Show context
    ctx_start = max(0, idx - 40)
    ctx_end = min(len(content), idx + 40)
    ctx = content[ctx_start:ctx_end]
    print(f"Context: {ctx}")
    try:
        print(f"Decoded (errors='replace'): {ctx.decode('utf-8', errors='replace')}")
    except:
        print("Could not decode context")
    start = idx + 1
