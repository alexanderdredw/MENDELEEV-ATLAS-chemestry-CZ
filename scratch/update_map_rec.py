import json
import re

files_config = [
    {
        'file': '../locales/en_v2.json',
        'translations': {
            'map.rec.mastered': 'Excellent! Maintain your streak.',
            'map.rec.good': 'Great progress. Try a challenging quiz.',
            'map.rec.developing': 'Keep going! Review the basic properties.',
            'map.rec.weak': 'Start by exploring the fundamentals of this group.'
        }
    },
    {
        'file': '../locales/ru_v2.json',
        'translations': {
            'map.rec.mastered': 'Отлично! Поддерживайте свой результат.',
            'map.rec.good': 'Хороший прогресс. Попробуйте сложный тест.',
            'map.rec.developing': 'Продолжайте! Изучите базовые свойства.',
            'map.rec.weak': 'Начните с изучения основ этой группы.'
        }
    },
    {
        'file': '../locales/kk_v3.json',
        'translations': {
            'map.rec.mastered': 'Тамаша! Нәтижеңізді сақтаңыз.',
            'map.rec.good': 'Жақсы прогресс. Қиын тест тапсырып көріңіз.',
            'map.rec.developing': 'Жалғастыра беріңіз! Негізгі қасиеттерді қайталаңыз.',
            'map.rec.weak': 'Осы топтың негіздерін зерттеуден бастаңыз.'
        }
    },
    {
        'file': '../locales/kk_v2.json',
        'translations': {
            'map.rec.mastered': 'Тамаша! Нәтижеңізді сақтаңыз.',
            'map.rec.good': 'Жақсы прогресс. Қиын тест тапсырып көріңіз.',
            'map.rec.developing': 'Жалғастыра беріңіз! Негізгі қасиеттерді қайталаңыз.',
            'map.rec.weak': 'Осы топтың негіздерін зерттеуден бастаңыз.'
        }
    }
]

for conf in files_config:
    file = conf['file']
    try:
        with open(file, 'r', encoding='utf-8') as f:
            data = json.load(f)
        
        # Remove old map.rec.* keys
        keys_to_delete = [k for k in data.keys() if k.startswith('map.rec.')]
        for k in keys_to_delete:
            del data[k]
            
        # Add new map.rec.* keys
        data.update(conf['translations'])
            
        with open(file, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=4)
        print(f"Updated {file}: Deleted {len(keys_to_delete)} old keys, Added 4 new keys.")
    except Exception as e:
        print(f"Error processing {file}: {e}")
