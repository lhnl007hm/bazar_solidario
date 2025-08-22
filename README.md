<img src="link_to_your_logo_here.png" alt="Bazar Solidário Logo" width="40"> Bazar Solidário
A complete web application for a Charity Bazaar, built with the MERN stack.

<img src="link_to_features_icon.png" alt="Features Icon" width="24"> Key Features
✔️ User Authentication: Secure registration and login.
🔑 Item Management: Easily list, create, and manage items for sale or donation.
🖼️ Image Uploads: Upload images to showcase items.
💾 Data Storage: Utilizes MongoDB for reliable data persistence.
🛡️ Secure API: Authentication via JWT.

<img src="link_to_tech_icon.png" alt="Tech Stack Icon" width="24"> Tech Stack
Backend: <img src="link_to_nodejs_icon.png" alt="Node.js Icon" width="20"> Node.js, <img src="link_to_express_icon.png" alt="Express Icon" width="20"> Express, <img src="link_to_mongodb_icon.png" alt="MongoDB Icon" width="20"> MongoDB, JWT, bcryptjs, Multer

Frontend: <img src="link_to_react_icon.png" alt="React Icon" width="20"> React, Axios

Containerization: <img src="link_to_docker_icon.png" alt="Docker Icon" width="20"> Docker, Docker Compose

<img src="link_to_rocket_icon.png" alt="Running Icon" width="24"> Getting Started
Follow these steps to get the application running on your local machine.

<img src="link_to_prerequisites_icon.png" alt="Prerequisites Icon" width="24"> Prerequisites
Make sure you have the following installed:

<img src="link_to_nodejs_icon.png" alt="Node.js Icon" width="20"> Node.js (v14+)

<img src="link_to_npm_icon.png" alt="npm Icon" width="20"> npm

<img src="link_to_docker_icon.png" alt="Docker Icon" width="20"> Docker and Docker Compose

<img src="link_to_database_icon.png" alt="Database Icon" width="24"> 1. Start the Database
Open your terminal in the project root (/bazar_solidario) and run:

```bash
docker-compose up -d
```

This will start the MongoDB container in the background.

<img src="link_to_backend_icon.png" alt="Backend Icon" width="24"> 2. Configure and Start the Backend
Open a new terminal and navigate to the backend folder:

Install dependencies:

```bash
cd backend
npm install
```

Environment Configuration: Create a .env file in the backend folder:

```
MONGO_URI=mongodb://localhost:27017/bazar_solidario
JWT_SECRET=your_secret_key_here
PORT=5000
```

Replace your_secret_key_here with a secure string!

Create uploads directory:

```bash
mkdir uploads
```

Start the server:

```bash
npm run dev
```

The backend will run on http://localhost:5000.

<img src="link_to_frontend_icon.png" alt="Frontend Icon" width="24"> 3. Start the Frontend
Open a third terminal and navigate to the frontend folder:

Install dependencies:

```bash
cd frontend
npm install
```

Start the app:

```bash
npm start
```

The React app will usually open in your browser at http://localhost:3000.

<img src="link_to_usage_icon.png" alt="Usage Icon" width="24"> Usage
Once both the backend and frontend are running, you can:

Register a new user account.

Log in with your credentials.

Browse the list of available items.

Donate new items by filling out the item form and uploading an image.

(Functionality for buying items would be implemented here based on your project's further development.)

Log out of your account.

<img src="link_to_contributing_icon.png" alt="Contributing Icon" width="24"> Contributing
(Add your contributing guidelines here if you plan to accept contributions.)

<img src="link_to_license_icon.png" alt="License Icon" width="24"> License
This project is licensed under the MIT License - see the LICENSE file for details.
