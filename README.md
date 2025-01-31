# Synkrama - Job Task API

## Installation & Setup

Follow the steps below to set up and run the project.

### 1. Install Dependencies
Ensure you have [Node.js](https://nodejs.org/) installed. Then, install the required dependencies by running:
```bash
npm install
```

### 2. Create a MongoDB Cluster
Set up a [MongoDB Atlas](https://www.mongodb.com/atlas/database) cluster and connect it to your application.

### 3. Connect to MongoDB Atlas
Update your project with the MongoDB connection string.

### 4. Start the Server
Ensure the server is running and connected to the database.

## API Usage

Use [Postman](https://www.postman.com/) or any API testing tool to interact with the API.

### Base URL
```plaintext
http://127.0.0.1:8080
```

### Endpoints

#### 1. Get Task Details
**Request:**
```http
GET /task/679ccb30f30e9cd6d3d4994f
```

#### 2. Create a New Task
**Request:**
```http
POST /task
```
**Body (JSON Example):**
```json
{
  "title": "New Task",
  "description": "Task description here"
}
```

#### 3. Update a Task
**Request:**
```http
PUT /task/679ccb30f30e9cd6d3d4994f
```
**Body (JSON Example):**
```json
{
  "title": "Updated Task Title"
}
```

#### 4. Delete a Task
**Request:**
```http
DELETE /task/679ccb30f30e9cd6d3d4994f
```

## Notes
- Replace `679ccb30f30e9cd6d3d4994f` with the actual task ID.
- Ensure your MongoDB instance is running and connected.
- Use appropriate headers such as `Content-Type: application/json` when making requests.

## License
This project is for internal use. All rights reserved.
