const fs = require('fs');

const API_KEY = "sk-22ec091b69504285a092e3d90f73fb38";
const ENDPOINT = "https://api.deepseek.com/chat/completions";

const dataFile = 'locales/en_v2.json';
const data = JSON.parse(fs.readFileSync(dataFile, 'utf8'));

// Get all elements (exclude scientists)
const scientists = ['mendeleev', 'curie', 'lavoisier', 'bohr', 'rutherford', 'dalton', 'pauling', 'nobel', 'hodgkin'];
const allKeys = Object.keys(data);
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

const systemPrompt = `You are an educational AI methodologist and instructional designer. 
Your task is to generate 5 multiple-choice questions with 4 options each for a chemical element.

RULES:
1. Questions MUST be based EXCLUSIVELY on the provided element text.
2. Do not use external facts or trivial clues (e.g., "used in pencils").
3. Questions should test understanding of properties, applications, atomic structure, and relationship between structure and properties.
4. Questions must be suitable for 8-11th grade students, clear, and without ambiguity.
5. It should be impossible to guess the answer without knowing the Explore material.
6. Questions and options MUST be in English.

Output strictly a JSON array of 5 objects. Format of each object:
{
  "text": "Question text?",
  "options": ["Option 1", "Option 2", "Option 3", "Option 4"]
}

CRITICAL REQUIREMENT: The correct answer MUST be placed strictly at these indices in the options array:
Question 1: correct answer MUST be first (index 0).
Question 2: correct answer MUST be second (index 1).
Question 3: correct answer MUST be third (index 2).
Question 4: correct answer MUST be first (index 0).
Question 5: correct answer MUST be second (index 1).

Do not add a "correctIndex" field in the JSON. Ensure the correct options are exactly at these indices.`;

async function processElement(id) {
    const title = data[`system.${id}.title`] || id;
    const desc = data[`system.${id}.desc`] || '';
    const details = data[`system.${id}.details`] || '';

    const contentPrompt = `Generate 5 questions for the element: ${title}

Element text on the website (Explore):
Description: ${desc}
Details: ${details}

Output ONLY a valid JSON array of 5 objects without Markdown wrappers.`;

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

        const resData = await response.json();
        let content = resData.choices[0].message.content.trim();
        
        if (content.startsWith('\`\`\`')) {
            content = content.replace(/^\`\`\`(json)?\n?/, '').replace(/\`\`\`$/, '');
        }

        const questions = JSON.parse(content);
        if (questions.length === 5) {
            questions.forEach((q, i) => {
                const qNum = i + 1;
                data[`ai.${id}.q${qNum}.text`] = q.text;
                data[`ai.${id}.q${qNum}.opt.1`] = q.options[0];
                data[`ai.${id}.q${qNum}.opt.2`] = q.options[1];
                data[`ai.${id}.q${qNum}.opt.3`] = q.options[2];
                data[`ai.${id}.q${qNum}.opt.4`] = q.options[3];
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
    const batchSize = 10;
    for (let i = 0; i < elements.length; i += batchSize) {
        const batch = elements.slice(i, i + batchSize);
        console.log(`Processing batch ${i / batchSize + 1} / ${Math.ceil(elements.length / batchSize)}`);
        await Promise.all(batch.map(id => processElement(id)));
    }

    fs.writeFileSync(dataFile, JSON.stringify(data, null, 4));
    console.log(`Done. Updated ${dataFile}`);
}

main();
