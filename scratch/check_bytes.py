
import os

def check_invalid_bytes(filepath):
    print(f"Checking {filepath} for invalid bytes...")
    with open(filepath, 'rb') as f:
        data = f.read()
    
    invalid_indices = [i for i, b in enumerate(data) if b == 0xbc]
    
    if invalid_indices:
        print(f"Found {len(invalid_indices)} occurrences of 0xbc at indices: {invalid_indices[:10]}...")
    else:
        print("No 0xbc bytes found.")
        
    try:
        data.decode('utf-8')
        print("File is valid UTF-8.")
    except UnicodeDecodeError as e:
        print(f"UTF-8 Decode Error: {e}")

check_invalid_bytes(r'locales\kk_v2.json')
