import json

files_config = [
    {
        'file': '../locales/en_v2.json',
        'translations': {
            'map.rec.nonmetal': 'Review the properties of Nonmetals.',
            'map.rec.noble_gas': 'Study the inert nature of Noble Gases.',
            'map.rec.alkali_metal': 'Explore the high reactivity of Alkali Metals.',
            'map.rec.alkaline_earth': 'Study Alkaline Earth elements in detail.',
            'map.rec.metalloid': 'Review the dual properties of Semimetals.',
            'map.rec.halogen': 'Analyze the reactivity of the Halogen group.',
            'map.rec.post_transition': 'Study the characteristics of Other Metals.',
            'map.rec.transition_metal': 'Examine the complex chemistry of Transition Metals.',
            'map.rec.lanthanide': 'Review the unique properties of Lanthanides.'
        }
    },
    {
        'file': '../locales/ru_v2.json',
        'translations': {
            'map.rec.nonmetal': 'Изучите свойства неметаллов.',
            'map.rec.noble_gas': 'Изучите инертную природу благородных газов.',
            'map.rec.alkali_metal': 'Исследуйте высокую реактивность щелочных металлов.',
            'map.rec.alkaline_earth': 'Подробно изучите щелочноземельные элементы.',
            'map.rec.metalloid': 'Повторите двойственные свойства полуметаллов.',
            'map.rec.halogen': 'Проанализируйте реактивность группы галогенов.',
            'map.rec.post_transition': 'Изучите характеристики остальных металлов.',
            'map.rec.transition_metal': 'Исследуйте сложную химию переходных металлов.',
            'map.rec.lanthanide': 'Изучите уникальные свойства лантаноидов.'
        }
    },
    {
        'file': '../locales/kk_v3.json',
        'translations': {
            'map.rec.nonmetal': 'Бейметалдардың қасиеттерін қайталаңыз.',
            'map.rec.noble_gas': 'Инертті газдардың табиғатын зерттеңіз.',
            'map.rec.alkali_metal': 'Сілтілік металдардың жоғары реактивтілігін зерттеңіз.',
            'map.rec.alkaline_earth': 'Сілтілік-жер элементтерін егжей-тегжейлі оқыңыз.',
            'map.rec.metalloid': 'Жартылай металдардың екіжақты қасиеттерін қайталаңыз.',
            'map.rec.halogen': 'Галогендер тобының реактивтілігін талдаңыз.',
            'map.rec.post_transition': 'Басқа металдардың сипаттамаларын оқыңыз.',
            'map.rec.transition_metal': 'Ауыспалы металдардың күрделі химиясын зерттеңіз.',
            'map.rec.lanthanide': 'Лантаноидтардың бірегей қасиеттерін қайталаңыз.'
        }
    },
    {
        'file': '../locales/kk_v2.json',
        'translations': {
            'map.rec.nonmetal': 'Бейметалдардың қасиеттерін қайталаңыз.',
            'map.rec.noble_gas': 'Инертті газдардың табиғатын зерттеңіз.',
            'map.rec.alkali_metal': 'Сілтілік металдардың жоғары реактивтілігін зерттеңіз.',
            'map.rec.alkaline_earth': 'Сілтілік-жер элементтерін егжей-тегжейлі оқыңыз.',
            'map.rec.metalloid': 'Жартылай металдардың екіжақты қасиеттерін қайталаңыз.',
            'map.rec.halogen': 'Галогендер тобының реактивтілігін талдаңыз.',
            'map.rec.post_transition': 'Басқа металдардың сипаттамаларын оқыңыз.',
            'map.rec.transition_metal': 'Ауыспалы металдардың күрделі химиясын зерттеңіз.',
            'map.rec.lanthanide': 'Лантаноидтардың бірегей қасиеттерін қайталаңыз.'
        }
    }
]

for conf in files_config:
    file = conf['file']
    try:
        with open(file, 'r', encoding='utf-8') as f:
            data = json.load(f)
        
        # Remove the previous status-based keys (good, weak, mastered, developing) just in case
        for key in ['map.rec.mastered', 'map.rec.good', 'map.rec.developing', 'map.rec.weak']:
            if key in data:
                del data[key]
            
        # Add new specific group keys
        data.update(conf['translations'])
            
        with open(file, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=4)
        print(f"Updated {file} with exact group recommendations.")
    except Exception as e:
        print(f"Error processing {file}: {e}")
