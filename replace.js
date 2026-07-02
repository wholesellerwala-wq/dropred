const fs = require('fs');
const path = require('path');

const dir = 'c:\\Users\\Administrator\\Desktop\\dropstrengym';
const files = fs.readdirSync(dir);

const logoPath = 'logo/ChatGPT_Image_Jul_2__2026__08_35_53_PM-removebg-preview.png';
const logoHtml = `<img src="${logoPath}" alt="Droptrens" style="height:40px; margin-right:8px; vertical-align:middle; display:inline-block;">Droptrens`;

files.forEach(file => {
  if (file.endsWith('.html') || file.endsWith('.js')) {
    let content = fs.readFileSync(path.join(dir, file), 'utf8');
    
    // Replace the exact HTML span for the logo
    content = content.replace(/PowerFit<span>CRM<\/span>/g, logoHtml);
    
    // Loading screen
    content = content.replace(/POWERFIT CRM/g, 'DROPTRENS');
    
    // Other texts
    content = content.replace(/PowerFit Gym CRM/g, 'Droptrens');
    content = content.replace(/PowerFit CRM/g, 'Droptrens');
    content = content.replace(/PowerFit/g, 'Droptrens');
    content = content.replace(/support@powerfit\.in/g, 'support@droptrens.in');

    fs.writeFileSync(path.join(dir, file), content);
    console.log(`Updated ${file}`);
  }
});
