# 🧮 Product Management App - Training Week 3 Module 3 (RIWI)  
A small web app to register, edit, and delete products with validation and a simulated backend.

## 🗂️ Project Structure  
TRAINING-W3-M3/
├── public/ # Public static files
├── src/ # Source code
│ ├── scripts/ # JavaScript scripts
│ │ ├── main.js # Main entry script
│ │ ├── methods.js # Reusable functions (API calls)
│ │ ├── product.js # Product logic/utilities
│ │ ├── validate.js # Input validation
│ │ └── alerts.js # SweetAlert2 alert functions
│ └── styles/
│ └── style.css # CSS styles
├── .gitignore # Git ignore rules
├── database.json # Mock database JSON
├── index.html # Main HTML page
├── package-lock.json # npm dependencies lock file
├── package.json # npm project config

markdown
Copiar
Editar

## 🧾 Description  
This project uses HTML, CSS, and vanilla JavaScript to practice:  
- Form validation (empty inputs, duplicates, numeric checks)  
- Dynamic DOM manipulation  
- API calls with fetch  
- CRUD operations with a fake REST API (JSON server)  
- SweetAlert2 for user-friendly alerts (top-right toast notifications)  
- Responsive design with CSS Flexbox  

## ✅ Features  
- Input for product name, price, and amount  
- Validation ensures non-empty unique names, price > 0, amount ≥ 0  
- Products displayed dynamically with Edit and Delete buttons  
- Prevents duplicate product names  
- Uses toast notifications for success and error messages  
- Data fetched and updated asynchronously  
- No page reloads on form submission  

## 🔧 Technologies Used  
- HTML5  
- CSS3 (Flexbox, styling)  
- Vanilla JavaScript (ES6 modules, async/await, fetch)  
- SweetAlert2 for alerts  
- JSON Server (mock backend)  

## 📂 How to Use  
1. Clone or download this repo.  
2. Run `npm install` to install dependencies (including SweetAlert2).  
3. Run your JSON server to serve `database.json` at `http://localhost:3000/product`.  
4. Open `index.html` in a modern browser.  
5. Add, edit, or delete products using the form and buttons.  
6. See notifications appear at the top-right corner.  

## 📄 Author  
Coder: Isai David Ariza Cantillo  
Email: isaistudio1.1@hotmail.com  
Clan: Sierra  

Designed and developed as part of a learning exercise at RIWI.  

© 2025 Isai David Ariza Cantillo. All rights reserved.  

