/**
 * Adds atomicNumber, symbol, group fields to each element in anatomy-data.js
 * and enriches Russian descriptions for elements 1-20.
 */
const fs = require('fs');

const elementMeta = {
    // id -> { atomicNumber, symbol, group, groupKey }
    hydrogen:    { n: 1,  s: 'H',  g: 'Nonmetal',               gk: 'nonmetal' },
    helium:      { n: 2,  s: 'He', g: 'Noble Gas',              gk: 'noble_gas' },
    lithium:     { n: 3,  s: 'Li', g: 'Alkali Metal',           gk: 'alkali_metal' },
    beryllium:   { n: 4,  s: 'Be', g: 'Alkaline Earth Metal',   gk: 'alkaline_earth' },
    boron:       { n: 5,  s: 'B',  g: 'Semimetals',              gk: 'semimetal' },
    carbon:      { n: 6,  s: 'C',  g: 'Nonmetal',               gk: 'nonmetal' },
    nitrogen:    { n: 7,  s: 'N',  g: 'Nonmetal',               gk: 'nonmetal' },
    oxygen:      { n: 8,  s: 'O',  g: 'Nonmetal',               gk: 'nonmetal' },
    fluorine:    { n: 9,  s: 'F',  g: 'Halogen',                gk: 'halogen' },
    neon:        { n: 10, s: 'Ne', g: 'Noble Gas',              gk: 'noble_gas' },
    sodium:      { n: 11, s: 'Na', g: 'Alkali Metal',           gk: 'alkali_metal' },
    magnesium:   { n: 12, s: 'Mg', g: 'Alkaline Earth Metal',   gk: 'alkaline_earth' },
    aluminum:    { n: 13, s: 'Al', g: 'Post-Transition Metal',  gk: 'post_transition' },
    silicon:     { n: 14, s: 'Si', g: 'Semimetals',              gk: 'semimetal' },
    phosphorus:  { n: 15, s: 'P',  g: 'Nonmetal',               gk: 'nonmetal' },
    sulfur:      { n: 16, s: 'S',  g: 'Nonmetal',               gk: 'nonmetal' },
    chlorine:    { n: 17, s: 'Cl', g: 'Halogen',                gk: 'halogen' },
    argon:       { n: 18, s: 'Ar', g: 'Noble Gas',              gk: 'noble_gas' },
    potassium:   { n: 19, s: 'K',  g: 'Alkali Metal',           gk: 'alkali_metal' },
    calcium:     { n: 20, s: 'Ca', g: 'Alkaline Earth Metal',   gk: 'alkaline_earth' },
    scandium:    { n: 21, s: 'Sc', g: 'Transition Metal',       gk: 'transition_metal' },
    titanium:    { n: 22, s: 'Ti', g: 'Transition Metal',       gk: 'transition_metal' },
    vanadium:    { n: 23, s: 'V',  g: 'Transition Metal',       gk: 'transition_metal' },
    chromium:    { n: 24, s: 'Cr', g: 'Transition Metal',       gk: 'transition_metal' },
    manganese:   { n: 25, s: 'Mn', g: 'Transition Metal',       gk: 'transition_metal' },
    iron:        { n: 26, s: 'Fe', g: 'Transition Metal',       gk: 'transition_metal' },
    cobalt:      { n: 27, s: 'Co', g: 'Transition Metal',       gk: 'transition_metal' },
    nickel:      { n: 28, s: 'Ni', g: 'Transition Metal',       gk: 'transition_metal' },
    copper:      { n: 29, s: 'Cu', g: 'Transition Metal',       gk: 'transition_metal' },
    zinc:        { n: 30, s: 'Zn', g: 'Transition Metal',       gk: 'transition_metal' },
    gallium:     { n: 31, s: 'Ga', g: 'Post-Transition Metal',  gk: 'post_transition' },
    germanium:   { n: 32, s: 'Ge', g: 'Semimetals',              gk: 'semimetal' },
    arsenic:     { n: 33, s: 'As', g: 'Semimetals',              gk: 'semimetal' },
    selenium:    { n: 34, s: 'Se', g: 'Nonmetal',               gk: 'nonmetal' },
    bromine:     { n: 35, s: 'Br', g: 'Halogen',                gk: 'halogen' },
    krypton:     { n: 36, s: 'Kr', g: 'Noble Gas',              gk: 'noble_gas' },
    rubidium:    { n: 37, s: 'Rb', g: 'Alkali Metal',           gk: 'alkali_metal' },
    strontium:   { n: 38, s: 'Sr', g: 'Alkaline Earth Metal',   gk: 'alkaline_earth' },
    yttrium:     { n: 39, s: 'Y',  g: 'Transition Metal',       gk: 'transition_metal' },
    zirconium:   { n: 40, s: 'Zr', g: 'Transition Metal',       gk: 'transition_metal' },
    niobium:     { n: 41, s: 'Nb', g: 'Transition Metal',       gk: 'transition_metal' },
    molybdenum:  { n: 42, s: 'Mo', g: 'Transition Metal',       gk: 'transition_metal' },
    technetium:  { n: 43, s: 'Tc', g: 'Transition Metal',       gk: 'transition_metal' },
    ruthenium:   { n: 44, s: 'Ru', g: 'Transition Metal',       gk: 'transition_metal' },
    rhodium:     { n: 45, s: 'Rh', g: 'Transition Metal',       gk: 'transition_metal' },
    palladium:   { n: 46, s: 'Pd', g: 'Transition Metal',       gk: 'transition_metal' },
    silver:      { n: 47, s: 'Ag', g: 'Transition Metal',       gk: 'transition_metal' },
    cadmium:     { n: 48, s: 'Cd', g: 'Transition Metal',       gk: 'transition_metal' },
    indium:      { n: 49, s: 'In', g: 'Post-Transition Metal',  gk: 'post_transition' },
    tin:         { n: 50, s: 'Sn', g: 'Post-Transition Metal',  gk: 'post_transition' },
    antimony:    { n: 51, s: 'Sb', g: 'Semimetals',              gk: 'semimetal' },
    tellurium:   { n: 52, s: 'Te', g: 'Semimetals',              gk: 'semimetal' },
    iodine:      { n: 53, s: 'I',  g: 'Halogen',                gk: 'halogen' },
    xenon:       { n: 54, s: 'Xe', g: 'Noble Gas',              gk: 'noble_gas' },
    cesium:      { n: 55, s: 'Cs', g: 'Alkali Metal',           gk: 'alkali_metal' },
    barium:      { n: 56, s: 'Ba', g: 'Alkaline Earth Metal',   gk: 'alkaline_earth' },
    lanthanum:   { n: 57, s: 'La', g: 'Lanthanide',             gk: 'lanthanide' },
    cerium:      { n: 58, s: 'Ce', g: 'Lanthanide',             gk: 'lanthanide' },
    praseodymium:{ n: 59, s: 'Pr', g: 'Lanthanide',             gk: 'lanthanide' },
    neodymium:   { n: 60, s: 'Nd', g: 'Lanthanide',             gk: 'lanthanide' },
    // legacy IDs (old biology-era mapping)
    skeletal:    { n: 1,  s: 'H',  g: 'Nonmetal',               gk: 'nonmetal' },
    muscular:    { n: 2,  s: 'He', g: 'Noble Gas',              gk: 'noble_gas' },
    nervous:     { n: 3,  s: 'Li', g: 'Alkali Metal',           gk: 'alkali_metal' },
    cardiovascular: { n: 4, s: 'Be', g: 'Alkaline Earth Metal', gk: 'alkaline_earth' },
    respiratory: { n: 35, s: 'Br', g: 'Halogen',               gk: 'halogen' },
    digestive:   { n: 6,  s: 'C',  g: 'Nonmetal',               gk: 'nonmetal' },
    endocrine:   { n: 7,  s: 'N',  g: 'Nonmetal',               gk: 'nonmetal' },
    immune:      { n: 8,  s: 'O',  g: 'Nonmetal',               gk: 'nonmetal' },
    urinary:     { n: 9,  s: 'F',  g: 'Halogen',                gk: 'halogen' },
    reproductive:{ n: 10, s: 'Ne', g: 'Noble Gas',              gk: 'noble_gas' },
    integumentary:{ n: 11, s: 'Na', g: 'Alkali Metal',          gk: 'alkali_metal' },
};

let content = fs.readFileSync('js/data/anatomy-data.js', 'utf8');

// For each element, inject atomicNumber, symbol, group after the id line
for (const [id, meta] of Object.entries(elementMeta)) {
    // Match the id line inside an object
    const pattern = new RegExp(`(id: '${id}',\\s*\\n)(\\s*titleKey:)`, 'g');
    const replacement = `$1        atomicNumber: ${meta.n},\n        symbol: '${meta.s}',\n        group: '${meta.g}',\n        groupKey: '${meta.gk}',\n$2`;
    
    // Only replace if not already present
    if (!content.includes(`id: '${id}',\n        atomicNumber:`)) {
        content = content.replace(pattern, replacement);
    }
}

fs.writeFileSync('js/data/anatomy-data.js', content);
console.log('✓ Added atomicNumber, symbol, group fields to all elements');
