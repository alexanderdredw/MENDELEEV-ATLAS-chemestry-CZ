import json
import re

scientists = {
    'mendeleev': [
        ('What did he create?', 'Periodic Table', 'Microscope', 'Telescope', 'Battery'),
        ('What year was his table published?', '1869', '1900', '1750', '1950'),
        ('Where was he born?', 'Russia', 'France', 'England', 'USA')
    ],
    'curie': [
        ('What elements did she discover?', 'Polonium and Radium', 'Gold and Silver', 'Oxygen and Hydrogen', 'Iron and Copper'),
        ('Which prize did she win twice?', 'Nobel Prize', 'Fields Medal', 'Turing Award', 'Oscar'),
        ('What term did she coin?', 'Radioactivity', 'Electricity', 'Magnetism', 'Gravity')
    ],
    'lavoisier': [
        ('He is known as the father of what?', 'Modern Chemistry', 'Physics', 'Biology', 'Astronomy'),
        ('What law did he state?', 'Conservation of Mass', 'Gravity', 'Thermodynamics', 'Motion'),
        ('What gas did he name?', 'Oxygen', 'Helium', 'Nitrogen', 'Argon')
    ],
    'bohr': [
        ('What model did he propose?', 'Bohr model of the atom', 'Plum pudding model', 'Solar system', 'DNA double helix'),
        ('Where was he from?', 'Denmark', 'Germany', 'Sweden', 'Norway'),
        ('What field did he significantly contribute to?', 'Quantum Mechanics', 'Relativity', 'Thermodynamics', 'Genetics')
    ],
    'rutherford': [
        ('What experiment is he famous for?', 'Gold foil experiment', 'Double-slit experiment', 'Kite experiment', 'Oil drop experiment'),
        ('What did he discover in the atom?', 'Nucleus', 'Electron', 'Photon', 'Quark'),
        ('What type of scattering is named after him?', 'Rutherford scattering', 'Rayleigh scattering', 'Compton scattering', 'Raman scattering')
    ],
    'dalton': [
        ('What theory is he known for?', 'Atomic theory', 'Theory of relativity', 'Evolution', 'Big Bang theory'),
        ('What law describes partial pressures?', 'Dalton\'s Law', 'Boyle\'s Law', 'Charles\'s Law', 'Henry\'s Law'),
        ('What vision condition did he study?', 'Color blindness', 'Nearsightedness', 'Astigmatism', 'Glaucoma')
    ],
    'pauling': [
        ('What did he study extensively?', 'Chemical bonds', 'DNA', 'Stars', 'Minerals'),
        ('How many unshared Nobel Prizes did he win?', 'Two', 'One', 'Three', 'None'),
        ('What concept did he introduce regarding atoms?', 'Electronegativity', 'Spin', 'Charge', 'Mass')
    ],
    'nobel': [
        ('What did he invent?', 'Dynamite', 'Lightbulb', 'Telephone', 'Airplane'),
        ('What prize is named after him?', 'Nobel Prize', 'Pulitzer', 'Grammy', 'Emmy'),
        ('What element is named in his honor?', 'Nobelium', 'Einsteinium', 'Curium', 'Fermium')
    ],
    'hodgkin': [
        ('What technique did she pioneer?', 'X-ray crystallography', 'Mass spectrometry', 'NMR', 'Chromatography'),
        ('Structure of which vitamin did she determine?', 'Vitamin B12', 'Vitamin C', 'Vitamin D', 'Vitamin A'),
        ('Which hormone\'s structure did she decipher?', 'Insulin', 'Adrenaline', 'Estrogen', 'Testosterone')
    ]
}

translations_ru = {
    'mendeleev': [
        ('Что он создал?', 'Периодическую таблицу', 'Микроскоп', 'Телескоп', 'Батарею'),
        ('В каком году была опубликована его таблица?', '1869', '1900', '1750', '1950'),
        ('Где он родился?', 'Россия', 'Франция', 'Англия', 'США')
    ],
    'curie': [
        ('Какие элементы она открыла?', 'Полоний и Радий', 'Золото и Серебро', 'Кислород и Водород', 'Железо и Медь'),
        ('Какую премию она получила дважды?', 'Нобелевскую премию', 'Филдсовскую премию', 'Премию Тьюринга', 'Оскар'),
        ('Какой термин она ввела?', 'Радиоактивность', 'Электричество', 'Магнетизм', 'Гравитация')
    ],
    'lavoisier': [
        ('Его называют отцом чего?', 'Современной химии', 'Физики', 'Биологии', 'Астрономии'),
        ('Какой закон он сформулировал?', 'Закон сохранения массы', 'Гравитации', 'Термодинамики', 'Движения'),
        ('Какому газу он дал название?', 'Кислород', 'Гелий', 'Азот', 'Аргон')
    ],
    'bohr': [
        ('Какую модель он предложил?', 'Модель атома Бора', 'Модель пудинга с изюмом', 'Солнечную систему', 'Двойную спираль ДНК'),
        ('Откуда он родом?', 'Дания', 'Германия', 'Швеция', 'Норвегия'),
        ('В какую область он внес значительный вклад?', 'Квантовая механика', 'Относительность', 'Термодинамика', 'Генетика')
    ],
    'rutherford': [
        ('Каким экспериментом он известен?', 'Эксперимент с золотой фольгой', 'Эксперимент с двумя щелями', 'Эксперимент с воздушным змеем', 'Эксперимент с каплей масла'),
        ('Что он открыл в атоме?', 'Ядро', 'Электрон', 'Фотон', 'Кварк'),
        ('Какой тип рассеяния назван в его честь?', 'Рассеяние Резерфорда', 'Рассеяние Рэлея', 'Рассеяние Комптона', 'Рассеяние Рамана')
    ],
    'dalton': [
        ('Какой теорией он известен?', 'Атомная теория', 'Теория относительности', 'Эволюция', 'Теория Большого взрыва'),
        ('Какой закон описывает парциальное давление?', 'Закон Дальтона', 'Закон Бойля', 'Закон Шарля', 'Закон Генри'),
        ('Какое нарушение зрения он изучал?', 'Дальтонизм', 'Близорукость', 'Астигматизм', 'Глаукома')
    ],
    'pauling': [
        ('Что он активно изучал?', 'Химические связи', 'ДНК', 'Звезды', 'Минералы'),
        ('Сколько неразделенных Нобелевских премий он получил?', 'Две', 'Одну', 'Три', 'Ни одной'),
        ('Какое понятие он ввел относительно атомов?', 'Электроотрицательность', 'Спин', 'Заряд', 'Масса')
    ],
    'nobel': [
        ('Что он изобрел?', 'Динамит', 'Лампочку', 'Телефон', 'Самолет'),
        ('Какая премия названа в его честь?', 'Нобелевская премия', 'Пулитцеровская', 'Грэмми', 'Эмми'),
        ('Какой элемент назван в его честь?', 'Нобелий', 'Эйнштейний', 'Кюрий', 'Фермий')
    ],
    'hodgkin': [
        ('Какой метод она усовершенствовала?', 'Рентгеновская кристаллография', 'Масс-спектрометрия', 'ЯМР', 'Хроматография'),
        ('Структуру какого витамина она определила?', 'Витамин B12', 'Витамин C', 'Витамин D', 'Витамин A'),
        ('Структуру какого гормона она расшифровала?', 'Инсулин', 'Адреналин', 'Эстроген', 'Тестостерон')
    ]
}

translations_kk = {
    'mendeleev': [
        ('Ол нені ойлап тапты?', 'Периодтық кестені', 'Микроскоп', 'Телескоп', 'Батарея'),
        ('Оның кестесі қай жылы жарияланды?', '1869', '1900', '1750', '1950'),
        ('Ол қайда туған?', 'Ресей', 'Франция', 'Англия', 'АҚШ')
    ],
    'curie': [
        ('Ол қандай элементтерді ашты?', 'Полоний мен Радий', 'Алтын мен Күміс', 'Оттегі мен Сутегі', 'Темір мен Мыс'),
        ('Ол қандай сыйлықты екі рет алды?', 'Нобель сыйлығы', 'Филдс медалі', 'Тьюринг сыйлығы', 'Оскар'),
        ('Ол қандай терминді енгізді?', 'Радиоактивтілік', 'Электр', 'Магнетизм', 'Гравитация')
    ],
    'lavoisier': [
        ('Ол ненің атасы ретінде белгілі?', 'Қазіргі химия', 'Физика', 'Биология', 'Астрономия'),
        ('Ол қандай заңды тұжырымдады?', 'Массаның сақталу заңы', 'Гравитация', 'Термодинамика', 'Қозғалыс'),
        ('Ол қандай газға атау берді?', 'Оттегі', 'Гелий', 'Азот', 'Аргон')
    ],
    'bohr': [
        ('Ол қандай модельді ұсынды?', 'Бордың атом моделі', 'Мейізді пудинг моделі', 'Күн жүйесі', 'ДНҚ қос спиралі'),
        ('Ол қайдан шыққан?', 'Дания', 'Германия', 'Швеция', 'Норвегия'),
        ('Ол қай салаға үлкен үлес қосты?', 'Кванттық механика', 'Салыстырмалылық', 'Термодинамика', 'Генетика')
    ],
    'rutherford': [
        ('Ол қандай тәжірибесімен танымал?', 'Алтын фольга тәжірибесі', 'Екі саңылау тәжірибесі', 'Батпырауық тәжірибесі', 'Май тамшысы тәжірибесі'),
        ('Ол атомнан нені ашты?', 'Ядро', 'Электрон', 'Фотон', 'Кварк'),
        ('Оның құрметіне қандай шашырау аталған?', 'Резерфорд шашырауы', 'Рэлей шашырауы', 'Комптон шашырауы', 'Раман шашырауы')
    ],
    'dalton': [
        ('Ол қандай теориясымен танымал?', 'Атомдық теория', 'Салыстырмалылық теориясы', 'Эволюция', 'Үлкен жарылыс теориясы'),
        ('Парциалды қысымды қандай заң сипаттайды?', 'Дальтон заңы', 'Бойль заңы', 'Шарль заңы', 'Генри заңы'),
        ('Ол көру қабілетінің қандай бұзылуын зерттеді?', 'Дальтонизм', 'Жақыннан көрушілік', 'Астигматизм', 'Глаукома')
    ],
    'pauling': [
        ('Ол нені белсенді түрде зерттеді?', 'Химиялық байланыстар', 'ДНҚ', 'Жұлдыздар', 'Минералдар'),
        ('Ол қанша бөлінбеген Нобель сыйлығын алды?', 'Екі', 'Бір', 'Үш', 'Ешқандай'),
        ('Ол атомдарға қатысты қандай ұғымды енгізді?', 'Электртерістілік', 'Спин', 'Заряд', 'Масса')
    ],
    'nobel': [
        ('Ол нені ойлап тапты?', 'Динамит', 'Шам', 'Телефон', 'Ұшақ'),
        ('Оның құрметіне қандай сыйлық аталған?', 'Нобель сыйлығы', 'Пулитцер', 'Грэмми', 'Эмми'),
        ('Оның құрметіне қандай элемент аталған?', 'Нобелий', 'Эйнштейний', 'Кюрий', 'Фермий')
    ],
    'hodgkin': [
        ('Ол қандай әдісті жетілдірді?', 'Рентгендік кристаллография', 'Масс-спектрометрия', 'ЯМР', 'Хроматография'),
        ('Ол қай дәруменнің құрылымын анықтады?', 'В12 дәрумені', 'С дәрумені', 'Д дәрумені', 'А дәрумені'),
        ('Ол қай гормонның құрылымын ашты?', 'Инсулин', 'Адреналин', 'Эстроген', 'Тестостерон')
    ]
}

data_to_add_en = {}
data_to_add_ru = {}
data_to_add_kk = {}

anatomy_updates = {}

for sci, qs in scientists.items():
    questions_arr = []
    for i, (q, a1, a2, a3, a4) in enumerate(qs):
        idx = i + 1
        data_to_add_en[f'ai.{sci}.q{idx}.text'] = q
        data_to_add_en[f'ai.{sci}.q{idx}.opt.1'] = a1
        data_to_add_en[f'ai.{sci}.q{idx}.opt.2'] = a2
        data_to_add_en[f'ai.{sci}.q{idx}.opt.3'] = a3
        data_to_add_en[f'ai.{sci}.q{idx}.opt.4'] = a4

        q_ru, a1_ru, a2_ru, a3_ru, a4_ru = translations_ru[sci][i]
        data_to_add_ru[f'ai.{sci}.q{idx}.text'] = q_ru
        data_to_add_ru[f'ai.{sci}.q{idx}.opt.1'] = a1_ru
        data_to_add_ru[f'ai.{sci}.q{idx}.opt.2'] = a2_ru
        data_to_add_ru[f'ai.{sci}.q{idx}.opt.3'] = a3_ru
        data_to_add_ru[f'ai.{sci}.q{idx}.opt.4'] = a4_ru

        q_kk, a1_kk, a2_kk, a3_kk, a4_kk = translations_kk[sci][i]
        data_to_add_kk[f'ai.{sci}.q{idx}.text'] = q_kk
        data_to_add_kk[f'ai.{sci}.q{idx}.opt.1'] = a1_kk
        data_to_add_kk[f'ai.{sci}.q{idx}.opt.2'] = a2_kk
        data_to_add_kk[f'ai.{sci}.q{idx}.opt.3'] = a3_kk
        data_to_add_kk[f'ai.{sci}.q{idx}.opt.4'] = a4_kk

        questions_arr.append(f"{{ textKey: 'ai.{sci}.q{idx}.text', options: ['ai.{sci}.q{idx}.opt.1', 'ai.{sci}.q{idx}.opt.2', 'ai.{sci}.q{idx}.opt.3', 'ai.{sci}.q{idx}.opt.4'], correctIndex: 0, topic: 'biography' }}")

    # The format we want in anatomy-data.js
    anatomy_updates[sci] = "questions: [\n                " + ",\n                ".join(questions_arr) + "\n            ]"

# 1. Update locales
def update_json(filepath, data_to_add):
    import os
    if not os.path.exists(filepath):
        print(f"Skipping {filepath}, does not exist")
        return
    with open(filepath, 'r', encoding='utf-8') as f:
        data = json.load(f)
    data.update(data_to_add)
    with open(filepath, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=4)

update_json('locales/en_v2.json', data_to_add_en)
update_json('locales/ru_v2.json', data_to_add_ru)
update_json('locales/kk_v3.json', data_to_add_kk)
update_json('locales/kk_v2.json', data_to_add_kk)

# 2. Update anatomy-data.js
with open('js/data/anatomy-data.js', 'r', encoding='utf-8') as f:
    content = f.read()

for sci, repl in anatomy_updates.items():
    # Split by id: 'sci',
    parts = content.split(f"id: '{sci}',")
    if len(parts) >= 2:
        # replace the first 'questions: []' in parts[1]
        parts[1] = parts[1].replace('questions: []', repl, 1)
        content = f"id: '{sci}',".join(parts)
    else:
        print(f"Scientist {sci} not found in anatomy-data.js")

with open('js/data/anatomy-data.js', 'w', encoding='utf-8') as f:
    f.write(content)

print('Success')
