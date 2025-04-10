# 🛠️ Zealthy Backend – API Server

This is the backend server for the **Zealthy Onboarding App**, built with **Node.js**, **Express.js**, and **Microsoft SQL Server**.

It powers user registration, a multi-step onboarding wizard, admin customization of onboarding components, and public access to user data for testing.

---

## ⚡ Features

- ✅ User registration and login with email/password
- 🔄 Multi-step onboarding (About Me, Address, Birthdate)
- 🧑‍💼 Admin control of which fields appear on Step 2 & Step 3
- 📊 A public table viewer for submitted data (`/data` route)
- 🗃️ SQL Server integration (not local storage)

---

## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/zealthy-onboarding.git
cd zealthy-onboarding/zealthy-backend
