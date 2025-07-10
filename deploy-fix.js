#!/usr/bin/env node

// Deploy fix script to move files from dist/public to dist for static deployment
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const sourceDir = path.join(__dirname, 'dist', 'public');
const targetDir = path.join(__dirname, 'dist');

// Check if dist/public exists
if (!fs.existsSync(sourceDir)) {
  console.error('Source directory dist/public does not exist. Please run build first.');
  process.exit(1);
}

// Move files from dist/public to dist
function moveFiles(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const files = fs.readdirSync(src);
  
  for (const file of files) {
    const srcPath = path.join(src, file);
    const destPath = path.join(dest, file);
    
    const stat = fs.statSync(srcPath);
    
    if (stat.isDirectory()) {
      moveFiles(srcPath, destPath);
    } else {
      // Copy file to target location
      fs.copyFileSync(srcPath, destPath);
      console.log(`Copied ${file}`);
    }
  }
}

// Move all files from dist/public to dist
moveFiles(sourceDir, targetDir);

// Remove the now empty public directory
fs.rmSync(sourceDir, { recursive: true, force: true });

console.log('✓ Files moved from dist/public to dist for static deployment');
console.log('✓ Build is now ready for deployment');