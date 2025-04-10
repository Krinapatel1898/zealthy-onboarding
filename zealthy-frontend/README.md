# 🖼️ Zealthy Frontend – Onboarding UI

This is the **React + Tailwind CSS** frontend for the Zealthy onboarding portal. It guides users through a dynamic onboarding experience across multiple steps, styled with a clean and modern UI.

---

## ✨ Features

- ⚙️ Configurable multi-step onboarding flow (Step 1 → Step 2 → Step 3)
- 📄 Admin can configure which components show on which page
- 🔐 Login + Create Account screen with email/password
- 📊 Public `/data` view of all submitted users
- 🎨 Fully styled with **Tailwind CSS**
- Responsive and optimized for desktop

---

## 🧩 Technologies Used

- **React**
- **React Router**
- **Axios**
- **Tailwind CSS**
- Optional: GitHub Actions / Layout Components

---

## 🔧 Project Structure
zealthy-frontend/ ├── public/ │ └── index.html │ ├── src/ │ ├── pages/ │ │ ├── Step1EmailPassword.js # Create / Login page │ │ ├── Step2Details.js # Page 2: About Me / Birthdate / Address │ │ ├── Step3Details.js # Page 3: Final info │ │ ├── AdminConfig.js # Admin controls │ │ ├── DataTable.js # Public user viewer │ │ └── Success.js # Final confirmation screen │ │ │ ├── components/ │ │ └── Layout.js # Shared top nav / wrapper │ │ ├── App.js # Router config │ ├── index.js # Entry point │ └── index.css # Tailwind base + custom styles │ ├── package.json └── tailwind.config.js
