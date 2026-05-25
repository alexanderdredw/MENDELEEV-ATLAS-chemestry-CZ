import json

files_config = [
    {
        'file': '../locales/en_v2.json',
        'translations': {
            'scientists.quiz.question_intro': 'Who is this scientist?',
            'scientists.quiz.difficulty': 'Professional'
        }
    },
    {
        'file': '../locales/ru_v2.json',
        'translations': {
            'scientists.quiz.question_intro': 'Кто этот учёный?',
            'scientists.quiz.difficulty': 'Профессионал'
        }
    },
    {
        'file': '../locales/kk_v3.json',
        'translations': {
            'scientists.quiz.question_intro': 'Бұл қандай ғалым?',
            'scientists.quiz.difficulty': 'Кәсіпқой'
        }
    },
    {
        'file': '../locales/kk_v2.json',
        'translations': {
            'scientists.quiz.question_intro': 'Бұл қандай ғалым?',
            'scientists.quiz.difficulty': 'Кәсіпқой'
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
        print(f"Updated {file} with scientists quiz questions.")
    except Exception as e:
        print(f"Error processing {file}: {e}")
