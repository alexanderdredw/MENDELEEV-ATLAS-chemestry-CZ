import json
import os

def translate_batch_to_kk(texts):
    # This is a small mapping for the terms in the 384-419 range
    # and some others that might be English in kk_v2.json
    mapping = {
        "Responsible for blood cell formation.": "Қан жасушаларының түзілуіне жауапты.",
        "Yellow bone marrow": "Сары сүйек кемігі",
        "Consists mainly of adipose tissue.": "Негізінен май ұлпасынан тұрады.",
        "Hematopoiesis": "Гемопоэз",
        "The process of blood cell formation.": "Қан жасушаларының түзілу процесі.",
        "Joint": "Буын",
        "A movable connection between bones.": "Сүйектердің қозғалмалы байланысы.",
        "Cartilage tissue": "Шеміршек ұлпасы",
        "An elastic connective tissue.": "Серпімді дәнекер ұлпасы.",
        "Ossification": "Оссификация",
        "The process of bone formation.": "Сүйектің түзілу процесі.",
        "Endochondral ossification": "Эндохондральды оссификация",
        "Bone development from a cartilage model.": "Шеміршек үлгісінен сүйектің дамуы.",
        "Intramembranous ossification": "Интрамембранозды оссификация",
        "Bone development directly from connective tissue.": "Сүйектің тікелей дәнекер ұлпасынан дамуы.",
        "Growth plate (epiphyseal plate)": "Өсу пластинкасы (эпифизарлық пластинка)",
        "Enables longitudinal bone growth.": "Сүйектің бойлай өсуін қамтамасыз етеді.",
        "Muscle tissue": "Бұлшықет ұлпасы",
        "Tissue capable of contraction.": "Жиырылуға қабілетті ұлпа.",
        "Skeletal muscle": "Қаңқа бұлшықеті",
        "Responsible for voluntary movement.": "Ерікті қозғалысқа жауапты.",
        "Smooth muscle tissue": "Тегіс бұлшықет ұлпасы",
        "Found in internal organs.": "Ішкі мүшелерде кездеседі.",
        "Cardiac muscle tissue (myocardium)": "Жүрек бұлшықет ұлпасы (миокард)",
        "The muscular layer of the heart.": "Жүректің бұлшықет қабаты.",
        "Sarcomere": "Саркомер",
        "The structural unit of striated muscle.": "Көлденең жолақты бұлшықеттің құрылымдық бірлігі.",
        "Actin and myosin filaments": "Актин және миозин филаменттері",
        "Proteins responsible for muscle contraction.": "Бұлшықет жиырылуына жауапты белоктар.",
        "ATP (adenosine triphosphate)": "АТФ (аденозинтрифосфат)",
        "The main source of cellular energy.": "Жасушалық энергияның негізгі көзі.",
        "Muscle tone": "Бұлшықет тонусы",
        "The constant partial contraction of muscles.": "Бұлшықеттердің тұрақты ішінара жиырылуы.",
        "A nerve cell that receives and transmits impulses.": "Импульстерді қабылдайтын және өткізетін жүйке жасушасы.",
        "A long projection that conducts impulses.": "Импульстерді өткізетін ұзын өсінді.",
        "Dendrite": "Дендрит",
        "A short projection that receives signals.": "Сигналдарды қабылдайтын қысқа өсінді.",
        "The junction between nerve cells.": "Жүйке жасушалары арасындағы байланыс.",
        "Action potential": "Әрекет потенциалы",
        "The electrical manifestation of nerve impulse transmission.": "Жүйке импульсінің берілуінің электрлік көрінісі.",
        "Central nervous system (CNS)": "Орталық жүйке жүйесі (ОЖЖ)",
        "Brain and spinal cord.": "Ми және жұлын.",
        "Peripheral nervous system (PNS)": "Шеткі жүйке жүйесі (ШЖЖ)",
        "Nerves and ganglia outside the CNS.": "ОЖЖ-дан тыс жүйкелер мен ганглиялар.",
        "Autonomic nervous system": "Автономды жүйке жүйесі",
        "Regulates internal organ function.": "Ішкі мүшелердің қызметін реттейді.",
        "The body’s response to a stimulus.": "Ағзаның тітіркендіргішке жауабы.",
        "The central organ of blood circulation.": "Қан айналымының орталық мүшесі.",
        "Myocardium": "Миокард",
        "Blood vessels that carry blood away from the heart.": "Қанды жүректен алып шығатын қан тамырлары.",
        "Blood vessels that return blood to the heart.": "Қанды жүрекке қайтаратын қан тамырлары.",
        "Small vessels where substance exchange occurs.": "Зат алмасу жүретін кішкентай тамырлар.",
        "Erythrocytes": "Эритроциттер",
        "Red blood cells that transport oxygen.": "Оттегін тасымалдайтын қызыл қан жасушалары.",
        "Leukocytes": "Лейкоциттер",
        "White blood cells involved in immune defense.": "Иммундық қорғанысқа қатысатын ақ қан жасушалары.",
        "Platelets (thrombocytes)": "Тромбоциттер",
        "Blood cells responsible for clotting.": "Қанның ұюына жауапты қан жасушалары.",
        "A protein that binds and transports oxygen.": "Оттегін байланыстыратын және тасымалдайтын белок.",
        "Arterial pressure": "Артериялық қысым",
        "The pressure of blood in arteries.": "Артериялардағы қан қысымы.",
        "Organs responsible for gas exchange.": "Газ алмасуға жауапты мүшелер.",
        "Air sacs where gas exchange occurs.": "Газ алмасу жүретін ауа қапшықтары.",
        "A tube that conducts air to the lungs.": "Ауаны өкпеге өткізетін түтік.",
        "Bronchi": "Бронхтар",
        "Branches of the trachea.": "Кеңірдектің тармақтары.",
        "The main muscle involved in breathing.": "Тыныс алуға қатысатын негізгі бұлшықет.",
        "Gas exchange": "Газ алмасу",
        "The exchange of oxygen and carbon dioxide.": "Оттегі мен көмірқышқыл газының алмасуы.",
        "Mechanical and chemical processing of food.": "Тағамды механикалық және химиялық өңдеу.",
        "Temporarily stores and digests food.": "Тағамды уақытша сақтайды және қорытады.",
        "Where nutrient absorption occurs.": "Қоректік заттардың сіңірілуі жүретін жер.",
        "Absorbs water and forms feces.": "Суды сіңіреді және нәжісті түзеді.",
        "Involved in metabolism and bile production.": "Зат алмасуға және өт өндіруге қатысады.",
        "Secretes digestive enzymes and hormones.": "Ас қорыту ферменттері мен гормондарды бөледі.",
        "Hormones": "Гормондар",
        "Biologically active substances secreted by endocrine glands.": "Эндокриндік бездер бөлетін биологиялық белсенді заттар.",
        "Pituitary gland": "Гипофиз",
        "The central gland of the endocrine system.": "Эндокриндік жүйенің орталық безі.",
        "Thyroid gland": "Қалқанша без",
        "Regulates metabolism.": "Зат алмасуды реттейді.",
        "Insulin": "Инсулин",
        "Regulates blood glucose levels.": "Қандағы глюкоза деңгейін реттейді.",
        "Neuroendocrine regulation": "Нейроэндокриндік реттеу",
        "Interaction between the nervous and endocrine systems.": "Жүйке және эндокриндік жүйелер арасындағы өзара әрекеттесу.",
        "Immunity": "Иммунитет",
        "The body’s ability to resist infections.": "Ағзаның инфекцияларға қарсы тұру қабілеті.",
        "A foreign substance recognized by the immune system.": "Иммундық жүйе танитын бөгде зат.",
        "Antibody (immunoglobulin)": "Антидене (иммуноглобулин)",
        "A protein produced in response to an antigen.": "Антигенге жауап ретінде түзілетін белок.",
        "Lymphocytes": "Лимфоциттер",
        "Cells involved in immune responses.": "Иммундық жауаптарға қатысатын жасушалар.",
        "Phagocytosis": "Фагоцитоз",
        "The process of engulfing foreign particles.": "Бөгде бөлшектерді жұту процесі.",
        "Organ responsible for filtering blood plasma.": "Қан плазмасын сүзуге жауапты мүше.",
        "Nephron": "Нефрон",
        "Structural and functional unit of the kidney.": "Бүйректің құрылымдық және функционалдық бірлігі.",
        "Filtration": "Фильтрация",
        "Initial filtering of blood plasma.": "Қан плазмасының бастапқы сүзілуі.",
        "Reabsorption": "Реабсорбция",
        "Reentry of necessary substances into the bloodstream.": "Қажетті заттардың қанға қайта өтуі.",
        "Osmoregulation": "Осморегуляция",
        "Maintenance of water–salt balance.": "Су-тұз теңгерімін сақтау.",
        "Urinary bladder": "Қуық",
        "Organ that stores urine.": "Зәрді сақтайтын мүше."
    }
    return mapping

def fix_kk_content():
    file_path = r'c:\Users\Александр\OneDrive\Рабочий стол\chemestry\locales\kk_v2.json'
    with open(file_path, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    mapping = translate_batch_to_kk([])
    
    changed = False
    for key, value in data.items():
        if value in mapping:
            data[key] = mapping[value]
            changed = True
            
    if changed:
        with open(file_path, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=4)
        print("Updated English placeholders with Kazakh translations.")
    else:
        print("No changes needed.")

if __name__ == "__main__":
    fix_kk_content()
