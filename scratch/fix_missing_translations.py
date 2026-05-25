import json
import re
import time
from googletrans import Translator

en_path = '../locales/en_v2.json'
kk_path = '../locales/kk_v3.json'

with open(en_path, 'r', encoding='utf-8') as f:
    en_data = json.load(f)
with open(kk_path, 'r', encoding='utf-8') as f:
    kk_data = json.load(f)

translator = Translator()
cyrillic_pattern = re.compile('[а-яА-Я]')

def fix_translations():
    keys_to_fix = [k for k, v in en_data.items() if k.startswith('glossary.') and cyrillic_pattern.search(str(v))]
    print(f"Found {len(keys_to_fix)} keys to translate.")

    for i, key in enumerate(keys_to_fix):
        text_ru = en_data[key] # since it's cyrillic, it's the raw Russian text
        print(f"Translating {i+1}/{len(keys_to_fix)}: {key}")
        try:
            en_trans = translator.translate(text_ru, src='ru', dest='en').text
            kk_trans = translator.translate(text_ru, src='ru', dest='kk').text
            
            en_data[key] = en_trans
            kk_data[key] = kk_trans
            
            # Simple cleanup for common google translate weirdness
            if "\text" in en_data[key]:
                en_data[key] = en_data[key].replace("\text", "")
            if "\text" in kk_data[key]:
                kk_data[key] = kk_data[key].replace("\text", "")
                
            time.sleep(0.5)
        except Exception as e:
            print(f"Failed on {key}: {e}")
            time.sleep(2)

    with open(en_path, 'w', encoding='utf-8') as f:
        json.dump(en_data, f, ensure_ascii=False, indent=4)
    with open(kk_path, 'w', encoding='utf-8') as f:
        json.dump(kk_data, f, ensure_ascii=False, indent=4)
        
    print("Completed translation updates!")

if __name__ == "__main__":
    fix_translations()
