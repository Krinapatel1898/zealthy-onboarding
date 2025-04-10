# ⚙️ Zealthy Backend

This is the backend API server for the **Zealthy Onboarding App**, built using **Node.js**, **Express.js**, and **Microsoft SQL Server**.

It powers:
- ✅ User registration and login
- 🔄 Multi-step onboarding data flow
- 🧩 Admin control of which fields appear on Step 2 & Step 3
- 📊 A public table viewer for user data

---

## 🚀 Getting Started

### 📁 1. Clone the Repo

```bash
git clone https://github.com/your-username/zealthy-onboarding.git
cd zealthy-onboarding/zealthy-backend

### 📁 2. 📦 Install Dependencies

```bash
npm install

### 📁 3. 🔑 Configure SQL Server Connection
const config = {
  user: 'your_sql_username',
  password: 'your_password',
  server: 'localhost', // or your named instance
  database: 'ZealthyDB',
  options: {
    encrypt: false,
    trustServerCertificate: true,
  }
};


### 📁 4. ▶️ Start the Backend Server
node index.js

### 📁 5. 🧱 Folder Structure
zealthy-backend/
├── index.js          # Express.js API routes and DB logic
├── package.json      # Node dependencies
└── README.md         # Backend documentation

### 📁 6.🗃️ Database Overview
🧾 Tables:
    Users
    
    Id, Email, Password, AboutMe, Birthdate, StreetAddress, City, State, Zip
    
    AdminConfig
    
    Controls visibility and order of components like:
    
    about_me
    
    birthdate
    
    address


💡 Features
🔐 Login & signup API with email-based session

✅ Duplicate email check

📦 Persist Step 2 + Step 3 data in backend

🧩 Dynamic component configuration from admin

🗃 Public API to view all user data

