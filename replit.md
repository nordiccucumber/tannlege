# Replit.md - Tannlege Slåttebrekk Website

## Overview

This is a modern Norwegian dental practice website built with React/TypeScript frontend for static HTML export. The application serves as a professional website for Dr. Mai Solgunn Glasø Slåttebrekk's dental practice in Oslo, featuring Google Sheets integration for dynamic content management and contact forms. The website is designed to be deployed as static HTML to One.com or similar web hosting services.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight client-side routing)
- **Styling**: Tailwind CSS with custom brand colors (pink and green theme)
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **State Management**: TanStack Query for server state management
- **Forms**: React Hook Form with Zod validation
- **Build Tool**: Vite for development and production builds

### Data Architecture
- **Data Source**: Google Sheets CSV export
- **Dynamic Content**: Behandlinger, åpningstider, kontaktinfo
- **Content Management**: Google Sheets interface for easy updates
- **Data Fetching**: Client-side hooks with fallback to static content
- **No Backend**: Pure client-side static HTML application

### Development Setup
- **Hot Reload**: Vite dev server with HMR
- **Type Safety**: Shared TypeScript types between frontend and backend
- **Path Aliases**: Configured for clean imports (@/, @shared/, @assets/)

## Key Components

### Google Sheets Integration
Located in `client/src/config/googleSheets.ts` and `client/src/hooks/useGoogleSheets.ts`:
- **useBehandlinger**: Fetches treatment data from Google Sheets
- **useApningstider**: Fetches opening hours from Google Sheets
- **useKontaktInfo**: Fetches contact information from Google Sheets
- **Fallback Data**: Static fallback data when Google Sheets is unavailable
- **CSV Parsing**: Client-side CSV parsing for Google Sheets data

### Content Management
- **Google Sheets**: Primary content management system
- **No Database**: All dynamic content sourced from Google Sheets
- **Easy Updates**: Content can be updated directly in Google Sheets
- **Real-time Updates**: Changes reflect on website without redeployment

### Pages Structure
- **Home** (`/`) - Hero section with practice overview
- **About** (`/om-oss`) - Team information and credentials
- **Services** (`/tjenester`) - Dental services and pricing
- **Appointment** (`/bestill-time`) - Online appointment booking
- **Patient Info** (`/pasientinformasjon`) - Pre/post treatment information
- **Contact** (`/kontakt`) - Contact form and practice information
- **Tips** (`/tips`) - Dental health blog/tips section

### Static HTML Export
- **Build Process**: Vite builds to `dist/public` for static hosting
- **Deployment Target**: One.com web hosting service
- **Google Sheets**: Dynamic content without backend server
- **Contact Form**: FormSubmit.co for contact form handling
- **No Server**: Pure client-side application

## Data Flow

1. **User Interaction**: Users interact with React components
2. **Google Sheets Request**: Client-side hooks fetch data from Google Sheets CSV export
3. **Data Parsing**: CSV data parsed and converted to typed objects
4. **UI Update**: React components update with Google Sheets data
5. **Fallback**: Static fallback data displayed if Google Sheets unavailable
6. **Contact Form**: FormSubmit.co handles form submissions directly
7. **No Backend**: All processing happens in the browser

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React with extensive Radix UI component library
- **Styling**: Tailwind CSS with PostCSS processing
- **Icons**: Lucide React icon library
- **Date Handling**: date-fns for date formatting
- **Carousel**: Embla Carousel for image galleries

### Backend Dependencies
- **Database**: Neon PostgreSQL serverless database
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Validation**: Zod for schema validation
- **Session**: PostgreSQL session store

### Development Dependencies
- **Build**: Vite with React plugin
- **TypeScript**: Full TypeScript support across stack
- **Dev Tools**: Replit-specific development plugins

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React app to `dist/public`
2. **Backend Build**: esbuild bundles server code to `dist/index.js`
3. **Static Assets**: Frontend assets served from `dist/public`

### Production Configuration
- **Environment**: NODE_ENV=production
- **Database**: PostgreSQL via DATABASE_URL environment variable
- **Static Serving**: Express serves built frontend assets
- **API Routes**: All API endpoints prefixed with `/api`

### Development vs Production
- **Development**: Vite dev server with HMR, in-memory storage
- **Production**: Express serves static files, database persistence

## Deployment

### Current Build Setup
- **Frontend Build**: Vite builds React app to `dist/public`
- **Backend Build**: esbuild bundles server code to `dist/index.js`
- **Issue**: Static deployment expects files in `dist` but they're in `dist/public`

### Deployment Solutions
1. **Recommended**: Use "Autoscale" deployment type (supports full-stack Express app)
   - Change deployment type from "Static" to "Autoscale" in Replit settings
   - No additional configuration needed
   - Properly handles Express server and frontend serving

2. **Alternative**: Use `deploy-fix.js` script to move files from `dist/public` to `dist` for static deployment
   - Run: `npm run build && node deploy-fix.js`
   - Script moves files from `dist/public` to `dist` directory
   - Removes empty `dist/public` directory

### Files Added
- `client/src/config/googleSheets.ts` - Google Sheets configuration and utilities
- `client/src/hooks/useGoogleSheets.ts` - React hooks for Google Sheets data
- `static-build.js` - Build script for static HTML export
- `GOOGLE_SHEETS_GUIDE.md` - Complete guide for Google Sheets setup
- `STATIC_EXPORT_GUIDE.md` - Guide for static HTML deployment to One.com
- `deploy-fix.js` - Script to reorganize build files for static deployment
- `DEPLOYMENT.md` - Deployment instructions and troubleshooting guide

## Changelog

```
Changelog:
- July 10, 2025. Fixed deployment issues by correcting syntax errors in Google Sheets configuration file and applying deploy-fix.js script. Files successfully moved from dist/public to dist for static deployment compatibility.
- July 10, 2025. Konvertert til statisk HTML-export med Google Sheets-integrasjon. Lagt til Google Sheets hooks for behandlinger, åpningstider og kontaktinfo. Opprettet static-build.js script og komplett dokumentasjon for deployment til One.com.
- July 10, 2025. Added deployment fix for static deployment issues. Created deploy-fix.js script to move files from dist/public to dist. Added DEPLOYMENT.md with instructions.
- July 08, 2025. Cleaned up unused pages and backend components. Removed all unused routes, API endpoints, database schemas, and client-side code. Website now only contains home.tsx with static content and simplified architecture.
- July 08, 2025. Removed "Tjenester" and "Pasientinfo" tabs and pages. Reorganized navigation to "Om oss", "Behandlinger og priser", "Kontakt". Fixed "Generell info" styling in behandlinger section.
- July 07, 2025. Reverted navigation changes back to original Link-based structure
- July 06, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```