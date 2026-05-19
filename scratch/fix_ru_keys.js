const fs = require('fs');
const l = JSON.parse(fs.readFileSync('locales/ru_v2.json', 'utf8'));

// Full school-level descriptions for elements 1-4 (fix template content)
l['system.hydrogen.details'] = l['system.skeletal.details']; // Already rich
l['system.helium.details'] = l['system.muscular.details'];
l['system.lithium.details'] = l['system.nervous.details'];
l['system.beryllium.details'] = l['system.cardiovascular.details'];
l['system.hydrogen.title'] = 'Водород';
l['system.hydrogen.desc'] = l['system.skeletal.desc'];
l['system.hydrogen.fact'] = l['system.skeletal.fact'];
l['system.helium.title'] = 'Гелий';
l['system.helium.desc'] = l['system.muscular.desc'];
l['system.helium.fact'] = l['system.muscular.fact'];
l['system.lithium.title'] = 'Литий';
l['system.lithium.desc'] = l['system.nervous.desc'];
l['system.lithium.fact'] = l['system.nervous.fact'];
l['system.beryllium.title'] = 'Бериллий';
l['system.beryllium.desc'] = l['system.cardiovascular.desc'];
l['system.beryllium.fact'] = l['system.cardiovascular.fact'];

// Also fix AI keys for 1-4
['skeletal','muscular','nervous','cardiovascular'].forEach((old, i) => {
  const news = ['hydrogen','helium','lithium','beryllium'][i];
  for(const k of Object.keys(l)) {
    if(k.startsWith(`ai.${old}.`)) {
      const newKey = k.replace(`ai.${old}.`, `ai.${news}.`);
      if(!l[newKey]) l[newKey] = l[k];
    }
    if(k.startsWith(`resource.wiki.${old}`) || k.startsWith(`resource.pubchem.${old}`) || k.startsWith(`resource.healthline.${old}`)) {
      const newKey = k.replace(old, news);
      if(!l[newKey]) l[newKey] = l[k];
    }
  }
});

fs.writeFileSync('locales/ru_v2.json', JSON.stringify(l, null, 4));
console.log('done');
