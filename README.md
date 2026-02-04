# User Management – React CRUD Application

## Overview

This is a simple **React + TypeScript CRUD (Create, Read, Update, Delete)** application for managing user data.  
The application is designed with **future extensibility in mind**, allowing new fields to be added with **minimal code changes** using a **schema-driven form architecture**.

---

## Features

- Create, Read, Update, Delete users
- User form with validation and required field enforcement
- Schema-based, configuration-driven form rendering
- Clean and user-friendly UI
- Responsive layout (form and list displayed side-by-side on desktop)
- Written in TypeScript for better type safety

---

## Tech Stack

- React  
- TypeScript  
- Vite  
- Plain CSS (Flexbox layout)  
- Mock API (in-memory / stubbed API layer)

---

## User Fields

The application currently supports the following user fields:

- First Name  
- Last Name  
- Phone Number  
- Email Address  

### Validation Rules

- All fields are required  
- Email must be in valid email format  
- Phone number must contain exactly 10 digits  

---

## Project Structure

src/
├── api/ # API abstraction (mock / stub)
├── components/ # Reusable UI components
├── schemas/ # Form schema configuration
├── types/ # TypeScript interfaces
├── App.tsx
└── App.css


---

## Extensibility (Key Design Decision)

The user form is rendered dynamically using a **schema configuration**.

### Schema File

`src/schemas/userFormSchema.ts`

```ts
export const userFormSchema = [
  { name: "firstName", label: "First Name", type: "text", required: true },
  { name: "lastName", label: "Last Name", type: "text", required: true },
  { name: "phone", label: "Phone Number", type: "number", required: true },
  { name: "email", label: "Email Address", type: "email", required: true }
];
Adding a New Field
To add a new field (e.g. Address or Date of Birth):

Add a new entry to userFormSchema.ts

Setup Instructions
Prerequisites
Node.js (v18 or later recommended)

npm or yarn

Install & Run
npm install
npm run dev
The application will be available at:

http://localhost:5173
API Handling
The app uses a mock API layer to simulate CRUD operations.

API functions remain asynchronous to allow easy replacement with a real backend or JSON-server without impacting UI code.


A mock API is used since API details were not provided.

Deployment
Live Application:
https://user-app-crud1.netlify.app/

GitHub Repository
https://github.com/tusharkumarr/user-app