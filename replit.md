# SwasthyaConnect - HealthBridge Kerala

## Overview

SwasthyaConnect is a digital health records platform designed specifically for migrant workers in Kerala, India. The application addresses critical healthcare accessibility challenges by providing secure, multilingual, and portable health records that can be accessed through QR codes. The platform serves both healthcare providers and workers, enabling seamless medical history management across different healthcare facilities.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript for type safety and developer experience
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: Radix UI primitives with shadcn/ui component library for consistent, accessible design
- **Styling**: Tailwind CSS with custom CSS variables for theming and responsive design
- **State Management**: React Query (@tanstack/react-query) for server state management and caching
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework for REST API endpoints
- **Language**: TypeScript for full-stack type safety
- **Development**: tsx for TypeScript execution in development
- **Production Build**: esbuild for fast server-side bundling

### Data Storage Solutions
- **Database**: PostgreSQL configured through Drizzle ORM
- **ORM**: Drizzle ORM with Zod schema validation for type-safe database operations
- **Connection**: Neon Database serverless PostgreSQL for cloud deployment
- **Migrations**: Drizzle Kit for database schema management and migrations
- **Development Storage**: In-memory storage interface for development and testing

### Authentication and Authorization
- **Session Management**: PostgreSQL-based sessions using connect-pg-simple
- **Storage Interface**: Abstracted storage layer supporting both in-memory and database implementations
- **User Schema**: Basic user model with username/password authentication

### Application Structure
- **Monorepo**: Shared types and schemas between client and server in `/shared` directory
- **Component Organization**: Feature-based component structure with landing page sections
- **Styling System**: Custom CSS variables for consistent theming with light/dark mode support
- **Mobile-First**: Responsive design optimized for mobile devices with offline capabilities consideration

### Development Workflow
- **Type Safety**: Comprehensive TypeScript configuration across all layers
- **Code Quality**: Shared utilities and consistent import aliases
- **Hot Reload**: Vite HMR for rapid development iteration
- **Error Handling**: Runtime error overlay for development debugging

## External Dependencies

### UI and Design System
- **Radix UI**: Comprehensive set of accessible React components including dialogs, dropdowns, navigation, and form controls
- **Lucide React**: Icon library for consistent iconography
- **shadcn/ui**: Pre-built component library built on Radix UI primitives
- **Tailwind CSS**: Utility-first CSS framework with custom configuration

### Database and ORM
- **Neon Database**: Serverless PostgreSQL database service (@neondatabase/serverless)
- **Drizzle ORM**: Type-safe ORM with PostgreSQL dialect support
- **Drizzle Zod**: Integration for schema validation using Zod

### Development Tools
- **Vite**: Build tool with React plugin and development server
- **TypeScript**: Static type checking across the entire codebase
- **ESBuild**: Fast bundler for production server builds
- **PostCSS**: CSS processing with Tailwind CSS and Autoprefixer

### State Management and Data Fetching
- **React Query**: Server state management, caching, and synchronization
- **React Hook Form**: Form state management with Zod resolver integration
- **Wouter**: Lightweight routing library for React

### Fonts and External Assets
- **Google Fonts**: Inter, Architects Daughter, DM Sans, Fira Code, and Geist Mono
- **Font Awesome**: Icon library for UI elements
- **External Images**: Unsplash and Pixabay for placeholder images

### Development Environment
- **Replit Integration**: Custom plugins for development environment support
- **Runtime Error Modal**: Development debugging assistance
- **Cartographer**: Development tooling for Replit environment