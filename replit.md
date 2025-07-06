# Replit.md - Tannlege Slåttebrekk Website

## Overview

This is a modern Norwegian dental practice website built with React/TypeScript frontend and Node.js/Express backend. The application serves as a professional website for Dr. Mai Solgunn Glasø Slåttebrekk's dental practice in Oslo, featuring appointment booking, contact forms, and informational content about dental services.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight client-side routing)
- **Styling**: Tailwind CSS with custom brand colors (pink and green theme)
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **State Management**: TanStack Query for server state management
- **Forms**: React Hook Form with Zod validation
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (@neondatabase/serverless)
- **Session Management**: PostgreSQL session store (connect-pg-simple)
- **API Design**: RESTful JSON API

### Development Setup
- **Hot Reload**: Vite dev server with HMR
- **Type Safety**: Shared TypeScript types between frontend and backend
- **Path Aliases**: Configured for clean imports (@/, @shared/, @assets/)

## Key Components

### Database Schema
Located in `shared/schema.ts`:
- **users**: Basic user management (id, username, password)
- **appointments**: Appointment booking system with patient details and preferences
- **contactMessages**: Contact form submissions
- **Validation**: Zod schemas for type-safe data validation

### API Endpoints
- `POST /api/appointments` - Create new appointment booking
- `GET /api/appointments` - Retrieve appointments (admin)
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Retrieve contact messages (admin)

### Pages Structure
- **Home** (`/`) - Hero section with practice overview
- **About** (`/om-oss`) - Team information and credentials
- **Services** (`/tjenester`) - Dental services and pricing
- **Appointment** (`/bestill-time`) - Online appointment booking
- **Patient Info** (`/pasientinformasjon`) - Pre/post treatment information
- **Contact** (`/kontakt`) - Contact form and practice information
- **Tips** (`/tips`) - Dental health blog/tips section

### Storage Implementation
- **Interface**: `IStorage` abstraction for data operations
- **Current**: `MemStorage` in-memory implementation for development
- **Production**: Designed to be replaced with Drizzle ORM database implementation

## Data Flow

1. **User Interaction**: Users interact with React components
2. **Form Submission**: React Hook Form validates with Zod schemas
3. **API Request**: TanStack Query sends HTTP requests to Express endpoints
4. **Data Validation**: Server validates input using shared Zod schemas
5. **Storage**: Data persisted through storage interface
6. **Response**: JSON responses sent back to frontend
7. **UI Update**: React components update based on response

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

## Changelog

```
Changelog:
- July 06, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```