# Backend Folder Structure

Below is the folder structure for the **Task Management System** project.

```bash
task-managing-app/
│
├── node_modules/
├── src/
│   ├── config/            # Configuration files (e.g., DB, Sentry)
│   ├── controllers/       # Business logic for API
│   ├── graphql/           # GraphQL schema and resolvers
│   ├── middleware/        # Custom middleware
│   ├── models/            # Mongoose models
│   ├── routes/            # REST and GraphQL API routes
│   ├── utils/             # Helper functions (e.g., JWT)
│   ├── app.js             # Express App setup
│   └── server.js          # Entry point
├── .env                   # Environment variables
├── package.json
└── README.md
```


### Explanation of Key Directories:

- **src/config/**: Contains configuration files for services such as database connections and Sentry.
- **src/controllers/**: Holds the business logic for handling API requests.
- **src/graphql/**: Contains the GraphQL schema and resolver logic for the API.
- **src/middleware/**: Stores custom middleware (e.g., authentication or logging).
- **src/models/**: Includes all Mongoose models for managing MongoDB collections.
- **src/routes/**: Defines routes for both REST and GraphQL endpoints.
- **src/utils/**: Utility functions such as token generation or data parsing.
- **app.js**: Initializes the Express application, middleware, and routes.
- **server.js**: The entry point that starts the Express server.

This structure ensures scalability, modularity, and clear separation of concerns, making it easy to maintain and extend.
