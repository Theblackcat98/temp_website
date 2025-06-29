# HydroVert - Vertical Farming Platform

## Overview

HydroVert is a modern full-stack web application showcasing vertical farming technology and hydroponic systems. Built with a React frontend and Express backend, it serves as a marketing platform for premium vertical cultivation panels designed for sustainability, efficiency, and scalability.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: 
  - Tailwind CSS for utility-first styling
  - Shadcn/ui components for consistent UI elements
  - Custom CSS variables for brand theming (HydroVert teal colors)
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database**: 
  - Drizzle ORM configured for PostgreSQL
  - Neon Database serverless connection
  - In-memory storage fallback for development
- **Session Management**: PostgreSQL session store with connect-pg-simple

### Development Setup
- **Development Server**: Vite dev server with HMR
- **Type Checking**: TypeScript strict mode enabled
- **Path Aliases**: Configured for clean imports (@, @shared, @assets)

## Key Components

### Frontend Components
1. **Navigation**: Fixed header with smooth scrolling navigation
2. **HeroSection**: Landing area with background imagery and CTA
3. **ProductShowcase**: Feature highlights with interactive cards
4. **ComparisonTool**: Side-by-side comparison of HydroVert vs traditional systems
5. **BenefitsSection**: Three-pillar value proposition (Sustainable, Efficient, Health & Wellness)
6. **TargetMarkets**: Market segments visualization
7. **CTASection**: Email capture form with luxury styling
8. **Footer**: Brand information and contact details

### UI Components
- Complete Shadcn/ui component library integration
- Radix UI primitives for accessibility
- Custom animations and glass effects
- Responsive design patterns

### Backend Structure
- **Routes**: RESTful API structure (currently minimal)
- **Storage**: Abstract storage interface with memory and database implementations
- **Middleware**: Request logging and error handling
- **Development**: Vite integration for SSR-ready setup

## Data Flow

### Client-Server Communication
- TanStack Query manages API calls and caching
- RESTful endpoints prefixed with `/api`
- JSON-based request/response format
- Credential-based authentication ready

### Database Schema
- **Users Table**: Basic user management with username/password
- **Drizzle Integration**: Type-safe database operations
- **Zod Validation**: Schema validation for data integrity

### State Management
- Server state via TanStack Query
- Local component state with React hooks
- Form state management ready for integration

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React, Radix UI components
- **Styling**: Tailwind CSS, class-variance-authority
- **Data Fetching**: TanStack React Query
- **Utilities**: date-fns, clsx, lucide-react icons
- **Development**: Vite plugins for Replit integration

### Backend Dependencies
- **Database**: Drizzle ORM, @neondatabase/serverless
- **Session**: express-session, connect-pg-simple
- **Validation**: Zod for schema validation
- **Development**: tsx for TypeScript execution

### Development Tools
- **Build**: esbuild for production bundling
- **Type Checking**: TypeScript compiler
- **Database**: Drizzle Kit for migrations
- **Linting**: ESLint ready configuration

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds optimized static assets
2. **Backend Build**: esbuild bundles server code with external packages
3. **Output**: Distributed files in `dist/` directory

### Production Setup
- **Environment**: NODE_ENV=production
- **Database**: PostgreSQL via DATABASE_URL environment variable
- **Static Files**: Express serves built frontend assets
- **Process**: Single Node.js process serving both API and static content

### Development Workflow
- **Hot Reload**: Vite HMR for frontend changes
- **TypeScript**: Live compilation with tsx
- **Database**: Drizzle push for schema updates
- **Logging**: Request/response logging for API endpoints

## Changelog

```
Changelog:
- June 29, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```