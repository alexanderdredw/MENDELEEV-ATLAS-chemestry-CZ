import os

filepath = r'c:\Users\Александр\OneDrive\Рабочий стол\chemestry\locales\kk_v2.json'

with open(filepath, 'rb') as f:
    content = f.read()

# Find all " characters and check if they are part of "key": "value" pattern
# Or just try to find places where a " is not followed by : or , or } or {
# Actually, let's just look at line 77 again very carefully.

lines = content.split(b'\n')
line77 = lines[76] # 0-indexed

print(f"Line 77 starts with: {line77[:50].decode('utf-8', errors='replace')}")
print(f"Line 77 ends with: {line77[-50:].decode('utf-8', errors='replace')}")

# Count quotes
quotes = line77.count(b'"')
print(f"Number of quotes in line 77: {quotes}")
if quotes % 2 != 0:
    print("WARNING: Odd number of quotes in line 77!")
    # Find all quotes and their positions
    for i, b in enumerate(line77):
        if b == ord('"'):
            # Check if it's escaped
            if i > 0 and line77[i-1] == ord('\\'):
                continue
            # Print context
            ctx = line77[max(0, i-10):i+10].decode('utf-8', errors='replace')
            print(f"Quote at {i}: ...{ctx}...")
