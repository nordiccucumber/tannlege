#!/usr/bin/env node

// Test script to verify the deployment fix works correctly
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

console.log('Testing deployment fix...\n');

// Check if dist directory exists
const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) {
  console.log('❌ dist directory does not exist. Please run "npm run build" first.');
  process.exit(1);
}

// Check if dist/public exists (before fix)
const publicDir = path.join(__dirname, 'dist', 'public');
if (fs.existsSync(publicDir)) {
  console.log('✓ dist/public directory exists (before fix)');
  
  // List files in dist/public
  const publicFiles = fs.readdirSync(publicDir);
  console.log(`  Files in dist/public: ${publicFiles.join(', ')}`);
  
  // Check for index.html
  if (publicFiles.includes('index.html')) {
    console.log('✓ index.html found in dist/public');
  } else {
    console.log('❌ index.html not found in dist/public');
  }
} else {
  console.log('❌ dist/public directory does not exist');
  
  // Check if files are already in dist (after fix)
  const distFiles = fs.readdirSync(distDir);
  console.log(`  Files in dist: ${distFiles.join(', ')}`);
  
  if (distFiles.includes('index.html')) {
    console.log('✓ index.html found in dist (deployment fix already applied)');
  } else {
    console.log('❌ index.html not found in dist');
  }
}

console.log('\nInstructions:');
console.log('1. For Autoscale deployment: Change deployment type to "Autoscale" in Replit settings');
console.log('2. For Static deployment: Run "npm run build && node deploy-fix.js"');