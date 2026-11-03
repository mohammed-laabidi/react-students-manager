React Student Manager
A comprehensive student management system built with React, designed to efficiently manage student records, search for students, and maintain an organized database.

🚀 Features
Student Management: Easily add, view, and manage student information.
Advanced Search: Quick and efficient search functionality to find students by name or other criteria.
State Management: Utilizes React Context and Reducers for scalable and predictable state management.
Responsive Design: Built with a modern UI, ensuring a seamless experience across different devices.
Modular Architecture: Organized component-based structure for easy maintenance and scalability.
🛠️ Tech Stack
Frontend: React.js
Styling: Tailwind CSS (indicated by tailwindcss in dependencies)
Build Tool: Vite
State Management: React Context API & useReducer
📂 Project Structure
src/components/: Contains reusable UI components like StudentTable, SideBar, Header, Input, Card, etc.
src/Context/: Holds the AppContext for global state management.
src/Reducers/: Contains AppReducer for handling state transitions.
src/utils.js: Utility functions for the application.
src/colors.js: Centralized color constants for consistent styling.
src/style.css: Global styles for the application.
🏁 Getting Started
Prerequisites
Node.js (LTS version recommended)
npm or yarn
Installation
Clone the repository:

git clone <repository-url>
Install dependencies:

npm install
Run the development server:

npm run dev
Build for production:

npm run build
📖 Usage
Adding Students: Use the FormAddStudents component to input new student details.
Searching Students: Use the FormSearchStudents component to filter the student list in real-time.
Viewing Students: The StudentTable displays all managed students in a structured format.
🤝 Contributing
Contributions are welcome! Please follow these steps:

Fork the repository.
Create a feature branch.
Commit your changes.
Open a pull request.
📄 License
This project is licensed under the MIT License.
