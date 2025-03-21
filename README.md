# Info Security Management API

## 🚀 Overview
This project is a **RESTful API** designed for managing users and products with robust authentication and authorization mechanisms. It is built using **Node.js, Express, Sequelize, and MySQL** with industry-standard security best practices.

## 🌟 Features
- **User Authentication**: Register and login using **JWT authentication**.
- **Product Management**: Perform CRUD operations on products with protected routes.
- **Database Integration**: Uses **MySQL** with Sequelize ORM.
- **Security Best Practices**: Implements **hashed passwords** and **JWT-based authentication**.
- **Middleware Protection**: Ensures only authorized users can access protected routes.
- **Scalability & Maintainability**: Well-structured project architecture for easy expansion.

## 🛠 Tech Stack
- **Backend**: Node.js, Express.js
- **Database**: MySQL, Sequelize ORM
- **Authentication**: JWT, bcryptjs
- **Environment Configuration**: dotenv

## 📂 Project Structure
```
├── config/            # Database configuration
├── models/            # Sequelize models (User, Product)
├── middleware/        # Authentication middleware
├── routes/            # API route handlers
├── controllers/       # Business logic for users & products
├── utils/             # Helper functions (e.g., password hashing)
├── app.js             # Main entry point of the application
├── .env               # Environment variables
└── README.md          # Project documentation
```

## ⚡ Installation & Setup
### 1️⃣ Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [MySQL](https://www.mysql.com/)

### 2️⃣ Clone the Repository
```sh
git clone https://github.com/your-username/info-sec-mgmt-api.git
cd info-sec-mgmt-api
```

### 3️⃣ Install Dependencies
```sh
npm install
```

### 4️⃣ Configure Environment Variables
Create a `.env` file in the project root and add:
```env
DB_NAME=your_database_name
DB_USER=your_database_user
DB_PASS=your_database_password
DB_HOST=localhost
JWT_SECRET=your_secret_key
PORT=5000
```

### 5️⃣ Run Database Migrations (Sequelize)
```sh
npx sequelize-cli db:migrate
```

### 6️⃣ Start the Server
```sh
npm start
```
The API will be running at `http://localhost:5000`

## 📌 API Endpoints
### 🛡️ Authentication
| Method | Endpoint       | Description          |
|--------|--------------|----------------------|
| POST   | `/api/users/signup` | Register a new user |
| POST   | `/api/users/login`  | Authenticate user & get JWT |

### 🛒 Product Management
| Method | Endpoint         | Description           |
|--------|-----------------|-----------------------|
| POST   | `/api/products`  | Create a new product (Protected) |
| GET    | `/api/products`  | Get all products |
| GET    | `/api/products/:id` | Get a single product by ID |
| PUT    | `/api/products/:id` | Update a product (Protected) |
| DELETE | `/api/products/:id` | Delete a product (Protected) |

🔒 **Protected routes require sending a JWT token in the `Authorization` header:**
```
Authorization: Bearer <your_token>
```

## 🔥 Example API Requests
### 🔹 User Signup (Register)
```sh
curl -X POST http://localhost:5000/api/users/signup \
     -H "Content-Type: application/json" \
     -d '{"name": "John Doe", "username": "johndoe", "password": "securepassword"}'
```

### 🔹 User Login
```sh
curl -X POST http://localhost:5000/api/users/login \
     -H "Content-Type: application/json" \
     -d '{"username": "johndoe", "password": "securepassword"}'
```

### 🔹 Get Products (Requires Auth)
```sh
curl -X GET http://localhost:5000/api/products \
     -H "Authorization: Bearer <your_token>"
```

## 🔐 Security Measures
- Passwords are **hashed** using `bcryptjs`.
- API routes are **protected** using **JWT authentication**.
- Environment variables are stored securely using `.env`.
- Uses **middleware** to enforce authentication on protected routes.

## 📜 License
This project is licensed under the **MIT License**.

## 🤝 Contributing
Pull requests are welcome! Feel free to open an issue if you find a bug or have a feature request.

## 📢 Contact
- **Author:** Mohamed Abdelrahman  
- **GitHub:** [Mohamed Abdelrahman](https:/m7amh/github.com/m7amh)

---
🔗 **GitHub Repository**: [Repo Lin](https://github.com/m7amh/info-sec-mgmt-api)

