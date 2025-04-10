# ⚙️ Zealthy Backend – API Server

This is the backend server for the **Zealthy Onboarding App**, built with **Node.js**, **Express.js**, and **Microsoft SQL Server**.

It powers user registration, a multi-step onboarding wizard, admin customization of onboarding components, and public access to user data for testing.

---

## ⚡ Features

- ✅ User registration and login with email/password
- 🔁 Multi-step onboarding (About Me, Address, Birthdate)
- 🧑‍💼 Admin control of which fields appear on Step 2 & Step 3
- 📊 A public table viewer for submitted data (`/data` route)
- 💾 SQL Server integration (not local storage)

---

## 🚀 Getting Started

### 📁 1. Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/your-username/zealthy-onboarding.git
cd zealthy-onboarding/zealthy-backend
``` 

### 📦 2. Install Dependencies

Install all required Node.js packages:

```bash
npm install
```

### 🔧 3. Configure SQL Server Connection

Edit your `index.js` file to provide the correct SQL credentials:

```js
const config = {
  user: 'your_sql_username',
  password: 'your_password',
  server: 'localhost', // or your SQL Server instance
  database: 'ZealthyDB',
  options: {
    encrypt: false,
    trustServerCertificate: true
  }
};


