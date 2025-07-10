#!/usr/bin/env node

// Static build script for One.com deployment
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

console.log('🚀 Building static HTML for One.com deployment...\n');

// Step 1: Run Vite build
console.log('1. Running Vite build...');
const { execSync } = await import('child_process');

try {
  execSync('npm run build', { stdio: 'inherit' });
  console.log('✅ Build completed successfully!\n');
} catch (error) {
  console.error('❌ Build failed:', error);
  process.exit(1);
}

// Step 2: Verify build output
const buildDir = path.join(__dirname, 'dist', 'public');
if (!fs.existsSync(buildDir)) {
  console.error('❌ Build directory not found:', buildDir);
  process.exit(1);
}

console.log('2. Verifying build output...');
const files = fs.readdirSync(buildDir);
console.log('📁 Build files:', files.join(', '));

// Check for essential files
const requiredFiles = ['index.html'];
const missingFiles = requiredFiles.filter(file => !files.includes(file));

if (missingFiles.length > 0) {
  console.error('❌ Missing required files:', missingFiles.join(', '));
  process.exit(1);
}

// Step 3: Copy files to upload directory
const uploadDir = path.join(__dirname, 'upload-to-one-com');
if (fs.existsSync(uploadDir)) {
  fs.rmSync(uploadDir, { recursive: true, force: true });
}
fs.mkdirSync(uploadDir);

console.log('3. Preparing files for upload...');

// Copy all files from dist/public to upload directory
const copyFiles = (src, dest) => {
  const files = fs.readdirSync(src);
  
  for (const file of files) {
    const srcPath = path.join(src, file);
    const destPath = path.join(dest, file);
    
    const stat = fs.statSync(srcPath);
    
    if (stat.isDirectory()) {
      fs.mkdirSync(destPath, { recursive: true });
      copyFiles(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
};

copyFiles(buildDir, uploadDir);

// Step 4: Create deployment instructions
const instructionsFile = path.join(uploadDir, 'DEPLOYMENT_INSTRUCTIONS.txt');
const instructions = `
DEPLOYMENT INSTRUCTIONS FOR ONE.COM
===================================

1. Log in to your One.com control panel
2. Go to File Manager or similar file management tool
3. Navigate to your website's root directory (usually public_html or htdocs)
4. Upload ALL files from this directory to your website's root directory
5. Make sure index.html is in the root directory
6. Upload the entire assets/ folder with all its contents

File structure should look like:
public_html/
├── index.html
├── assets/
│   ├── index-[hash].css
│   ├── index-[hash].js
│   └── [other asset files]
└── [other files if any]

After upload:
- Visit your website to verify it works
- Check that Google Sheets data loads (may take a few seconds)
- Test the contact form
- Verify all links work correctly

For Google Sheets setup, see: GOOGLE_SHEETS_GUIDE.md
For troubleshooting, see: STATIC_EXPORT_GUIDE.md
`;

fs.writeFileSync(instructionsFile, instructions);

console.log('✅ Static HTML build completed successfully!');
console.log('📁 Files ready for upload in: upload-to-one-com/');
console.log('📝 See DEPLOYMENT_INSTRUCTIONS.txt for upload instructions');
console.log('\nNext steps:');
console.log('1. Configure Google Sheets (see GOOGLE_SHEETS_GUIDE.md)');
console.log('2. Upload files to One.com (see STATIC_EXPORT_GUIDE.md)');
console.log('3. Test your website');