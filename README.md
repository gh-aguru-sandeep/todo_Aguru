# 📜 ToDo List Application

## 1. Project Title & Description

**ToDo List Application** is a simple and intuitive full-stack web app that helps users manage their daily tasks. Built with **React** for the frontend and **Spring Boot** for the backend, it supports task creation, updates, deletion, priority settings, and due date tracking — all stored persistently in a **MongoDB** database.

---

## 2. Installation Instructions

### Backend (Spring Boot + MongoDB)

1. Clone the backend repository:

   ```bash
   git clone https://github.com/gh-aguru-sandeep/todo-backend.git
   cd todo-backend
   ```

2. Ensure **MongoDB** is installed and running on `localhost:27017`.

3. Run the backend:

   ```bash
   ./mvnw spring-boot:run
   ```

   The backend will start at: `http://localhost:8080`

---

### Frontend (React)

1. Clone the frontend repository:

   ```bash
   git clone https://github.com/gh-aguru-sandeep/todo-frontend.git
   cd todo-frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the React app:

   ```bash
   npm start
   ```

   The frontend will start at: `http://localhost:3000`

---

## 3. How to Run the Project

* Run the Spring Boot server on port `8080`.
* Run the React app on port `3000`.
* Open a browser and go to: `http://localhost:3000`
* Interact with the task list: add, update, delete, and filter tasks.

---

## 4. Features

* ✅ Add new tasks with title and priority
* ✅ Mark tasks as completed/incomplete
* ✅ Edit task details
* ✅ Delete tasks
* ✅ View and filter tasks by priority
* ✅ Prioritize tasks as Low (1), Medium (2), or High (3)
* ✅ Responsive design for mobile and desktop
* ✅ Persistent data storage using MongoDB

---

## 5. Usage

Once the app is running:

* Enter task details and click **Add**
* Click the checkbox ✅ to mark a task as complete
* Click to edit or 🗑️ to delete a task
* Use filters to view tasks based on completion or priority

---

## 6. Technologies Used

### Frontend:

* React
* Bootstrap

### Backend:

* Java
* Spring Boot
* Spring Data JPA

### Database:

* MongoDB

### Others:

* Git & GitHub

---

## 7. Project Structure

```
todo-application/
├── backend/                # Spring Boot backend
│   ├── controller/
│   ├── model/
│   ├── repository/
│   ├── TodoApplication.java
│   └── resources/
│       └── application.properties
├── frontend/               # React frontend
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── App.js
│       └── index.js
```

---

## 8. How GitHub Copilot Was Used

GitHub Copilot assisted in:

* Auto-generating boilerplate code for controllers, models, and services
* Suggesting React component structures and form handling
* Speeding up development with intelligent code completions
* Improving naming conventions and logic structure
* Reducing repetitive tasks and increasing productivity

---

## 9. Author

* 👨‍💻 Name: **Sandeep**
* 🔗 GitHub: [gh-aguru-sandeep](https://github.com/gh-aguru-sandeep)

---

## 📝 License

This project is open-source and intended for academic and learning purposes.

---


