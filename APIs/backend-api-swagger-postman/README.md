# Simple CRUD API

This is a simple CRUD API built with Node.js and Express. It allows you to create, read, update, and delete products. Includes swagger UI and a Postman collection.

## Features
- **Create**: Add a new product.
- **Read**: Retrieve all products or a single product.
- **Update**: Update an existing product.
- **Delete**: Remove a product.

## Setup
1. Clone the repository.
2. Run `npm install` to install the dependencies.
3. Start the server:
   - Production: `npm run serve`
   - Development: `npm run dev`

## API Endpoints

### Products
- `GET /api/products` - Retrieve all products.
- `GET /api/products/:id` - Retrieve a single product.
- `POST /api/products` - Create a new product.
- `PUT /api/products/:id` - Update an existing product.
- `DELETE /api/products/:id` - Delete a product.

## Postman
A Postman collection for testing the API is available in the [postman folder](postman/Simple%20CURD%20API.postman_collection.json) along with an environment file in [postman/environments](postman/environments/Beta.postman_environment.json).

## License
This project is licensed under the ISC License.