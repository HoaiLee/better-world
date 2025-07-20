const fs = require('fs');
const path = require('path');

// Create .tmp directory if it doesn't exist
const tmpDir = path.join(__dirname, '..', '.tmp');
if (!fs.existsSync(tmpDir)) {
  fs.mkdirSync(tmpDir, { recursive: true });
  console.log('Created .tmp directory');
}

// Create a basic .env file if it doesn't exist
const envPath = path.join(__dirname, '..', '.env');
if (!fs.existsSync(envPath)) {
  const envContent = `# Database
DATABASE_CLIENT=sqlite
DATABASE_FILENAME=.tmp/data.db

# App Keys
APP_KEYS=your-app-keys-here
API_TOKEN_SALT=your-api-token-salt-here
ADMIN_JWT_SECRET=your-admin-jwt-secret-here
JWT_SECRET=your-jwt-secret-here

# Transfer
TRANSFER_TOKEN_SALT=your-transfer-token-salt-here

# Security
ADMIN_JWT_SECRET=your-admin-jwt-secret-here
JWT_SECRET=your-jwt-secret-here

# API
API_TOKEN_SALT=your-api-token-salt-here
TRANSFER_TOKEN_SALT=your-transfer-token-salt-here

# App Keys
APP_KEYS=your-app-keys-here

# Host
HOST=0.0.0.0
PORT=1337

# Environment
NODE_ENV=development
`;

  fs.writeFileSync(envPath, envContent);
  console.log('Created .env file with local database configuration');
}

console.log('Local database setup complete!');
console.log('Next steps:');
console.log('1. Run: npm run develop');
console.log('2. The database will be automatically created at .tmp/data.db');
console.log('3. Access the admin panel at http://localhost:1337/admin'); 