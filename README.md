# Project Rubies

A full-stack expense tracking application built with React and Node.js.

## Project Structure

- **client/** - React frontend with Vite
- **backend/** - Express.js backend with MongoDB

## Setup Instructions

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file based on `.env.example`:
   ```
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   API_SECRET=your_secret_key
   ```

4. Start the server:
   ```bash
   npm start
   ```

### Frontend Setup

1. Navigate to the client directory:
   ```bash
   cd client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file with your backend URL:
   ```
   VITE_API_URL=http://localhost:5000
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## Deployment

### Backend (Render)
- Deploy the `backend` folder to Render
- Set environment variables in Render dashboard

### Frontend
- Build the client: `npm run build`
- Deploy the `dist` folder to your hosting service

## Technologies Used

- **Frontend**: React, Redux Toolkit, Bootstrap, Vite
- **Backend**: Node.js, Express, MongoDB, Mongoose
- **Authentication**: API Secret Key
