# Deployment Fix Guide

## Issue
The current build setup creates files in `dist/public` but the deployment expects them in `dist`.

## Solution Options

### Option 1: Use Autoscale Deployment (Recommended)
Since this is a full-stack Express application, change the deployment type from "Static" to "Autoscale" in your Replit deployment settings. This will properly handle the Express server and serve both the API and frontend.

### Option 2: Fix Static Deployment
If you prefer static deployment, run the deployment fix script after building:

```bash
# Build the application
npm run build

# Run the deployment fix script
node deploy-fix.js
```

The script will:
1. Move all files from `dist/public` to `dist`
2. Remove the empty `dist/public` directory
3. Prepare the build for static deployment

## Files Created
- `deploy-fix.js` - Script to reorganize build files for static deployment
- `DEPLOYMENT.md` - This guide

## Recommendation
For a full-stack application like this dental practice website, using "Autoscale" deployment is the better choice as it:
- Properly handles the Express server
- Serves both API endpoints and static files
- Maintains the intended architecture