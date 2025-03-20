# InfoSec Management API

## 📌 Project Overview

This is a **RESTful API** built with **Node.js**, **Express**, and **MySQL (Sequelize ORM)** for **Information Security Management**. The API supports **user authentication (JWT)** and **product management** functionalities.

## 🚀 Features

- User authentication with **JWT (JSON Web Token)**
- Secure password hashing using **bcryptjs**
- CRUD operations for **products**
- Protected routes using **middleware**
- Database integration with **Sequelize ORM**

## 📂 Project Structure
## Installation
### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [MySQL](https://www.mysql.com/)

## ⚡ Installation & Setup

### 1️⃣ Clone the Repository

### 2️⃣ Install Dependencies

### 3️⃣ Configure Environment Variables

Create a `.env` file in the project root and add:

### 4️⃣ Run Database Migrations (Sequelize)

### 5️⃣ Start the Server

The API will be running at `http://localhost:5000`

## 📌 API Endpoints

### 🛡️ Authentication

| Method | Endpoint            | Description                 |
| ------ | ------------------- | --------------------------- |
| POST   | `/api/users/signup` | Register a new user         |
| POST   | `/api/users/login`  | Authenticate user & get JWT |

### 🛒 Product Management

| Method | Endpoint            | Description                      |
| ------ | ------------------- | -------------------------------- |
| POST   | `/api/products`     | Create a new product (Protected) |
| GET    | `/api/products`     | Get all products                 |
| GET    | `/api/products/:id` | Get a single product by ID       |
| PUT    | `/api/products/:id` | Update a product (Protected)     |
| DELETE | `/api/products/:id` | Delete a product (Protected)     |

🔒 **Protected routes require sending a JWT token in the ****`Authorization`**** header:**

## 📜 License

This project is licensed under the **MIT License**.

## 👨‍💻 Contributing

Pull requests are welcome! Feel free to open an issue if you find a bug or have a feature request.

## 🌟 Acknowledgments

- Built with **Node.js, Express, and Sequelize**
- Inspired by best security practices in **API development**

---

🔗 **GitHub Repository**: [Repository](https://github.com/m7amh/info-sec-mgmt-api)
---
## Author
**m7amh**  
GitHub: [mohamed abdelrahman](https://github.com/m7amh/info-sec-mgmt-api/edit/main/README.md)


