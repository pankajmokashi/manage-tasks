# Task Management Application

### Prerequisites
- Node.js and npm installed
- MongoDB Atlas account and cluster setup
- Git installed

## Backend Setup
1. Clone the repository
```bash
git clone https://github.com/pankajmokashi/manage-tasks.git
cd manage-tasks
```

2. Navigate to the backend directory
```bash
cd task-management-backend
```

3. Install dependencies
```bash
npm install
```

4. Create a .env file in the backend directory
```bash
touch .env
```

5. Add the following environment variables to the .env file
```bash
MONGODB_URI=your_mongodb_atlas_connection_string
```

6. Start the backend server
```bash
npm start
```

## Frontend Setup
1. Navigate to the frontend directory
```bash
cd ../task-management
```

2. Install dependencies
```bash
npm install
```

3. Start the frontend server
```bash
npm start
```

## API Endpoints
Authentication
- Login: POST /login
  - Request body: { "username": "your_username", "password": "your_password" }
  - Response: { "token": "your_jwt_token" }
    
- Register: POST /register
  - Request body: { "username": "your_username", "password": "your_password" }
  - Response: { "message": "User registered successfully" }

Tasks
- Get all tasks: GET /tasks
  - Response: [ { "id": "task_id", "title": "task_title", "description": "task_description" }, ... ]
    
- Get task by ID: GET /tasks/:id
  - Response: { "id": "task_id", "title": "task_title", "description": "task_description" }
    
- Create task: POST /tasks
  - Request body: { "title": "task_title", "description": "task_description" }
  - Response: { "id": "task_id", "title": "task_title", "description": "task_description" }
    
- Update task: PUT /tasks/:id
  - Request body: { "title": "task_title", "description": "task_description" }
  - Response: { "id": "task_id", "title": "task_title", "description": "task_description" }
    
- Delete task: DELETE /tasks/:id
  - Response: { "message": "Task deleted successfully" }
