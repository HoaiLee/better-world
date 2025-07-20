# BetterWorld

## Overview

BetterWorld is a landing page

## Project Structure

This is a monorepo built with [Turborepo](https://turborepo.com/) and [pnpm](https://pnpm.io/) workspaces.

```
better-world/
├── apps/
│   ├── api/                 # Strapi CMS API
│   └── landing-page/       # Astro + Vue.js frontend
├── packages/               # Shared packages(Types/Components)
└── turbo.json             # Turborepo configuration
```

## Installation

### Requirements
- `Node.js` 20+ 
- `pnpm` 10.10.0+

1**Install dependencies:**
   ```bash
   pnpm install
   ```

   ```bash
   npm install turbo --global
   ```

2**Start the landing page and API:**
   ```bash
   pnpm run dev
   ```

## 🎨 Frontend Development

The landing page is built with Astro and Vue.js, featuring:

### Component Structure
```
src/components/
├── common/          # Shared components (buttons, inputs, etc.)
├── home/           # Home page specific components
│   ├── layout/     # Layout components
│   ├── section/    # Section components
│   └── testimonial/ # Testimonial components
└── stores/         # Pinia stores
```

## 🔒 Environment Configuration

### API Environment Variables
Create a `.env` file in `apps/api/`:

```env
# Database
DATABASE_CLIENT=sqlite
DATABASE_FILENAME=.tmp/data.db

# App Keys (generate secure keys for production)
APP_KEYS=your-app-keys-here
API_TOKEN_SALT=your-api-token-salt-here
ADMIN_JWT_SECRET=your-admin-jwt-secret-here
JWT_SECRET=your-jwt-secret-here

# Host
HOST=0.0.0.0
PORT=1337

# Environment
NODE_ENV=development
```

## 🚀 Deployment

### Build for Production

```bash
# Build all applications
pnpm build
```

### Development Guidelines

- Follow TypeScript best practices
- Use ESLint for code quality
- Write meaningful commit messages
- Test your changes thoroughly
- Update documentation as needed

## 📖 Documentation

- [API Setup Guide](apps/api/LOCAL_SETUP.md) - Detailed API setup instructions
- [Strapi Documentation](https://docs.strapi.io/) - CMS documentation
- [Astro Documentation](https://docs.astro.build/) - Frontend framework docs
- [Turborepo Documentation](https://turbo.build/repo/docs) - Monorepo build system

