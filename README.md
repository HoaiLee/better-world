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
│       ├── src/
│       │   ├── components/ # Vue components
│       │   ├── pages/      # Astro pages
│       │   └── stores/     # Pinia state management
│       └── public/         # Static assets
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

2**Start the landing page:**
   ```bash
   pnpm run dev
   ```

## 🎨 Frontend Development

The landing page is built with Astro and Vue.js, featuring:

- **Responsive Design** - Mobile-first approach
- **Component Architecture** - Reusable Vue components
- **State Management** - Pinia for global state
- **Styling** - Tailwind CSS for utility-first styling
- **TypeScript** - Full type safety

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

### Production Considerations

1. **Database:** Use PostgreSQL or MySQL for production
2. **Environment Variables:** Generate secure keys and secrets
3. **File Storage:** Configure cloud storage for uploads
4. **CORS:** Configure proper CORS settings
5. **SSL:** Enable HTTPS in production

### Build for Production

```bash
# Build all applications
pnpm build

# The built applications will be in:
# - apps/api/dist/ (Strapi)
# - apps/landing-page/dist/ (Astro)
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

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

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues:

1. Check the [documentation](apps/api/LOCAL_SETUP.md)
2. Review the troubleshooting section
3. Create an issue with detailed information about the problem

## 🌟 Features

- **Modern Tech Stack** - Built with the latest web technologies
- **Type Safety** - Full TypeScript support across the stack
- **Developer Experience** - Hot reload, linting, and type checking
- **Scalable Architecture** - Monorepo structure for easy scaling
- **Content Management** - Powerful CMS with REST API
- **Responsive Design** - Mobile-first approach
- **Performance Optimized** - Fast builds and runtime performance

---

Built with ❤️ for a better world.
