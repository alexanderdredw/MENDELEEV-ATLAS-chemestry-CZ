const fs = require('fs');

const aiKeys = {
    ru: {
        "ai.title": "Syntara AI Ассистент",
        "ai.chat.placeholder": "Привет! Я твой научный ассистент. Выбери режим обучения ниже, чтобы узнать больше об этом элементе.",
        "ai.btn.simple": "Просто",
        "ai.btn.details": "Подробно",
        "ai.btn.study": "Для учебы",
        "ai.btn.quiz": "Мини-тест",
        "ai.quiz.correct": "Верно!",
        "ai.quiz.incorrect": "Неверно.",
        "ai.quiz.finish": "Тест завершен!",
        "ai.quiz.recommendation": "Рекомендации по изучению:",
        "ai.rec.atomic": "Повторите атомное строение и число протонов.",
        "ai.rec.chemical": "Изучите химические свойства и типичные реакции.",
        "ai.rec.physical": "Обратите внимание на физические состояния и температуры.",
        "ai.rec.industry": "Посмотрите на промышленное применение элемента."
    },
    en: {
        "ai.title": "Syntara AI Assistant",
        "ai.chat.placeholder": "Hello! I am your scientific assistant. Choose a learning mode below to learn more about this element.",
        "ai.btn.simple": "Simple",
        "ai.btn.details": "Detailed",
        "ai.btn.study": "Study",
        "ai.btn.quiz": "Mini-Quiz",
        "ai.quiz.correct": "Correct!",
        "ai.quiz.incorrect": "Incorrect.",
        "ai.quiz.finish": "Quiz Completed!",
        "ai.quiz.recommendation": "Study Recommendations:",
        "ai.rec.atomic": "Review atomic structure and proton counts.",
        "ai.rec.chemical": "Study chemical properties and typical reactions.",
        "ai.rec.physical": "Note the physical states and temperatures.",
        "ai.rec.industry": "Check the industrial applications of the element."
    },
    kk: {
        "ai.title": "Syntara AI Ассистенті",
        "ai.chat.placeholder": "Сәлем! Мен сенің ғылыми ассистентіңмін. Осы элемент туралы көбірек білу үшін төмендегі оқу режимін таңда.",
        "ai.btn.simple": "Қарапайым",
        "ai.btn.details": "Толығырақ",
        "ai.btn.study": "Оқу үшін",
        "ai.btn.quiz": "Мини-тест",
        "ai.quiz.correct": "Дұрыс!",
        "ai.quiz.incorrect": "Бұрыс.",
        "ai.quiz.finish": "Тест аяқталды!",
        "ai.quiz.recommendation": "Оқу бойынша ұсыныстар:",
        "ai.rec.atomic": "Атомдық құрылымын және протондар санын қайталаңыз.",
        "ai.rec.chemical": "Химиялық қасиеттерін және тән реакцияларын зерттеңіз.",
        "ai.rec.physical": "Физикалық күйлері мен температураларына назар аударыңыз.",
        "ai.rec.industry": "Элементтің өнеркәсіптік қолданылуын қараңыз."
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
        console.log(`✓ Added AI Assistant keys to ${lang.toUpperCase()} locale`);
    }
}
