# 🧮 Product Management App

This is a small web application for registering, editing, and deleting products by name, price, and amount. It uses a mock backend with `json-server` and features modular code structure with alerts via SweetAlert2.

---

## 🗂️ Project Structure

TRAINING-W3-M3/
├── public/ # Public static files
├── src/ # Source code
│ ├── scripts/ # JavaScript scripts
│ │ ├── main.js # Main entry script
│ │ ├── methods.js # Reusable functions (API calls)
│ │ ├── product.js # Product logic/utilities
│ │ ├── validate.js # Input validation
│ │ └── alerts.js # SweetAlert2 alerts
│ └── styles/
│ └── style.css # CSS styles
├── .gitignore # Git ignore rules
├── database.json # Mock database JSON
├── index.html # Main HTML page
├── package-lock.json # npm lock file
└── package.json # npm config

---

## 🧾 Description

This app was built using HTML, CSS, and JavaScript (with modules). It allows users to perform CRUD operations on a list of products using a fake REST API (`json-server`).

---

## ✅ Features

- 🧾 Add, edit, delete products
- 🔒 Validations for empty/invalid inputs
- ⚠️ SweetAlert2 feedback messages
- 🔁 Dynamic DOM rendering of product cards
- 📦 Product storage via `json-server`
- 📱 Responsive UI with Flexbox

---

## 🛠️ Technologies

- HTML5
- CSS3 (Flexbox, shadows, gradients)
- Vanilla JavaScript (DOM, fetch API, ES Modules)
- SweetAlert2
- json-server

---

## 🚀 How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/your-user/your-repo.git
Install dependencies:

bash
Copiar
Editar
npm install
Start the mock server:

bash
Copiar
Editar
npx json-server --watch database.json
Open index.html in your browser

🔐 License
For educational use only. Not licensed for production.

🧠 Learning Topics
Modular JS and separation of concerns

Input validation and error handling

Dynamic rendering with JS

SweetAlert2 integration

Responsive design with media queries

👨‍💻 Author
Coder: Isai David Ariza Cantillo
Email: isaistudio1.1@hotmail.com
Clan: Sierra
Training: Week 3, Module 3 – RIWI 2025
---