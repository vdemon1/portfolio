const fs = require('fs');
const files = [
  'c:/Users/Pedro/Downloads/b_BG03T6VGFr5/components/templates/manutencao.tsx',
  'c:/Users/Pedro/Downloads/b_BG03T6VGFr5/components/templates/estetica.tsx',
  'c:/Users/Pedro/Downloads/b_BG03T6VGFr5/components/templates/advocacia.tsx'
];

const map = {
  'EmergGncia': 'Emergência',
  'Confiana': 'Confiança',
  'preo': 'preço',
  'vocG': 'você',
  'nuo': 'não',
  'muo': 'mão',
  'T?cnico': 'Técnico',
  'Servios': 'Serviços',
  'Ropidos': 'Rápidos',
  'Solues': 'Soluções',
  'residGncias': 'residências',
  'com?rcios': 'comércios',
  'Avaliaes': 'Avaliações',
  'visitao': 'visitação',
  'el?trico': 'elétrico',
  'cartuo': 'cartão',
  'cr?dito': 'crédito',
  'manuteno': 'manutenção',
  'instalao': 'instalação',
  'Avaliao': 'Avaliação',
  'Harmonizao': 'Harmonização',
  'Toxina Botulnica': 'Toxina Botulínica',
  'Bioestimuladores': 'Bioestimuladores',
  'colgeno': 'colágeno',
  'Dvidas': 'Dúvidas',
  'clnica': 'clínica',
  'pescoo': 'pescoço',
  'Ateno': 'Atenção',
  'Est?tica': 'Estética',
  'vocGs': 'vocês',
  'atrav?s': 'através',
  'Padruo': 'Padrão',
  'avançados': 'avançados',
  'aluguel': 'aluguel',
  'fiar': 'fiar',
  'ExcelGncia': 'Excelência',
  'jurdica': 'jurídica',
  'padruo': 'padrão',
  'estrat?gicos': 'estratégicos',
  'trumites': 'trâmites',
  'ExperiGncia': 'Experiência',
  'jurisprudGncia': 'jurisprudência',
  'VocG': 'Você',
  'Ns': 'Nós',
  'solues': 'soluções',
  'A\n': 'A\n'
};

files.forEach(f => {
  if (!fs.existsSync(f)) return;
  let text = fs.readFileSync(f, 'utf8');
  for (const [k, v] of Object.entries(map)) {
    text = text.split(k).join(v);
  }
  // catch all other standard broken tokens
  text = text.replace(//g, 'c').replace(/G/g, 'e').replace(/u/g, 'a').replace(/?/g, 'e').replace(/o/g, 'a');
  fs.writeFileSync(f, text, 'utf8');
});
