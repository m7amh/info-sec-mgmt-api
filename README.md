# Info Security Management API

## Overview
This project is a **RESTful API** for managing users and products with authentication and authorization mechanisms using **Node.js, Express, Sequelize, and MySQL**.

## Features
- **User Authentication**: Register and login using **JWT authentication**.
- **Product Management**: CRUD operations on products with protected routes.
- **Database Integration**: Uses **MySQL** with Sequelize ORM.
- **Security Best Practices**: Implements **hashed passwords** and **JWT-based authentication**.

## Tech Stack
- **Backend**: Node.js, Express.js
- **Database**: MySQL, Sequelize
- **Authentication**: JWT, bcryptjs
- **Environment Configuration**: dotenv

## Installation
### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [MySQL](https://www.mysql.com/)

### Steps
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/info-sec-mgmt-api.git
   cd info-sec-mgmt-api
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file and add:
   ```env
   DB_NAME=your_database_name
   DB_USER=your_database_user
   DB_PASS=your_database_password
   DB_HOST=localhost
   JWT_SECRET=your_secret_key
   PORT=5000
   ```
4. Start the MySQL server and create the database if not already created.
5. Run the server:
   ```sh
   npm start
   ```

## API Endpoints
### User Routes
| Method | Endpoint       | Description         |
|--------|--------------|---------------------|
| POST   | `/api/users/signup` | Register a new user |
| POST   | `/api/users/login`  | Login and get a token |

### Product Routes (Protected)
| Method | Endpoint         | Description          |
|--------|----------------|----------------------|
| POST   | `/api/products`  | Add a new product (Requires Auth) |
| GET    | `/api/products`  | Get all products |
| GET    | `/api/products/:pid` | Get a specific product |
| PUT    | `/api/products/:pid` | Update a product (Requires Auth) |
| DELETE | `/api/products/:pid` | Delete a product (Requires Auth) |

## Security Measures
- Passwords are **hashed** using `bcryptjs`.
- API routes are **protected** using **JWT authentication**.
- Environment variables are stored securely using `.env`.

## License
This project is licensed under the MIT License.

## Author
**Your Name**  
GitHub: [your-username](https://github.com/your-username)

