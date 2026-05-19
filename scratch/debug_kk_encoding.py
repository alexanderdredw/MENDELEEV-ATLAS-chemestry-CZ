import os
import json

locales_dir = r'c:\Users\Александр\OneDrive\Рабочий стол\chemestry\locales'
filepath = os.path.join(locales_dir, 'kk_v2.json')

try:
    with open(filepath, 'rb') as f:
        data = f.read()
    
    # Try to find the position of the error
    try:
        data.decode('utf-8')
        print("File is valid UTF-8 when read as whole.")
    except UnicodeDecodeError as e:
        print(f"UnicodeDecodeError at {e.start}: {e.reason}")
        print(f"Context: {data[max(0, e.start-20):e.start+20]}")
        
except Exception as e:
    print(f"Error: {e}")
