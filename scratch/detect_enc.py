import os

locales_dir = r'c:\Users\Александр\OneDrive\Рабочий стол\chemestry\locales'
filepath = os.path.join(locales_dir, 'kk_v2.json')

encodings = ['utf-8', 'utf-16', 'cp1251', 'kz1048', 'iso-8859-5']

for enc in encodings:
    try:
        with open(filepath, 'r', encoding=enc) as f:
            content = f.read(100) # just first 100 chars
            print(f"Encoding {enc} works. First 100 chars: {content}")
            break
    except Exception as e:
        print(f"Encoding {enc} failed: {e}")
