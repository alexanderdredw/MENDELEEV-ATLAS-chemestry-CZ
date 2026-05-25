import json
import os
import time
from deep_translator import GoogleTranslator

ru_path = os.path.join(os.path.dirname(__file__), '../locales/ru_v2.json')
en_path = os.path.join(os.path.dirname(__file__), '../locales/en_v2.json')
kk_path = os.path.join(os.path.dirname(__file__), '../locales/kk_v3.json')

with open(ru_path, 'r', encoding='utf-8') as f:
    ru_json = json.load(f)

with open(en_path, 'r', encoding='utf-8') as f:
    en_json = json.load(f)

with open(kk_path, 'r', encoding='utf-8') as f:
    kk_json = json.load(f)

en_translator = GoogleTranslator(source='ru', target='en')
kk_translator = GoogleTranslator(source='ru', target='kk')

keys_to_translate = [k for k in ru_json if k.startswith('glossary.')]

for i, key in enumerate(keys_to_translate):
    ru_text = ru_json[key]
    
    # Check if English translation is needed (if it equals Russian text)
    if en_json.get(key) == ru_text:
        try:
            en_json[key] = en_translator.translate(ru_text)
            print(f"[EN] {key}: {en_json[key]}")
        except Exception as e:
            print(f"Error EN {key}: {e}")
            
    # Check if Kazakh translation is needed
    if kk_json.get(key) == ru_text:
        try:
            kk_json[key] = kk_translator.translate(ru_text)
            print(f"[KK] {key}: {kk_json[key]}")
        except Exception as e:
            print(f"Error KK {key}: {e}")

    # Write every 10 items to save progress
    if i % 10 == 0:
        with open(en_path, 'w', encoding='utf-8') as f:
            json.dump(en_json, f, ensure_ascii=False, indent=4)
        with open(kk_path, 'w', encoding='utf-8') as f:
            json.dump(kk_json, f, ensure_ascii=False, indent=4)

with open(en_path, 'w', encoding='utf-8') as f:
    json.dump(en_json, f, ensure_ascii=False, indent=4)
with open(kk_path, 'w', encoding='utf-8') as f:
    json.dump(kk_json, f, ensure_ascii=False, indent=4)

print("Translation complete!")
