const fs = require('fs');

const aiKeys = {
    en: {
        "ai.title": "Hi, I'm Syntara — your System Intelligent Atlas Assistant.",
        "ai.chat.placeholder": "How can I help you learn this system?",
        "ai.btn.simple": "Explain Simpler",
        "ai.btn.details": "Give More Details",
        "ai.btn.study": "Prepare for Test",
        "ai.btn.quiz": "Ask Me a Question"
    },
    ru: {
        "ai.title": "Привет, я Syntara — твой интеллектуальный ассистент по Атласу систем.",
        "ai.chat.placeholder": "Как я могу помочь тебе изучить эту систему?",
        "ai.btn.simple": "Объясни проще",
        "ai.btn.details": "Дай больше деталей",
        "ai.btn.study": "Подготовь к тесту",
        "ai.btn.quiz": "Задай мне вопрос"
    },
    kk: {
        "ai.title": "Сәлем, мен Syntara — жүйелер Атласы бойынша сенің интеллектуалды ассистентіңмін.",
        "ai.chat.placeholder": "Бұл жүйені үйренуге қалай көмектесе аламын?",
        "ai.btn.simple": "Оңайырақ түсіндір",
        "ai.btn.details": "Көбірек мәлімет бер",
        "ai.btn.study": "Тестке дайында",
        "ai.btn.quiz": "Маған сұрақ қой"
    }
};

const paths = {
    ru: 'locales/ru_v2.json',
    en: 'locales/en_v2.json',
    kk: 'locales/kk_v2.json'
};

for (const [lang, keys] of Object.entries(aiKeys)) {
    const path = paths[lang];
    if (fs.existsSync(path)) {
        const locale = JSON.parse(fs.readFileSync(path, 'utf8'));
        Object.assign(locale, keys);
        fs.writeFileSync(path, JSON.stringify(locale, null, 4));
        console.log(`✓ Updated AI Assistant labels in ${lang.toUpperCase()} according to screenshot`);
    }
}
