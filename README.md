# React CRUD Application

A clean and modern CRUD (Create, Read, Update, Delete) application, designed and developed using industry best practices and a modern technology stack. This project demonstrates effective client-side data management and seamless integration with a mock REST API.

---

## 🛠️ Technology Stack

- **React** — A declarative, component-based JavaScript library for building user interfaces.
- **TailwindCSS** — A utility-first CSS framework for rapid UI development.
- **Vite** — A lightning-fast build tool and development server for modern web projects.
- **TanStack Query (React Query)** — Powerful asynchronous state management and server-state caching.
- **Axios** — A promise-based HTTP client for making API requests.
- **JSON Server** — A full fake REST API for front-end development and testing.

---

## ⚡️ Core Features

- **Create** new resources seamlessly through intuitive forms.
- **Read** and display data in real-time with efficient caching.
- **Update** existing entries with instant UI feedback.
- **Delete** records securely with state synchronization.
- Optimized state management and network request handling via TanStack Query.
- Fully responsive and accessible UI styled with TailwindCSS.

---

## 🎯 Project Purpose

This application was developed to:

- Illustrate efficient client-server data management using TanStack Query.
- Encourage component-driven design and reusable logic patterns with React.
- Implement modern UI principles through TailwindCSS.
- Simplify back-end simulation using JSON Server.

---

## 🚀 Getting Started

Follow these steps to set up and run the project locally:

1. **Clone the repository:**

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

2. **Install dependencies:**

```bash
npm install
```

3. **Run JSON Server to simulate your backend:**

```bash
npx json-server --watch db.json --port 3000
```

4. **Start the development server:**

```bash
npm run dev
```

---

## 📂 Project Structure

```
src/
├── api/            # Axios configurations and API request functions
├── components/     # Reusable, self-contained UI components
├── hooks/          # Custom hooks for data fetching and logic reuse
├── pages/          # Application route views
├── App.jsx         # Root component with routing structure
├── main.jsx        # Application entry point and configuration
└── index.css       # TailwindCSS base and custom styles
```

---
