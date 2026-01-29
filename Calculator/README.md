# React Calculator App

A clean and functional calculator application built with React.  
This project focuses on handling user input, state management, validations, and keyboard interactions using modern React practices.

---

## Features

- Basic arithmetic operations (Addition, Subtraction, Multiplication, Division)
- Button-based calculator UI
- Keyboard input support
  - Numbers and operators
  - Enter for equals
  - Backspace to delete
  - Escape to clear
- Input validations to prevent invalid expressions
- Clean and centered calculator layout
- Responsive and minimal UI using plain CSS

---

## Tech Stack

- React (JavaScript)
- React Hooks (useState, useEffect, useCallback)
- CSS (no external UI libraries)
- Vite (development and build tool)

---

## Key Concepts Used

- Controlled state for calculator input
- Reusable functional components
- Keyboard event handling
- Input validation logic
- Safe expression evaluation
- Separation of UI and business logic

---

## Getting Started

Install dependencies:

npm install

Run the application:

npm run dev

Open the local URL shown in the terminal.

---

## Validations Implemented

- Prevents starting expressions with invalid operators
- Prevents consecutive operators (++, **, //)
- Prevents multiple decimals in a single number
- Prevents evaluation of incomplete expressions

---

## Possible Improvements

- Replace expression evaluation with a custom parser
- Add calculation history
- Improve accessibility (ARIA labels, focus states)
- Add unit tests
- Convert project to TypeScript

---

## Author

Built by Aditya Patel

---

## License

This project is open source and available under the MIT License.

