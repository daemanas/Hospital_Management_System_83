# Akash Nursing Home Server

Node.js backend scaffold for the Akash Nursing Home management system.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy `.env` and update values.
3. Start the server:
   ```bash
   npm start
   ```

## Project Structure

- `src/app.js` - Express app configuration
- `src/server.js` - Server startup and environment loading
- `src/config/` - Configuration for database, cloudinary, and JWT
- `src/controllers/` - Route handlers and business logic
- `src/models/` - Mongoose schemas
- `src/routes/` - Express routers
- `src/middleware/` - Authentication, upload, and error handling
- `src/services/` - Email and cloudinary integrations
- `src/utils/` - Token generation, responses, and validators
