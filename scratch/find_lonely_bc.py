
def find_lonely_bc(filepath):
    with open(filepath, 'rb') as f:
        data = f.read()
    
    lonely = []
    for i, b in enumerate(data):
        if b == 0xbc:
            # Check if it's a valid UTF-8 continuation
            # For 0xbc, the leading byte must be 0xc0-0xdf (for 2-byte)
            # or it could be part of 3-byte or 4-byte sequences.
            # But mostly it should be 0xd0 0xbc or 0xd1 0xbc in Cyrillic.
            if i == 0 or data[i-1] not in [0xd0, 0xd1]:
                # It might be part of a 3-byte sequence (e.g. e2 82 bc)
                if i >= 2 and data[i-2] == 0xe2:
                    continue # Likely valid
                
                lonely.append(i)
                
    return lonely

lonely = find_lonely_bc(r'locales\kk_v2.json')
print(f"Found {len(lonely)} lonely 0xbc bytes.")
if lonely:
    print(f"Indices: {lonely[:10]}")
