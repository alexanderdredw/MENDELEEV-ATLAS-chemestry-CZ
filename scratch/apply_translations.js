const fs = require('fs');
const path = require('path');

const enPath = path.join(__dirname, '../locales/en_v2.json');
const kkPath = path.join(__dirname, '../locales/kk_v3.json');

const enData = JSON.parse(fs.readFileSync(enPath, 'utf8'));
const kkData = JSON.parse(fs.readFileSync(kkPath, 'utf8'));

const updates = {
  148: { enTerm: "Amino acids", kkTerm: "Аминқышқылдары", enDef: "contain both an amino group and a carboxyl group.", kkDef: "құрамында амин тобы да, карбоксил тобы да бар." },
  149: { enTerm: "Proteins", kkTerm: "Ақуыздар", enDef: "natural polymers of amino acids.", kkDef: "аминқышқылдарынан тұратын табиғи полимерлер." },
  150: { enTerm: "Peptide bond", kkTerm: "Пептидтік байланыс", enDef: "bond between amino acids in proteins (-CONH-).", kkDef: "ақуыздардағы аминқышқылдары арасындағы байланыс (-CONH-)." },
  151: { enTerm: "Nucleic acids", kkTerm: "Нуклеин қышқылдары", enDef: "biopolymers (DNA, RNA).", kkDef: "биополимерлер (ДНҚ, РНҚ)." },
  152: { enTerm: "Polymers", kkTerm: "Полимерлер", enDef: "high molecular weight compounds.", kkDef: "жоғары молекулалық қосылыстар." },
  153: { enTerm: "Monomer", kkTerm: "Мономер", enDef: "a low molecular weight substance from which a polymer is built.", kkDef: "полимер түзілетін төмен молекулалық зат." },
  154: { enTerm: "Polymerization", kkTerm: "Полимерлену", enDef: "polymer formation reaction by addition of monomers.", kkDef: "мономерлердің қосылуы арқылы полимер түзілу реакциясы." },
  155: { enTerm: "Polycondensation", kkTerm: "Поликонденсация", enDef: "synthesis of a polymer with the release of a by-product (water).", kkDef: "жанама өнім (су) бөле отырып полимер синтездеу." },
  156: { enTerm: "Substitution reaction", kkTerm: "Орынбасу реакциясы", enDef: "a hydrogen atom is replaced by another atom/group.", kkDef: "сутегі атомы басқа атомға/топқа алмасады." },
  157: { enTerm: "Addition reaction", kkTerm: "Қосылу реакциясы", enDef: "breaking of multiple bonds and addition of atoms.", kkDef: "еселі байланыстардың үзілуі және атомдардың қосылуы." },
  158: { enTerm: "Dehydration", kkTerm: "Дегидратация", enDef: "cleavage of water.", kkDef: "судың бөлінуі." },
  159: { enTerm: "Hydrogenation", kkTerm: "Гидрлеу", enDef: "addition of hydrogen.", kkDef: "сутегінің қосылуы." },
  160: { enTerm: "Oxidation of organics", kkTerm: "Органиканы тотықтыру", enDef: "transformations under the action of oxidizing agents.", kkDef: "тотықтырғыштардың әсерінен болатын түрленулер." },
  161: { enTerm: "Pyrolysis", kkTerm: "Пиролиз", enDef: "decomposition of organics when heated without air.", kkDef: "ауасыз қыздырғанда органиканың ыдырауы." },
  162: { enTerm: "Oil", kkTerm: "Мұнай", enDef: "a mixture of liquid hydrocarbons.", kkDef: "сұйық көмірсутектердің қоспасы." },
  163: { enTerm: "Natural gas", kkTerm: "Табиғи газ", enDef: "a mixture of gases (methane, etc.).", kkDef: "газдар қоспасы (метан және т.б.)." },
  164: { enTerm: "Cracking", kkTerm: "Крекинг", enDef: "breaking of long hydrocarbon chains.", kkDef: "ұзын көмірсутек тізбектерінің үзілуі." },
  165: { enTerm: "Nucleophile", kkTerm: "Нуклеофил", enDef: "a reagent providing an electron pair for a bond.", kkDef: "байланыс үшін электрон жұбын беретін реагент." },
  166: { enTerm: "Electrophile", kkTerm: "Электрофил", enDef: "a reagent accepting an electron pair.", kkDef: "электрон жұбын қабылдайтын реагент." },
  167: { enTerm: "Radical", kkTerm: "Радикал", enDef: "a particle with an unpaired electron.", kkDef: "жұптаспаған электроны бар бөлшек." },
  168: { enTerm: "Chirality", kkTerm: "Хиральдылық", enDef: "the property of a molecule not to be superimposable on its mirror image.", kkDef: "молекуланың өзінің айнадағы бейнесімен сәйкес келмеу қасиеті." },
  169: { enTerm: "Geometric isomerism", kkTerm: "Геометриялық изомерия", enDef: "difference in the spatial arrangement of groups at a double bond.", kkDef: "қос байланыстағы топтардың кеңістікте орналасуындағы айырмашылық." },
  170: { enTerm: "Homology", kkTerm: "Гомология", enDef: "regular difference in composition (-CH₂- group).", kkDef: "құрамдағы заңды айырмашылық (-CH₂- тобы)." },
  171: { enTerm: "Hydroxyl group", kkTerm: "Гидроксил тобы", enDef: "-OH group.", kkDef: "-OH тобы." },
  172: { enTerm: "Carboxyl group", kkTerm: "Карбоксил тобы", enDef: "-COOH group.", kkDef: "-COOH тобы." },
  173: { enTerm: "Aldehyde group", kkTerm: "Альдегид тобы", enDef: "-CHO group.", kkDef: "-CHO тобы." },
  174: { enTerm: "Gaseous state", kkTerm: "Газ тәрізді күй", enDef: "physical state of a substance with high particle energy.", kkDef: "бөлшектердің энергиясы жоғары заттың агрегаттық күйі." },
  175: { enTerm: "Redox (oxidation-reduction reactions)", kkTerm: "ТТР (тотығу-тотықсыздану реакциялары)", enDef: "reactions with a change in oxidation states.", kkDef: "тотығу дәрежелерінің өзгеруімен жүретін реакциялар." },
  176: { enTerm: "Chemical equilibrium", kkTerm: "Химиялық тепе-теңдік", enDef: "a state when the rates of the forward and reverse reactions are equal.", kkDef: "тура және кері реакциялардың жылдамдықтары тең болатын күй." },
  177: { enTerm: "Le Chatelier's principle", kkTerm: "Ле Шателье принципі", enDef: "an external influence shifts the equilibrium to compensate for this influence.", kkDef: "сыртқы әсер тепе-теңдікті осы әсерді өтеу жағына ығыстырады." },
  178: { enTerm: "Gibbs energy", kkTerm: "Гиббс энергиясы", enDef: "a criterion for the spontaneity of a reaction.", kkDef: "реакцияның өздігінен жүру критерийі." },
  179: { enTerm: "Entropy", kkTerm: "Энтропия", enDef: "a measure of the disorder of a system.", kkDef: "жүйедегі ретсіздік өлшемі." },
  180: { enTerm: "Enthalpy", kkTerm: "Энтальпия", enDef: "the heat content of a system.", kkDef: "жүйенің жылу мөлшері." },
  181: { enTerm: "Hess's law", kkTerm: "Гесс заңы", enDef: "the thermal effect depends only on the initial and final state.", kkDef: "жылу эффектісі тек бастапқы және соңғы күйге тәуелді." },
  182: { enTerm: "Thermochemistry", kkTerm: "Термохимия", enDef: "a branch of chemistry about thermal effects.", kkDef: "жылу эффектілері туралы химия бөлімі." },
  183: { enTerm: "Activation energy", kkTerm: "Активтену энергиясы", enDef: "the energy needed to start a reaction.", kkDef: "реакцияны бастау үшін қажетті энергия." },
  184: { enTerm: "Dissociation coefficient", kkTerm: "Диссоциация коэффициенті", enDef: "the fraction of molecules that have broken down into ions.", kkDef: "иондарға ыдыраған молекулалардың үлесі." },
  185: { enTerm: "Equilibrium constant", kkTerm: "Тепе-теңдік константасы", enDef: "the ratio of the products of the concentrations of the products to the reactants.", kkDef: "өнімдер концентрацияларының көбейтіндісінің реагенттерге қатынасы." },
  186: { enTerm: "Ideal gas equation", kkTerm: "Идеал газ теңдеуі", enDef: "PV = nRT.", kkDef: "PV = nRT." },
  187: { enTerm: "Chromatography", kkTerm: "Хроматография", enDef: "a method of separating mixtures by adsorption.", kkDef: "адсорбция арқылы қоспаларды бөлу әдісі." },
  188: { enTerm: "Spectroscopy", kkTerm: "Спектроскопия", enDef: "the study of the interaction of light with matter.", kkDef: "жарықтың затпен өзара әрекеттесуін зерттеу." },
  189: { enTerm: "Titration", kkTerm: "Титрлеу", enDef: "a method of measuring concentration through a neutralization reaction.", kkDef: "бейтараптану реакциясы арқылы концентрацияны өлшеу әдісі." },
  190: { enTerm: "Analytical chemistry", kkTerm: "Аналитикалық химия", enDef: "the science of methods for determining composition.", kkDef: "құрамды анықтау әдістері туралы ғылым." },
  191: { enTerm: "Qualitative reactions", kkTerm: "Сапалық реакциялар", enDef: "reactions to detect specific ions/substances.", kkDef: "нақты иондарды/заттарды анықтауға арналған реакциялар." },
  192: { enTerm: "Photosynthesis", kkTerm: "Фотосинтез", enDef: "the process of formation of organic matter from CO₂ and H₂O under the action of light.", kkDef: "жарықтың әсерінен CO₂ мен H₂O-дан органикалық заттардың түзілу процесі." },
  193: { enTerm: "Enzymes", kkTerm: "Ферменттер", enDef: "biological catalysts of a protein nature.", kkDef: "ақуыздық табиғаты бар биологиялық катализаторлар." },
  194: { enTerm: "Biochemistry", kkTerm: "Биохимия", enDef: "the chemistry of living organisms.", kkDef: "тірі организмдердің химиясы." },
  195: { enTerm: "Electrochemical series", kkTerm: "Электрохимиялық қатар", enDef: "a list of metals in order of their increasing activity.", kkDef: "металдардың белсенділігінің өсу ретімен тізімі." },
  196: { enTerm: "Galvanic cell", kkTerm: "Гальваникалық элемент", enDef: "a current source based on a redox reaction.", kkDef: "ТТР-ге негізделген ток көзі." },
  197: { enTerm: "Accumulator", kkTerm: "Аккумулятор", enDef: "a reversible chemical current source.", kkDef: "қайтымды химиялық ток көзі." },
  198: { enTerm: "Passivation", kkTerm: "Пассивация", enDef: "formation of a protective film on a metal.", kkDef: "металда қорғаныш қабықшасының түзілуі." },
  199: { enTerm: "Pauling electronegativity", kkTerm: "Полинг бойынша электртерістік", enDef: "a scale of relative electronegativity.", kkDef: "салыстырмалы электртерістік шкаласы." },
  200: { enTerm: "Ionization energy", kkTerm: "Иондану энергиясы", enDef: "the energy to remove an electron from an atom.", kkDef: "атомнан электронды бөліп алуға қажетті энергия." },
  201: { enTerm: "Electron affinity", kkTerm: "Электрон тартқыштық", enDef: "the energy released when an electron is attached.", kkDef: "электрон қосылған кезде бөлінетін энергия." },
  202: { enTerm: "Coordination number", kkTerm: "Координациялық сан", enDef: "the number of particles surrounding the central atom in a complex.", kkDef: "кешендегі орталық атомды қоршап тұрған бөлшектердің саны." },
  203: { enTerm: "State of aggregation", kkTerm: "Агрегаттық күй", enDef: "solid, liquid or gaseous state.", kkDef: "қатты, сұйық немесе газ тәрізді күй." },
  204: { enTerm: "Melting", kkTerm: "Балқу", enDef: "transition from a solid state to a liquid.", kkDef: "қатты күйден сұйық күйге өту." },
  205: { enTerm: "Evaporation", kkTerm: "Булану", enDef: "transition from a liquid to a gas.", kkDef: "сұйықтықтан газға өту." },
  206: { enTerm: "Sublimation", kkTerm: "Сублимация", enDef: "transition from solid to gaseous bypassing the liquid.", kkDef: "сұйық күйді аттап өтіп, қатты күйден газға өту." },
  207: { enTerm: "Boiling point", kkTerm: "Қайнау температурасы", enDef: "the temperature at which the vapor pressure equals the external pressure.", kkDef: "бу қысымы сыртқы қысымға тең болатын температура." },
  208: { enTerm: "Freezing point", kkTerm: "Қату нүктесі", enDef: "the temperature of transition of a liquid to a solid state.", kkDef: "сұйықтықтың қатты күйге өту температурасы." },
  209: { enTerm: "Radioactivity", kkTerm: "Радиоактивтілік", enDef: "spontaneous decay of nuclei.", kkDef: "ядролардың өздігінен ыдырауы." },
  210: { enTerm: "Half-life", kkTerm: "Жартылай ыдырау периоды", enDef: "the time for half of a radioactive substance to decay.", kkDef: "радиоактивті заттың жартысының ыдырау уақыты." },
  211: { enTerm: "Synthesis", kkTerm: "Синтез", enDef: "the production of complex substances from simple ones.", kkDef: "қарапайым заттардан күрделі заттарды алу." },
  212: { enTerm: "Analysis", kkTerm: "Анализ", enDef: "determination of the chemical composition of a substance.", kkDef: "заттың химиялық құрамын анықтау." },
  213: { enTerm: "Laboratory glassware", kkTerm: "Зертханалық ыдыстар", enDef: "flasks, test tubes, burettes, etc.", kkDef: "колбалар, сынауықтар, бюреткалар және т.б." },
  214: { enTerm: "Safety engineering", kkTerm: "Қауіпсіздік техникасы", enDef: "work rules to prevent injuries", kkDef: "жарақаттануды болдырмау үшін жұмыс ережелері" }
};

for (const [id, translations] of Object.entries(updates)) {
  enData[`glossary.term.${id}`] = translations.enTerm;
  enData[`glossary.def.${id}`] = translations.enDef;
  kkData[`glossary.term.${id}`] = translations.kkTerm;
  kkData[`glossary.def.${id}`] = translations.kkDef;
}

fs.writeFileSync(enPath, JSON.stringify(enData, null, 4), 'utf8');
fs.writeFileSync(kkPath, JSON.stringify(kkData, null, 4), 'utf8');
console.log('Update complete.');
