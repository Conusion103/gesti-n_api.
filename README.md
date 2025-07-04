# 🧮 Product Management App

This is a small web application for registering, editing, and deleting products by name, price, and amount. It uses a mock backend with `json-server` and features modular code structure with alerts via SweetAlert2.

---

## 🗂️ Project Structure

```bash
TRAINING-W3-M3/
├── public/                  # Public static files
├── src/                     # Source code
│   ├── scripts/             # JavaScript scripts
│   │   ├── main.js          # Main entry script
│   │   ├── methods.js       # API utilities
│   │   ├── product.js       # Product logic
│   │   ├── validate.js      # Input validation
│   │   └── alerts.js        # SweetAlert2 alerts
│   └── styles/
│       └── style.css        # CSS styles
├── .gitignore               # Git ignore rules
├── database.json            # Mock database for json-server
├── index.html               # Main HTML page
├── package-lock.json        # npm lock file
└── package.json             # npm config
```

---

## 🧾 Description

This app was built using HTML, CSS, and JavaScript (ES Modules). It performs full CRUD operations on a list of products using a fake REST API provided by `json-server`.

---

## ✅ Features

- 📥 Add, edit, and delete products
- 🧪 Validates empty or invalid inputs
- 🔔 Alerts using SweetAlert2 (toasts & modals)
- 🔁 Renders product cards dynamically
- 💾 Stores data via `json-server`
- 📱 Responsive layout with Flexbox and media queries

---

## 🛠️ Technologies

- HTML5  
- CSS3 (Flexbox, gradients, shadows)  
- Vanilla JavaScript (Modules, Fetch API)  
- SweetAlert2  
- json-server

---

## 🚀 How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/your-user/your-repo.git
   cd your-repo
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the mock server:
   ```bash
   npx json-server --watch database.json
   ```

4. Open `index.html` in your browser.

---

## 🔐 License

For educational purposes only. Not licensed for production use.

---

## 🧠 Learning Topics

- Modular JS architecture
- Input validation and error handling
- Dynamic DOM rendering
- SweetAlert2 integration
- Responsive design with media queries

---

## 👨‍💻 Author

**Coder**: Isai David Ariza Cantillo  
**Email**: isaistudio1.1@hotmail.com  
**Clan**: Sierra  
**Training**: Week 3, Module 3 – RIWI 2025
