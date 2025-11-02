# 🍬 Sweet Shop Management System  
![Node.js](https://img.shields.io/badge/Backend-Node.js-green) 
![React](https://img.shields.io/badge/Frontend-React-blue)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-brightgreen)
![License](https://img.shields.io/badge/Status-Completed-success)

---

## 📘 Overview
The **Sweet Shop Management System** is a MERN-stack web application that automates sweet shop operations such as product management, inventory tracking, and user authentication.  
Developed as part of the **AI Kata Assessment**, it demonstrates end-to-end full-stack development using **MongoDB, Express, React, and Node.js**.

---

## 🎯 Objective
- Build an efficient and scalable web app for sweet shop management.  
- Provide secure login and registration for users.  
- Allow admins to manage sweets and inventory.  
- Allow customers to view and purchase sweets.  
- Demonstrate RESTful API integration between frontend and backend.

---

## ⚙️ Technologies Used
### 🖥️ **Frontend**
- React.js  
- Axios (for API communication)  
- HTML5, CSS3, JavaScript  

### 🧩 **Backend**
- Node.js  
- Express.js  
- MongoDB + Mongoose  
- JWT for authentication  
- bcrypt.js for password hashing  
- dotenv for environment configuration  

### 🧰 **Tools**
- Visual Studio Code  
- Postman  
- npm / Node Package Manager  
- Git & GitHub  

---

## 🧠 System Architecture
**Frontend (React.js)** ⇄ **Backend (Express.js + Node.js)** ⇄ **Database (MongoDB)**  

### 🔄 Flow Description
1. **User Registration/Login:** Frontend collects credentials → sends to backend → verifies → returns JWT token.  
2. **Admin Actions:** Add sweets, set prices, and manage stock.  
3. **Customer Actions:** View sweets, purchase items → stock updates automatically.  
4. **Database:** MongoDB stores users, sweets, and transactions.

---

## 🗂️ Folder Structure
SweetShopProject/
│
├── sweet-shop-backend/
│ ├── server.js
│ ├── models/
│ │ ├── User.js
│ │ └── Sweet.js
│ ├── routes/
│ │ ├── authRoutes.js
│ │ └── sweetRoutes.js
│ ├── middleware/
│ │ └── authMiddleware.js
│ ├── .env
│ ├── package.json
│
├── sweet-shop-frontend/
│ ├── src/
│ │ ├── api.js
│ │ ├── App.js
│ │ └── components/
│ │ ├── Register.js
│ │ ├── Login.js
│ │ ├── AddSweet.js
│ │ └── SweetsList.js
│ ├── package.json
│
└── README.md


---

## ✨ Features
- 🔐 User authentication using JWT  
- 🍭 Sweet management (add, view, search)  
- 🛒 Purchase sweets & auto-reduce quantity  
- 🗄️ MongoDB for persistent data storage  
- ⚡ Real-time frontend updates via REST API  

---

## ⚙️ Installation & Setup

### 1️⃣ Backend Setup
```bash
cd sweet-shop-backend
npm install
npx nodemon server.js

## 🧠 My AI Usage

### 🔹 Backend
Used ChatGPT to generate initial **Express.js boilerplate**, route structure, and explain step-by-step setup of **MongoDB connection** and **authentication logic**.  
All logic implementation, validation, testing, and integration were done manually.

### 🔹 Frontend
Used ChatGPT for guidance on creating **React components**, organizing the project structure, and integrating **Axios** for API communication.  
The component logic, UI layout, and state management were implemented manually based on the understanding gained from the explanations.
