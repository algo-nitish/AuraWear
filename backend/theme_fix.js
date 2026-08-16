import fs from 'fs';
import path from 'path';

const dir = '../frontend/src';

const replacements = [
  { from: /text-gray-700/g, to: 'text-brand-dark' },
  { from: /text-gray-500/g, to: 'text-brand-muted' },
  { from: /text-gray-600/g, to: 'text-brand-muted' },
  { from: /text-gray-800/g, to: 'text-brand-dark' },
  { from: /text-gray-400/g, to: 'text-brand-muted' },
  { from: /text-black/g, to: 'text-brand-dark' },
  { from: /bg-white/g, to: 'bg-brand-bg' },
  { from: /bg-gray-50/g, to: 'bg-brand-bg' },
  { from: /bg-gray-100/g, to: 'bg-brand-bg' },
  { from: /bg-black/g, to: 'bg-brand-dark' },
  { from: /border-gray-300/g, to: 'border-brand-muted/30' },
  { from: /border-gray-400/g, to: 'border-brand-muted/50' },
  { from: /mix-blend-multiply/g, to: 'dark:invert mix-blend-multiply dark:mix-blend-normal' }
];

function processDirectory(directory) {
  const files = fs.readdirSync(directory);
  for (const file of files) {
    const fullPath = path.join(directory, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.jsx') || fullPath.endsWith('.js')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let changed = false;
      
      for (const rule of replacements) {
        if (rule.from.test(content)) {
          content = content.replace(rule.from, rule.to);
          changed = true;
        }
      }
      
      if (changed) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated: ${fullPath}`);
      }
    }
  }
}

processDirectory(dir);
console.log("Theme classes updated globally.");
