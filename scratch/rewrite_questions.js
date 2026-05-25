const fs = require('fs');

const API_KEY = "sk-22ec091b69504285a092e3d90f73fb38";
const ENDPOINT = "https://api.deepseek.com/chat/completions";

const ruData = JSON.parse(fs.readFileSync('locales/ru_v2.json', 'utf8'));

// Get all elements (exclude scientists)
const scientists = ['mendeleev', 'curie', 'lavoisier', 'bohr', 'rutherford', 'dalton', 'pauling', 'nobel', 'hodgkin'];
const allKeys = Object.keys(ruData);
const elementKeys = new Set();

for (const key of allKeys) {
    const match = key.match(/^ai\.([a-z0-9_]+)\.q1\.text$/);
    if (match) {
        const id = match[1];
        if (!scientists.includes(id)) {
            elementKeys.add(id);
        }
    }
}

const elements = Array.from(elementKeys);
console.log(`Found ${elements.length} elements to process.`);

// Build glossary text
let glossaryText = "Глоссарий:\n";
for (let i = 1; i <= 33; i++) {
    const term = ruData[`glossary.term.${i}`];
    const def = ruData[`glossary.def.${i}`];
    if (term && def) {
        glossaryText += `- ${term}: ${def}\n`;
    }
}

const systemPrompt = `Ты — образовательный AI-методист и instructional designer. 
Твоя задача — сгенерировать 5 тестовых вопросов с 4 вариантами ответов для химического элемента.

ПРАВИЛА:
1. Вопросы должны строиться ИСКЛЮЧИТЕЛЬНО на предоставленной информации об элементе и Глоссарии.
2. Не использовать внешние факты или тривиальные подсказки (например, "используется в карандашах").
3. Вопросы должны проверять понимание свойств, применения, связи строения атома и его свойств.
4. Разрешается и приветствуется использование определений из глоссария для усложнения/обогащения вопроса.
5. Вопросы должны быть понятны ученикам 8-11 классов, без двусмысленности.
6. Нельзя угадать ответ без знания материала.
7. Вопросы и ответы должны быть на русском языке.

Выведи строго JSON-массив из 5 объектов. Формат каждого объекта:
{
  "text": "Текст вопроса?",
  "options": ["Ответ 1", "Ответ 2", "Ответ 3", "Ответ 4"]
}
ВАЖНОЕ ТРЕБОВАНИЕ: Правильные ответы в массиве options ДОЛЖНЫ быть расположены СТРОГО на следующих позициях:
Вопрос 1: правильный ответ ВСЕГДА должен быть первым (индекс 0).
Вопрос 2: правильный ответ ВСЕГДА должен быть вторым (индекс 1).
Вопрос 3: правильный ответ ВСЕГДА должен быть третьим (индекс 2).
Вопрос 4: правильный ответ ВСЕГДА должен быть первым (индекс 0).
Вопрос 5: правильный ответ ВСЕГДА должен быть вторым (индекс 1).

Не добавляй поле correctIndex в JSON, я сам его знаю. Убедись, что правильные ответы лежат точно по этим индексам.`;

async function processElement(id) {
    const title = ruData[`system.${id}.title`] || id;
    const desc = ruData[`system.${id}.desc`] || '';
    const details = ruData[`system.${id}.details`] || '';

    const contentPrompt = `Сгенерируй 5 вопросов для элемента: ${title}

Текст элемента на сайте (Explore):
Описание: ${desc}
Детали: ${details}

${glossaryText}

Выведи ТОЛЬКО валидный JSON массив из 5 объектов без Markdown оберток.`;

    try {
        const response = await fetch(ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${API_KEY}`
            },
            body: JSON.stringify({
                model: 'deepseek-chat',
                messages: [
                    { role: 'system', content: systemPrompt },
                    { role: 'user', content: contentPrompt }
                ],
                temperature: 0.3
            })
        });

        const data = await response.json();
        let content = data.choices[0].message.content.trim();
        
        // Remove markdown block if present
        if (content.startsWith('\`\`\`')) {
            content = content.replace(/^\`\`\`(json)?\n?/, '').replace(/\`\`\`$/, '');
        }

        const questions = JSON.parse(content);
        if (questions.length === 5) {
            questions.forEach((q, i) => {
                const qNum = i + 1;
                ruData[`ai.${id}.q${qNum}.text`] = q.text;
                ruData[`ai.${id}.q${qNum}.opt.1`] = q.options[0];
                ruData[`ai.${id}.q${qNum}.opt.2`] = q.options[1];
                ruData[`ai.${id}.q${qNum}.opt.3`] = q.options[2];
                ruData[`ai.${id}.q${qNum}.opt.4`] = q.options[3];
                // Also update correctIndex? Wait, correctIndex is stored in anatomy-data.js, not in translation file!
                // We MUST update correctIndex in anatomy-data.js.
                // For now, we save the generated questions to a file so we can update anatomy-data.js as well.
            });
            console.log(`Processed ${id} successfully.`);
            return { id, questions };
        } else {
            console.error(`Invalid questions length for ${id}`);
            return null;
        }
    } catch (err) {
        console.error(`Error processing ${id}:`, err);
        return null;
    }
}

async function main() {
    const results = {};
    // Process in batches of 5 to avoid rate limits
    const batchSize = 5;
    for (let i = 0; i < elements.length; i += batchSize) {
        const batch = elements.slice(i, i + batchSize);
        console.log(`Processing batch ${i / batchSize + 1} / ${Math.ceil(elements.length / batchSize)}`);
        const promises = batch.map(id => processElement(id));
        const res = await Promise.all(promises);
        for (const r of res) {
            if (r) results[r.id] = r.questions;
        }
    }

    fs.writeFileSync('locales/ru_v2.json', JSON.stringify(ruData, null, 4));
    fs.writeFileSync('scratch/generated_questions.json', JSON.stringify(results, null, 2));
    console.log("Done. Updated ru_v2.json and saved generated_questions.json");
}

main();
