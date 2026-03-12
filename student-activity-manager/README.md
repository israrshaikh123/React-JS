# 🎓 Student Activity Manager

A React-based interactive application to manage student activities and attendance.

## 📝 Project Description

Student Activity Manager allows users to add students, toggle their details, mark attendance, and delete records — all through React state management and component-based UI updates.

## 🚀 Features

- Add new students
- Delete students
- Mark attendance (Present / Absent)
- Toggle student details
- Real-time dashboard (Total, Present, Absent)
- Form validation with ref-based focus

## 🧩 Component Structure

- **App.jsx** — Main component, manages all state and functions
- **StudentForm.jsx** — Add students using refs and form events
- **StudentList.jsx** — Renders student list using fragments
- **StudentCard.jsx** — Individual student card with conditional rendering

## ⚛️ React Concepts Used

- useState
- useRef
- Props
- Events & Handlers
- Conditional Rendering
- List Rendering (map + keys)
- Fragments
- Argument Passing in Event Handlers

## 📸 Screenshots

 (src/assets/ss1.png)
 (src/assets/ss2.png)

## 🛠️ Tech Stack

- React
- Vite
- Tailwind CSS

## ⚙️ How to Run
```bash
npm install
npm run dev
```

## 📌 Notes

- No backend or localStorage used
- All data resets on refresh