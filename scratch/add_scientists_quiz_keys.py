import json

files_config = [
    {
        'file': '../locales/en_v2.json',
        'translations': {
            'scientists.quiz.title': 'Scientists Knowledge Test',
            'scientists.quiz.subtitle': 'Test your knowledge about the greatest minds in chemistry.'
        }
    },
    {
        'file': '../locales/ru_v2.json',
        'translations': {
            'scientists.quiz.title': 'Тест на знание учёных',
            'scientists.quiz.subtitle': 'Проверьте свои знания о величайших умах химии.'
        }
    },
    {
        'file': '../locales/kk_v3.json',
        'translations': {
            'scientists.quiz.title': 'Ғалымдар туралы білім тесті',
            'scientists.quiz.subtitle': 'Химиядағы ең ұлы тұлғалар туралы біліміңізді тексеріңіз.'
        }
    },
    {
        'file': '../locales/kk_v2.json',
        'translations': {
            'scientists.quiz.title': 'Ғалымдар туралы білім тесті',
            'scientists.quiz.subtitle': 'Химиядағы ең ұлы тұлғалар туралы біліміңізді тексеріңіз.'
        }
    }
]

for conf in files_config:
    file = conf['file']
    try:
        with open(file, 'r', encoding='utf-8') as f:
            data = json.load(f)
            
        # Add new keys
        data.update(conf['translations'])
            
        with open(file, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=4)
        print(f"Updated {file} with scientists quiz translations.")
    except Exception as e:
        print(f"Error processing {file}: {e}")
