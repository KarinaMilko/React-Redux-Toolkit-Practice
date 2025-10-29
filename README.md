# React Redux Toolkit Practice

## Overview

This repository contains three practice projects to consolidate knowledge of React and Redux Toolkit. Each task demonstrates working with global state, forms, and user interactions.

---

## Task 1: User Card

**Route:** `/user`  

**Description:**  

- Displays a user card with photo, name, and status.  
- Click the heart icon ❤️ to toggle favourite status.  
- User data is stored in the global Redux store.  
- Card layout styled with CSS modules.

---

## Task 2: Todo App

**Route:** `/form`  

**Description:**  

- Fill the input field and press **Add** to create a new task.  
- Check the box to mark a task as done.  
- Click the trash icon 🗑️ to delete a task.  
- Validation errors appear below the input field.  
- Global state management with Redux Toolkit.

---

## Task 3: Users Page

**Route:** `/users`  

**Description:**  

- Load user data from an external API (e.g., [randomuser.me](https://randomuser.me/)) using Thunk and store it in Redux.  
- Display user photo, name, email, and phone in adaptive cards.  
- Cards adjust to screen size for responsive design.

---

## Features

- **Global state management:** Redux Toolkit used across all tasks.  
- **Input validation:** Form fields validate user input with error messages.  
- **Dynamic styles:** UI updates according to state and validation status.  
- **Adaptive design:** Components and cards adjust to screen width using Flexbox.  
- **Thunk integration:** Optional async fetching of user data from external APIs.

---

## Installation

```bash
git clone https://github.com/KarinaMilko/React-Redux-Toolkit-Practice.git
npm install
npm run dev

