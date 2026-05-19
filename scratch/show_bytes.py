
def show_bytes_around(filepath, target_byte, context=10):
    with open(filepath, 'rb') as f:
        data = f.read()
    
    for i, b in enumerate(data):
        if b == target_byte:
            start = max(0, i - context)
            end = min(len(data), i + context + 1)
            chunk = data[start:end]
            hex_chunk = ' '.join(f'{x:02x}' for x in chunk)
            try:
                text_chunk = chunk.decode('utf-8', errors='replace')
            except:
                text_chunk = "???"
            print(f"At {i}: {hex_chunk} | '{text_chunk}'")
            # Only show first 5 occurrences
            if i > 1000: # Wait, I want to see a few
                pass

show_bytes_around(r'locales\kk_v2.json', 0xbc, 5)
