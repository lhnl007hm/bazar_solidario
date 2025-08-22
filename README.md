Bazar Solidário
This is a complete web project called "Bazar Solidário" (Charity Bazaar), built with the MERN stack (MongoDB, Express, React, Node.js). The application allows users to register, log in, and then donate or buy items.

Features
User Authentication: User registration and login with credential validation.

Item Management: View, create, and manage items, which can be for sale or donation.

Image Uploads: Users can upload an image for each item.

Data Persistence: Uses MongoDB to store user and item data.

Security: Protects API routes using JWT (JSON Web Tokens) for authentication.

Project Structure
The application is divided into two main parts: backend and frontend.

/bazar_solidario
├── /backend            # Node.js Server
│   ├── src/models      # Data models
│   ├── src/routes      # API routes
│   ├── src/middleware  # Authentication middleware
│   ├── server.js       # Backend entry point
│   └── uploads/        # Directory for images
├── /frontend           # React Application
│   ├── src/components  # React components
│   ├── src/App.js      # Main component
│   └── public/         # Static files
└── docker-compose.yml  # MongoDB configuration
How to Run the Project
Follow the steps below to start the complete application in your local environment.

Prerequisites
Node.js (version 14 or higher)

npm

Docker and Docker Compose

1. Start the Database
First, you need to start the MongoDB container using Docker. Open a terminal in the project's root directory (/bazar_solidario) and execute:

Bash

docker-compose up -d
This will download the MongoDB image and start the service on port 27017.

2. Configure and Start the Backend
Open a new terminal and navigate to the backend folder.

Install dependencies:

Bash

npm install
Configure environment variables: Create a .env file in the backend folder with the following variables:

MONGO_URI=mongodb://localhost:27017/bazar_solidario
JWT_SECRET=your_secret_key_here
PORT=5000
Remember to replace your_secret_key_here with a random and secure string.

Create the uploads folder: The backend needs a directory to store images.

Bash

mkdir uploads
Start the server:

Bash

npm run dev
The server will start and run on port 5000. Keep this terminal open.

3. Start the Frontend
Open a third terminal and navigate to the frontend folder.

Install dependencies:

Bash

npm install
Start the application:

Bash

npm start
The React application will start and automatically open in your browser, usually at http://localhost:3000.

That's it! The complete application is now running. You can start using "Bazar Solidário" to register, log in, and manage items.
