const fs = require('fs');
const path = require('path');
const dir = 'd:\\\\REEF\\\\src\\\\pages';

const files = fs.readdirSync(dir);
for (const file of files) {
  if (file.endsWith('.jsx')) {
    const fullPath = path.join(dir, file);
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Replace p-margin-desktop with responsive version
    content = content.replace(/p-margin-desktop/g, 'p-margin-mobile md:p-margin-desktop');
    
    // Specifically fix Volunteers.jsx hardcoded grid layout
    if (file === 'Volunteers.jsx') {
      content = content.replace(/grid grid-cols-12/g, 'grid grid-cols-1 lg:grid-cols-12');
      // Fix col-span-12 inside to be lg:col-span-12 so it doesn't overflow mobile grid
      content = content.replace(/className="col-span-12/g, 'className="col-span-1 lg:col-span-12');
    }
    
    fs.writeFileSync(fullPath, content);
  }
}
console.log('Done replacing padding across pages.');
