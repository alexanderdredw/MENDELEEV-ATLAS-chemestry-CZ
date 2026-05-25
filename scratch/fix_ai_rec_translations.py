import json

data_en = {
    "ai.rec.biography": "Review the scientist's biography to better understand their life and key achievements.",
    "ai.rec.atomic_number": "Review the element's atomic number and basic structure.",
    "ai.rec.symbol": "Memorize the chemical symbol of the element.",
    "ai.rec.group": "Review the periodic table group and classification of this element.",
    "ai.rec.properties": "Study the physical and chemical properties in more detail.",
    "ai.rec.applications": "Explore the common uses and applications of this element.",
    "ai.quiz.try_again": "Try Again",
    "ai.quiz.correct_pct": "Correct"
}

data_ru = {
    "ai.rec.biography": "Изучите биографию ученого, чтобы лучше понять его жизненный путь и главные достижения.",
    "ai.rec.atomic_number": "Повторите атомный номер и базовую структуру элемента.",
    "ai.rec.symbol": "Запомните химический символ элемента.",
    "ai.rec.group": "Повторите группу периодической таблицы и классификацию элемента.",
    "ai.rec.properties": "Детальнее изучите физические и химические свойства.",
    "ai.rec.applications": "Изучите основные области применения этого элемента.",
    "ai.quiz.try_again": "Попробовать снова",
    "ai.quiz.correct_pct": "Правильно"
}

data_kk = {
    "ai.rec.biography": "Ғалымның өмірбаянын оқып, оның өмірі мен негізгі жетістіктерін тереңірек түсініңіз.",
    "ai.rec.atomic_number": "Элементтің атомдық нөмірін және негізгі құрылымын қайталаңыз.",
    "ai.rec.symbol": "Элементтің химиялық таңбасын есте сақтаңыз.",
    "ai.rec.group": "Периодтық жүйедегі тобын және элементтің жіктелуін қайталаңыз.",
    "ai.rec.properties": "Физикалық және химиялық қасиеттерін толығырақ зерттеңіз.",
    "ai.rec.applications": "Бұл элементтің негізгі қолданылу салаларын қарап шығыңыз.",
    "ai.quiz.try_again": "Қайта байқап көру",
    "ai.quiz.correct_pct": "Дұрыс"
}

def update_json(filepath, data_to_add):
    import os
    if not os.path.exists(filepath):
        return
    with open(filepath, 'r', encoding='utf-8') as f:
        data = json.load(f)
    data.update(data_to_add)
    with open(filepath, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=4)

update_json('locales/en_v2.json', data_en)
update_json('locales/ru_v2.json', data_ru)
update_json('locales/kk_v2.json', data_kk)
update_json('locales/kk_v3.json', data_kk)

print("Translations injected successfully")
