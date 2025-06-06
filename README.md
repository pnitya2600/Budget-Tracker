

# 💰 Personal Budget Tracker

A full-stack web application that allows users to track their income, expenses, and budgets. Built using **React** for the frontend and a backend (e.g., Node.js, Express, or Django) with RESTful APIs.

🌐 Live URLs

* Hosted : [https://budget-tracker-dkal75nku-pnitya2600s-projects.vercel.app/](https://budget-tracker-dkal75nku-pnitya2600s-projects.vercel.app/)


---

## 📦 Features

* ✅ User Authentication (Sign Up / Login)
* 📈 Add, edit, and delete income/expense transactions
* 📊 Visualize budget vs. spending
* 🔐 Data stored securely in backend with JWT Auth
* 🔍 Filter & search transactions
* 📅 Categorized and dated entries

---

## ⚙️ Tech Stack

### Frontend

* React
* Tailwind CSS / CSS Modules
* React Router
* LocalStorage or API Integration

### Backend

* Django + DRF 
* MongoDB / PostgreSQL / SQLite
* JWT Authentication
* REST APIs for user & transaction management

---

## 🚀 Getting Started

### Prerequisites

* Python + pip (for Django backend)
* Git

---

### 🖥️ Local Setup

#### Clone the Repository

```bash
git clone https://github.com/pnitya2600/Budget-Tracker.git
```

---

## 🔧 Setup Instructions

### 📦 Backend Setup (Django)

1. **Navigate to the backend folder:**

   ```bash
   cd budget_tracker_backend
   ```

2. **Create and activate a virtual environment:**

   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies:**

   ```bash
   pip install -r requirements.txt
   ```

4. **Apply database migrations and start the Django server:**

   ```bash
   python manage.py migrate
   python manage.py runserver
   ```

---

### 🌐 Frontend Setup (React + Vite)

1. **Navigate to the frontend folder:**

   ```bash
   cd budget-tracker
   ```

2. **Install frontend dependencies:**

   ```bash
   npm install
   ```

3. **Run the frontend development server:**

   ```bash
   npm run dev
   ```

---

## 🔐 Authentication

* Simple `localStorage`-based login system.
* Login and Register forms with built-in validation.
* After login, users are redirected to the `/dashboard`.

---



---

## 🌍 Deployment

### Frontend

* Deployed on **Vercel**
* Auto-deploys on push to `main` branch

### Backend

* Deployed on **Vercel Functions**
* Exposes APIs like `/api/login`, `/api/transactions`

---

## 📂 Project Structure

```
├── budget_tracker_backend/         # Backend Django project
│   ├── budget/                     # Django app for core functionality
│   ├── budget_tracker_backend/     # Project-level settings
│   ├── db.sqlite3                  # SQLite DB
│   ├── manage.py                   # Django management script

├── budget-tracker/                # Frontend React project (Vite)
│   ├── public/                     # Static files
│   ├── src/                        # React source
│   │   ├── components/            # React components
│   │   ├── assets/                # SVGs, images, etc.
│   │   ├── App.jsx, main.jsx, etc
│   ├── package.json                # Frontend dependencies
│   ├── vite.config.js             # Vite config

├── README.md
```

---


## 🔐 Credentials for Demo

> Use test credentials for demo:

```
Email: demo@example.com
Password: demo123
```

---

## 📃 License

This project is licensed under the MIT License.

---


