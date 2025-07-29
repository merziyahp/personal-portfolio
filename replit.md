# Portfolio Website - Merziyah Poonawala

## Overview

This is a modern, full-stack portfolio website built for Merziyah Poonawala, a Senior Product Manager. The application features a React frontend with a Node.js/Express backend, using PostgreSQL for data storage and styled with Tailwind CSS and shadcn/ui components.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query (React Query) for server state
- **Routing**: Wouter for client-side routing
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js with ESM modules
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Development**: tsx for TypeScript execution in development

### Project Structure
- `client/` - Frontend React application
- `server/` - Backend Express API
- `shared/` - Shared TypeScript schemas and types
- `migrations/` - Database migration files

## Key Components

### Frontend Components
- **Navigation**: Fixed navigation bar with smooth scrolling
- **Hero Section**: Professional introduction with profile photo placeholder
- **About Section**: Personal description and product principles
- **Career Highlights**: Statistics and achievements display
- **Case Studies**: Portfolio work showcase with cards
- **Skills Section**: Technical and soft skills categorization
- **Personal Interests**: Hobbies and interests display
- **Contact Form**: Contact form with validation and submission
- **Footer**: Social links and branding

### Backend API Endpoints
- `POST /api/contact` - Contact form submission
- `GET /api/contacts` - Retrieve all contacts (admin)
- `GET /api/portfolio/:section` - Get specific portfolio section content
- `GET /api/portfolio` - Get all portfolio content

### Database Schema
- **contacts** table - Contact form submissions
- **portfolio_content** table - Dynamic portfolio content management

## Data Flow

1. **Content Loading**: Portfolio data is fetched from the backend API on page load
2. **Contact Form**: Form submissions are validated client-side and sent to the backend
3. **Error Handling**: Graceful error handling with toast notifications
4. **Loading States**: Loading indicators during data fetching

### Storage Strategy
The application uses a flexible storage interface (`IStorage`) that currently implements in-memory storage (`MemStorage`) but is designed to easily switch to database storage. The storage layer manages:
- Contact form submissions
- Portfolio content by section (hero, about, highlights, skills, etc.)

## External Dependencies

### Frontend Dependencies
- **UI Framework**: Radix UI primitives with shadcn/ui components
- **Icons**: Lucide React icons
- **Forms**: React Hook Form with Zod validation
- **HTTP Client**: Fetch API with TanStack Query
- **Date Handling**: date-fns
- **Styling**: Tailwind CSS with class-variance-authority

### Backend Dependencies
- **Database**: Neon Database (PostgreSQL) with Drizzle ORM
- **Validation**: Zod for schema validation
- **Session Management**: PostgreSQL session store ready (connect-pg-simple)

### Development Dependencies
- **Build Tools**: Vite, esbuild for production builds
- **TypeScript**: Full TypeScript support across the stack
- **Development**: Hot reload with Vite middleware

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds the React app to `dist/public`
2. **Backend Build**: esbuild bundles the Express server to `dist/index.js`
3. **Database**: Drizzle migrations handle database schema updates

### Environment Configuration
- **Development**: Uses tsx for TypeScript execution with Vite middleware
- **Production**: Serves built static files from Express server
- **Database**: Requires `DATABASE_URL` environment variable

### Scripts
- `npm run dev` - Development server with hot reload
- `npm run build` - Production build
- `npm run start` - Production server
- `npm run db:push` - Push database schema changes

The application is designed for easy deployment to platforms like Replit, with proper error handling, logging, and development tooling integrated throughout the stack.