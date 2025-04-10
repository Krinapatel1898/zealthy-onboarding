# zealthy-onboarding
# 👩‍💻 Zealthy Onboarding Flow App

This is a full-stack onboarding wizard application built with **React**, **Node.js**, and **Microsoft SQL Server**. It allows users to register, fill out customizable onboarding steps, and view or configure onboarding data through a modern UI.

# Zealthy-onboarding Live-Demo link
- https://youtu.be/DG68wVnJDDA

## 📁 Project Folder Structure

<pre lang="markdown">
zealthy-onboarding/
├── zealthy-backend/              # Express.js backend server
│   ├── index.js                  # Main backend server file (API routes)
│   ├── package.json              # Backend dependencies
│   └── README.md                 # Backend instructions
├── zealthy-frontend/             # React frontend with Tailwind CSS
│   ├── public/                   # Static assets and index.html
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Step1EmailPassword.js # Page 1: Login/Signup
│   │   │   ├── Step2Details.js       # Page 2: About Me / Birthdate
│   │   │   ├── Step3Details.js       # Page 3: Address or More
│   │   │   ├── AdminConfig.js        # Admin component manager
│   │   │   ├── DataTable.js          # View user data submissions
│   │   │   └── Success.js            # Final confirmation page
│   │   ├── components/
│   │   │   └── Layout.js             # Reusable layout (optional)
│   │   ├── App.js                    # Main router setup
│   │   ├── index.js                  # React entry point
│   │   └── index.css                 # Tailwind base styles
│   ├── package.json                 # Frontend dependencies
│   └── tailwind.config.js          # Tailwind config
├── database/
│   └── zealthy_database.sql        # SQL script to create Users/AdminConfig
└── README.md                       # You're reading it!
</pre>



<img width="930" alt="image" src="https://github.com/user-attachments/assets/ff733d71-dee4-4c9c-bd01-d31ecc847b89" />



