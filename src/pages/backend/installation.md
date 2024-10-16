# Backend Installation

Follow the steps below to set up and run the backend of the task management system.

### 1. Initialize a Node.js project

Begin by initializing a new Node.js project in your desired directory:

```bash
npm init -y
```

### 2. Install necessary dependencies

install the following dependencies required for building the backend of the project:

```bash
npm install express
mongoose
graphql
express-graphql
jsonwebtoken
bcryptjs
express-rate-limit
mongoose-paginate
multer
express-validator
swagger-jsdoc
swagger-ui-express
@sentry/node dotenv
```

### 3. Install development dependencies

install the following dependencies required for building the backend of the project:

```bash
npm install --save-dev jest supertest
```

### 4. Install Socket.io
If your project involves real-time features like notifications, install Socket.io:

```bash
npm install socket.io
```

### 5. Configure environment variables
Make sure to create a `.env` file to store your sensitive data (e.g., database connection strings, JWT secrets). Example:

```bash
PORT=3000
MONGO_URI=mongodb://localhost:27017/task-managing-db
JWT_SECRET=your_jwt_secret
SENTRY_DSN=your_sentry_dsn
```


With these steps, the backend setup of your task management system is ready for development.

```bash
This section covers initializing the project, installing necessary dependencies, and configuring the environment variables.
```
