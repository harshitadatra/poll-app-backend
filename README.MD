# Poll Application




---

## 📌 API Endpoints

### **🔹 Authentication**
#### **1. User Sign Up**
- **Endpoint:** `POST /api/auth/signup`
- **Request Body:**
  ```json
  {
    "username": "testuser",
    "email": "test@example.com",
    "password": "securepassword"
  }
  ```
- **Response:**
  ```json
  {
    "message": "User registered successfully",
    "token": "JWT_TOKEN_HERE"
  }
  ```

#### **2. User Login**
- **Endpoint:** `POST /api/auth/login`
- **Request Body:**
  ```json
  {
    "email": "test@example.com",
    "password": "securepassword"
  }
  ```
- **Response:**
  ```json
  {
    "message": "Login successful",
    "token": "JWT_TOKEN_HERE"
  }
  ```

---

### **🔹 Polls**
#### **3. Create a Poll**
- **Endpoint:** `POST /api/polls`
- **Headers:**
  ```json
  {
    "Authorization": "Bearer JWT_TOKEN_HERE",
    "Content-Type": "application/json"
  }
  ```
- **Request Body:**
  ```json
  {
    "question": "What is your favorite programming language?",
    "options": ["JavaScript", "Python", "Java", "C++"]
  }
  ```
- **Response:**
  ```json
  {
    "message": "Poll created successfully",
    "poll": { "_id": "pollId123", "question": "...", "options": [...] }
  }
  ```

#### **4. Get All Polls**
- **Endpoint:** `GET /api/polls`
- **Response:**
  ```json
  [
    {
      "_id": "pollId123",
      "question": "What is your favorite programming language?",
      "options": [
        { "text": "JavaScript", "votes": 10 },
        { "text": "Python", "votes": 5 }
      ]
    }
  ]
  ```

#### **5. Vote on a Poll**
- **Endpoint:** `POST /api/polls/:id/vote`
- **Headers:**
  ```json
  {
    "Authorization": "Bearer JWT_TOKEN_HERE",
    "Content-Type": "application/json"
  }
  ```
- **Request Body:**
  ```json
  {
    "optionIndex": 1
  }
  ```
- **Response:**
  ```json
  {
    "message": "Vote recorded successfully",
    "poll": { "_id": "pollId123", "question": "...", "options": [...] }
  }
  ```

---

