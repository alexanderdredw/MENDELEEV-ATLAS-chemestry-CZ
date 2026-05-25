import json

files_config = [
    {
        'file': '../locales/en_v2.json',
        'translations': {
            'scientists.quiz.level.easy': 'Easy',
            'scientists.quiz.level.medium': 'Medium',
            'scientists.quiz.level.hard': 'Hard'
        }
    },
    {
        'file': '../locales/ru_v2.json',
        'translations': {
            'scientists.quiz.level.easy': 'Лёгкий',
            'scientists.quiz.level.medium': 'Средний',
            'scientists.quiz.level.hard': 'Сложный'
        }
    },
    {
        'file': '../locales/kk_v3.json',
        'translations': {
            'scientists.quiz.level.easy': 'Оңай',
            'scientists.quiz.level.medium': 'Орташа',
            'scientists.quiz.level.hard': 'Қиын'
        }
    },
    {
        'file': '../locales/kk_v2.json',
        'translations': {
            'scientists.quiz.level.easy': 'Оңай',
            'scientists.quiz.level.medium': 'Орташа',
            'scientists.quiz.level.hard': 'Қиын'
        }
    }
]

for conf in files_config:
    file = conf['file']
    try:
        with open(file, 'r', encoding='utf-8') as f:
            data = json.load(f)
            
        data.update(conf['translations'])
            
        with open(file, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=4)
        print(f"Updated {file} with adaptive difficulty levels.")
    except Exception as e:
        print(f"Error processing {file}: {e}")
