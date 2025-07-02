# todo_Aguru
1.PROJECT DESCRIPTION:
  A simple and intuitive To-Do List web application that allows users to manage their daily tasks.
  Built using React for the frontend and Spring Boot for the backend, it supports task creation, updates, deletion, and persistence.

  
2. ⚙️ INSTALLATION INSTRUCTIONS:
   Clone the repository
git clone https://github.com/your-username/todo-backend.git
cd todo-backend
Run:
./mvnw spring-boot:run
Backend runs at: http://localhost:8080
Frontend (React):
Clone the frontend repo:
git clone https://github.com/your-username/todo-frontend.git
cd todo-frontend
Install dependencies:
npm install
Start the React app:
npm start
Frontend runs at: http://localhost:3000


3. 🚀 How to Run the Project
Start the backend server using Spring Boot on port 8080.
Start the React frontend on port 3000.
Open your browser and visit http://localhost:3000 to use the app.

4. ✨ Features
✅ Add new tasks
✅ Mark tasks as completed
✅ Delete tasks
✅ Update task names
✅ Responsive design (mobile & desktop)
✅ Data persistence using local storage or backend database (depending on config)


5. 🎮 Usage
Once the app is running:
Enter a task name in the input box and click Add
Click the checkbox to mark a task as Completed
Click the 🗑️ icon to Delete a task
Tasks are saved automatically via API/local storage

6. 🛠️ Technologies Used
Frontend:
React
Tailwind CSS / Bootstrap (for styling)

Backend:
Java
Spring Boot
Spring Data JPA
Mongo DB (for data storage)
Others:
Git & GitHub

7. 🤖 How GitHub Copilot Was Used
GitHub Copilot was a valuable assistant during the development process. It helped by:
Auto-generating repetitive code such as React form handlers and Spring controllers.
Suggesting optimized logic for state management in React.
Providing boilerplate code for JPA repositories and DTOs.
Speeding up naming, validation, and CRUD logic setup.

8. 🗂️ Project Structure

Frontend (React):
todo-frontend/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── App.js
│   ├── index.js
│   └── api.js

Backend (Spring Boot):
todo-backend/
├── src/
│   └── main/
│       ├── java/
│       │   └── com/example/todo/
│       │       ├── controller/
│       │       ├── model/
│       │       ├── repository/
│       │       └── TodoApplication.java
│       └── resources/
│           ├── application.properties

