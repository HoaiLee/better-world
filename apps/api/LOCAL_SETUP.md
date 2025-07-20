# Local Database Setup for BetterWorld API

This guide will help you set up a local database for the BetterWorld Strapi API.

## Prerequisites

- Node.js (version 18 or higher)
- npm or pnpm

## Quick Setup

1. **Install dependencies:**
   ```bash
   cd apps/api
   npm install
   ```

2. **Setup local database:**
   ```bash
   npm run setup:local
   ```

3. **Start the development server:**
   ```bash
   npm run develop
   ```

4. **Access the admin panel:**
   - Open your browser and go to: http://localhost:1337/admin
   - Create your first admin user account

5. **Setup public permissions:**
   ```bash
   npm run setup:permissions
   ```
   Then follow the instructions to enable public access to the API endpoints

## Database Configuration

The local setup uses SQLite as the database, which is perfect for development. The database file will be created at `.tmp/data.db`.

### Environment Variables

The setup script creates a `.env` file with the following configuration:

```env
# Database
DATABASE_CLIENT=sqlite
DATABASE_FILENAME=.tmp/data.db

# App Keys (you should generate secure keys for production)
APP_KEYS=your-app-keys-here
API_TOKEN_SALT=your-api-token-salt-here
ADMIN_JWT_SECRET=your-admin-jwt-secret-here
JWT_SECRET=your-jwt-secret-here

# Transfer
TRANSFER_TOKEN_SALT=your-transfer-token-salt-here

# Host
HOST=0.0.0.0
PORT=1337

# Environment
NODE_ENV=development
```

## Content Types

The API includes three main content types:

### 1. Speaker
```typescript
type Speaker = {
  name: string;
  bio: string | null;
  photo: string | null;
}
```

### 2. Testimonial
```typescript
type Testimonial = {
  quote: string;
  author_name: string;
  order: number;
}
```

### 3. Webinar
```typescript
type Webinar = {
  title: string;
  description: string;
  date: string;
  time: string;
  badge_text: string;
}
```

## Sample Data

The `data/data.json` file contains comprehensive sample data for all three content types:

- **5 Speakers** with detailed bios and photos
- **8 Testimonials** from satisfied users
- **6 Webinars** with upcoming dates and descriptions

## API Endpoints

Once the server is running, you can access the following endpoints:

- **Speakers:** `GET /api/speakers`
- **Testimonials:** `GET /api/testimonials`
- **Webinars:** `GET /api/webinars`
- **Global:** `GET /api/global`

### Testing the API

After setting up permissions, you can test the API endpoints:

```bash
# Test speakers endpoint
curl http://localhost:1337/api/speakers

# Test testimonials endpoint
curl http://localhost:1337/api/testimonials

# Test webinars endpoint
curl http://localhost:1337/api/webinars

# Test global endpoint
curl http://localhost:1337/api/global
```

## Development Workflow

1. **Start development server:**
   ```bash
   npm run develop
   ```

2. **Make changes to content types** in `src/api/[content-type]/content-types/[content-type]/schema.json`

3. **Update sample data** in `data/data.json`

4. **Seed the database** (if needed):
   ```bash
   npm run seed:example
   ```

## Troubleshooting

### Database Issues
- If you encounter database errors, delete the `.tmp` folder and restart the server
- The database will be recreated automatically

### Port Issues
- If port 1337 is in use, change the `PORT` in your `.env` file

### Content Type Errors
- After creating new content types, restart the development server
- The TypeScript types will be regenerated automatically

## Production Considerations

For production deployment:
- Use a production database (PostgreSQL, MySQL)
- Generate secure app keys and secrets
- Set `NODE_ENV=production`
- Configure proper CORS settings
- Set up proper file upload storage

## File Structure

```
apps/api/
├── config/
│   └── database.ts          # Database configuration
├── data/
│   └── data.json           # Sample data
├── src/
│   └── api/
│       ├── speaker/        # Speaker content type
│       ├── testimonial/    # Testimonial content type
│       └── webinar/        # Webinar content type
├── scripts/
│   ├── setup-local-db.js   # Local setup script
│   └── seed.js            # Data seeding script
└── .env                    # Environment variables
``` 