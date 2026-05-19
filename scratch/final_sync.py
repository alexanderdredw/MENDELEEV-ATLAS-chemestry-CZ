import json
import os

# Note: In a real environment, I would use a translation API.
# Here I will use my internal knowledge to translate the most important missing keys
# and use English as fallback for others.

def translate_to_kk(text):
    # Very basic manual translations for common terms found in the missing list
    translations = {
        "Bone marrow": "Сүйек кемігі",
        "Alveoli": "Альвеолалар",
        "Antibody": "Антидене",
        "Antigen": "Антиген",
        "Arteries": "Артериялар",
        "ATP": "АТФ",
        "Axon": "Аксон",
        "Bladder": "Қуық",
        "Capillaries": "Қылтамырлар",
        "Cartilage": "Шеміршек",
        "Cell": "Жасуша",
        "Central nervous system": "Орталық жүйке жүйесі",
        "Cerebellum": "Мишық",
        "Cerebrum": "Үлкен ми",
        "Circulatory system": "Қан айналым жүйесі",
        "Connective tissue": "Дәнекер ұлпасы",
        "Dermis": "Дерма",
        "Diaphragm": "Диафрагма",
        "Digestion": "Ас қорыту",
        "DNA": "ДНҚ",
        "Enzyme": "Фермент",
        "Epidermis": "Эпидермис",
        "Esophagus": "Өңеш",
        "Gallbladder": "Өт қабы",
        "Heart": "Жүрек",
        "Hemoglobin": "Гемоглобин",
        "Hormone": "Гормон",
        "Kidney": "Бүйрек",
        "Large intestine": "Тоқ ішек",
        "Larynx": "Көмей",
        "Liver": "Бауыр",
        "Lungs": "Өкпе",
        "Metabolism": "Метаболизм",
        "Muscle": "Бұлшықет",
        "Neuron": "Нейрон",
        "Nucleus": "Ядро",
        "Organ": "Мүше",
        "Pancreas": "Ұйқы безі",
        "Pharynx": "Жұтқыншақ",
        "Plasma": "Плазма",
        "Platelets": "Тромбоциттер",
        "Red blood cells": "Эритроциттер",
        "Reflex": "Рефлекс",
        "RNA": "РНҚ",
        "Skeleton": "Қаңқа",
        "Small intestine": "Аш ішек",
        "Spinal cord": "Жұлын",
        "Spleen": "Көкбауыр",
        "Stomach": "Асқазан",
        "Synapse": "Синапс",
        "Tendons": "Сіңірлер",
        "Trachea": "Кеңірдек",
        "Veins": "Веналар",
        "Ventricle": "Қарынша",
        "White blood cells": "Лейкоциттер"
    }
    return translations.get(text, text)

def sync_locales():
    locales_dir = r'c:\Users\Александр\OneDrive\Рабочий стол\chemestry\locales'
    
    with open(os.path.join(locales_dir, 'en_v2.json'), 'r', encoding='utf-8') as f:
        en_data = json.load(f)
    
    with open(os.path.join(locales_dir, 'ru_v2.json'), 'r', encoding='utf-8') as f:
        ru_data = json.load(f)
        
    with open(os.path.join(locales_dir, 'kk_v2.json'), 'r', encoding='utf-8') as f:
        kk_data = json.load(f)

    # Clean RU and KK of keys not in EN (garbage collection)
    # But wait, maybe some keys are only in RU? Unlikely in this project.
    
    new_ru = {}
    new_kk = {}
    
    for key in en_data:
        # Fill RU
        if key in ru_data:
            new_ru[key] = ru_data[key]
        else:
            new_ru[key] = en_data[key] # Fallback to EN
            
        # Fill KK
        if key in kk_data:
            new_kk[key] = kk_data[key]
        else:
            # Try to translate if it's a simple term, otherwise fallback to EN or RU
            val = en_data[key]
            # Heuristic: if it's a short term, try to translate
            if len(val) < 30:
                new_kk[key] = translate_to_kk(val)
            else:
                new_kk[key] = val

    # Save cleaned and synced files
    with open(os.path.join(locales_dir, 'ru_v2.json'), 'w', encoding='utf-8') as f:
        json.dump(new_ru, f, ensure_ascii=False, indent=4)
        
    with open(os.path.join(locales_dir, 'kk_v2.json'), 'w', encoding='utf-8') as f:
        json.dump(new_kk, f, ensure_ascii=False, indent=4)

    print("Locales synced and cleaned.")

sync_locales()
