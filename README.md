# 📚 Book Recommendation System

> An intelligent and modern book recommendation platform built with the latest web technologies.

![Project Status](https://img.shields.io/badge/Status-Active_Development-brightgreen?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)
![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.3-61DAFB?style=flat-square&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=flat-square&logo=tailwind-css)

## 📖 Overview

Welcome to the **Book Recommendation** project! This application is designed to help users discover their next favorite read. Leveraging the power of Next.js and React, it provides a fast, responsive, and seamless user experience.

## 🚀 Technologies Used

This project utilizes a cutting-edge tech stack to ensure performance, scalability, and developer experience:

- **[Next.js 16](https://nextjs.org/)**: The React Framework for the Web (App Router).
- **[React 19](https://react.dev/)**: The library for web and native user interfaces.
- **[Tailwind CSS 4](https://tailwindcss.com/)**: A utility-first CSS framework for rapid UI development.
- **[ESLint](https://eslint.org/)**: Pluggable JavaScript linter.

## 📂 Project Structure

A well-organized codebase designed for scalability, performance, and maintainability.

```bash
bookworm/
├── app/
│   ├── api/
│   │   └── auth/
│   │       └── [...nextauth]/
│   │           └── route.js          # NextAuth.js route handler (API route in App Router)
│   │
│   ├── admin/
│   │   ├── dashboard/
│   │   │   └── page.jsx
│   │   ├── books/
│   │   │   └── ...
│   │   └── ...
│   │
│   ├── auth/
│   │   ├── login/
│   │   │   └── page.jsx              # Login page (calls NextAuth signIn)
│   │   └── register/
│   │       └── page.jsx              # Optional: custom register page or redirect
│   │
│   ├── browse/
│   │   └── page.jsx
│   ├── library/
│   │   └── page.jsx
│   ├── tutorials/
│   │   └── page.jsx
│   ├── book/
│   │   └── [id]/
│   │       └── page.jsx
│   ├── dashboard/
│   │   └── page.jsx
│   ├── layout.jsx                    # App root layout (Navbar, Footer, NextAuth session provider here)
│   └── page.jsx
│
├── components/
│   ├── Navbar.jsx                   # Reads session from NextAuth
│   ├── Footer.jsx
│   ├── ProtectedRoute.jsx           # Optional: wrap protected pages or use middleware
│   └── ...
│
├── lib/
│   ├── nextAuthOptions.js           # NextAuth config options (providers, callbacks)
│   └── prisma.js                    # or DB client if using Prisma (optional)
│
├── middleware.js                    # Next.js middleware for route protection (optional)
│
├── models/
│   ├── User.js                     # Optional: for custom user schema with DB
│   └── ...
│
├── public/
│   └── ...
│
├── styles/
│   └── ...
│
├── .env.local                      # Store NextAuth secrets & DB creds
├── next.config.js
├── package.json
└── README.md
      # Project documentation
```

### 🏗️ Architecture & Design Rationale

This project follows the **Next.js App Router** architecture, chosen for its robust features and modern approach to web development:

- **`app/` Directory (App Router)**: We utilize the latest App Router to leverage **React Server Components**. This allows us to render components on the server by default, reducing the client-side JavaScript bundle size and improving initial page load performance.
  - **`layout.js`**: Defines the shared UI (like headers and footers) across routes, preserving state and preventing unnecessary re-renders during navigation.
  - **`page.js`**: Represents the unique UI for a specific route.
  - **`globals.css`**: Centralized styling using Tailwind CSS, ensuring a consistent design system across the application.

- **`public/` Directory**: Stores static assets like images and fonts. Files here are served directly from the root URL, benefiting from automatic caching and optimization.

- **Configuration Files**:
  - **`next.config.mjs`**: Customizes the Next.js build process and runtime environment.
  - **`eslint.config.mjs`**: Enforces coding standards and best practices to maintain a high-quality codebase.
  - **`postcss.config.mjs` & `tailwind.css`**: Streamlines the styling workflow using a utility-first approach, enabling rapid UI development without context switching.

This structure is designed to be **modular and scalable**, making it easy to add new features, routes, and components as the project grows.

## 🛠️ Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm or yarn or pnpm

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/book-recommendation.git
    cd book-recommendation
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Run the development server:**

    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```

4.  **Open your browser:**
    Navigate to [http://localhost:3000](http://localhost:3000) to see the application running.

## 📜 Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm start`: Starts the production server.
- `npm run lint`: Runs ESLint to check for code quality issues.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.
