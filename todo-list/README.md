# React To-Do List App

A clean and scalable To-Do List application built with React.  
This project focuses on correct state management, clean component structure, and real-world UI behavior.

---

## Features

- Add new tasks
- Mark tasks as completed
- Delete tasks
- Filter tasks (All / Active / Completed)
- Persistent storage using LocalStorage
- Keyboard support (press Enter to add task)
- Clean, minimal UI using plain CSS

---

## Tech Stack

- React (JavaScript)
- React Hooks (useState, useEffect)
- CSS (no external UI libraries)
- Vite (development and build tool)

---

## Key Design Decisions

- Single source of truth  
  All todos are managed in the parent App component.

- Derived state  
  Filters are computed from existing state instead of being stored separately.

- Immutability  
  State updates use functional patterns to avoid mutation.

- Side effects isolation  
  LocalStorage synchronization is handled using useEffect.

- Component separation  
  UI components remain simple and reusable.

---

## Getting Started

Install dependencies:

npm install

Run the application:

npm run dev

Open the local URL shown in the terminal.

---

## Possible Improvements

- Refactor state logic using useReducer
- Add edit functionality for todos
- Add unit tests
- Improve accessibility
- Sync data with a backend API

---

## Author

Built by Aditya Patel

---

## License

This project is open source and available under the MIT License.
