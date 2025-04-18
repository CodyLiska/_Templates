# Node.js Boilerplate

This is a boilerplate for building a Node.js API with Express.js. It includes a simple set of routes and controllers for a basic CRUD (Create, Read, Update, Delete) operation.

## [ FRONTEND ] Getting Started

- **Project Structure:**
- `my-frontend/`
  - `pages/` # Your routes are files in this directory
    - `index.js` # The homepage route
  - `components/` # Reusable React components
    - `UserList.js`
    - `UserForm.js`
  - `public/` # Static assets (images, fonts)
    - `styles/` # CSS modules or global stylesheets

To get started, follow these steps:

- `cd nodejs-boilerplate-frontend`
- `npm start`

## [ BACKEND ] Getting Started

To get started, follow these steps:

1. Install the dependencies:

```bash
npm install
```

3. Start the server:

```bash
# start the server
node src/server.js
```

## Understanding the Code

### The code is organized into several key components:

- Controllers: The original code within the app.get, app.post, etc., blocks has been moved into controller functions (e.g., userController.post). Each function handles a specific API action. I've used an object literal to hold these functions for better organization and potential future expansion.
  
- Routes: The routes are now defined in userRoutes.js. Each route maps an HTTP method and URL path to the corresponding controller function. This separates routing logic from the actual handling of requests. I created a separate rootController for the / endpoint.
  
- App File: The app.js file now contains the Express application setup, middleware (JSON parsing), and route mounting. It's responsible for initializing the API.
  
- Server File: The server.js file is solely responsible for starting the server and listening on a specific port.
  
- Error Handling: The error handling middleware remains in app.js.
  
- **Project Structure:**
  - `api/`
    - `src/`
      - `controllers/`
        - `rootController.js`
        - `userController.js`
      - `routes/`
        - `userRoutes.js`
      - `models/`
        - `User.js`
      - `app.js`
      - `server.js`
    - `package.json`