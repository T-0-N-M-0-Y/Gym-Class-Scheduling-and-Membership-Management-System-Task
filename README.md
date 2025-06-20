# 🏋️ Gym Class Scheduling and Membership Management System

A role-based gym management backend system built with **TypeScript**, **Express.js**, **MongoDB**, and **JWT** authentication.

It supports **Admin**, **Trainer**, and **Trainee** roles — with class scheduling, booking, and access control.

---

## 🌐 Live Hosting Link

🔗 https://gym-class-scheduling-and-membership-self.vercel.app

---

## 🔐 Admin Credentials (for Testing)
Email: admintest@gmail.com
Password: admin1234

---

## 🧾 Project Overview

This system is built to manage gym class scheduling efficiently.

### Roles & Responsibilities:

- **Admin**:
  - Create classes
  - Assign trainers
  - Schedule up to **5 classes per day**

- **Trainer**:
  - View assigned schedules

- **Trainee**:
  - View and Update Own Profile
  - Book schedules (max **10 per class**)
  - Cancel bookings

### System Rules Enforced:

- ✅ Max **5 schedules per day**
- ✅ Max **10 trainees per schedule**
- ✅ JWT authentication and **role-based access control**
- ✅ Global error handling and validation

---

## 🛠 Technology Stack

| Technology   | Description                        |
|--------------|------------------------------------|
| TypeScript   | Primary language                   |
| Express.js   | Web server framework               |
| MongoDB      | NoSQL Database                     |
| Mongoose     | ODM for MongoDB                    |
| JWT          | Auth system for secure access      |
| Vercel       | Live API Hosting Platform          |

---

## 📚 API Endpoints

| Method | Endpoint                     | Role      | Description                            |
|--------|------------------------------|-----------|----------------------------------------|
| POST   | `/auth/login`                | all       | 🔐 User Login                          |
| POST   | `/users/create-user`         | all       | 👤 Create new user (trainee)            |
| POST   | `/users/userId`              | trainee   | 👤 View own Profile (trainee)           |
| POST   | `/users/update-user/:userId` | trainee   | 👤 Update Own Profile (trainee)         |
| PATCH  | `/admin/update-role/:id`     | admin     | 🛠️ Update user to trainer or admin      |
| POST   | `/classes/add-class`         | admin     | 🏋️ Create a new class                   |
| GET    | `/classes/all-classes`       | all       | 📖 Get all available classes            |
| POST   | `/schedules/create-schedules`| admin     | 📅 Create schedule (max 5/day)          |
| GET    | `/schedules/all-schedules`   | all       | 📆 Get all schedules                    |
| POST   | `/booking/create-booking`    | trainee   | 📝 Book a schedule (max 10 trainees)    |
| GET    | `/booking/my-bookings`       | trainee   | 👀 View own bookings                    |
| DELETE | `/booking/cancel/:id`        | trainee   | ❌ Cancel a booking                     |

---

## 📊 Relational Diagram

![WhatsApp Image 2025-06-19 at 12 46 57_4df48b4a](https://github.com/user-attachments/assets/73a0b730-0b5f-480e-bdc1-a6677105e2c2)


---

## 🧬 Database Schema (Model Definitions)

### 👤 User Model:
{
  name: string;
  email: string;
  password: string;
  contactNo: number;
  profileImg?: string;
  role: 'admin' | 'trainer' | 'trainee';
  createdAt: Date;
  updatedAt: Date;
}

### 👤 Admin Model:
{
  role: 'admin' | 'trainer';
}

### 👤 auth Model:
{
  email: string;
  password: string;
  accessToken: string;
  user: {
    _id: string;
    role: 'admin' | 'trainer' | 'trainee';
    email: string;
  };
}

### 👤 class Model:
{
  name: string;
  description: string;
}

### 👤 schedule Model:
{
  classId: Types.ObjectId;
  trainerId: Types.ObjectId;
  classDate: string;
  startTime: string;
  endTime: string;
}

### 👤 booking Model:
{
  traineeId: Types.ObjectId;
  scheduleId: Types.ObjectId;
}

...
🧪 Instructions to Run Locally:

1️⃣ Clone the Repository:
git clone https://github.com/T-0-N-M-0-Y/Gym-Class-Scheduling-and-Membership-Management-System-Task
cd Gym-Class-Scheduling-and-Membership-Management-System-Task

2️⃣ Install Dependencies
npm install

3️⃣ Create Environment File:
Create a .env file in the root directory and add:
NODE_ENV=development
PORT=5000
DATABASE_URI=mongodb+srv://mongooseANDtypescript:admin12345@cluster0.ddbcqih.mongodb.net/mongooseANDtypescript?retryWrites=true&w=majority&appName=Cluster0
BCRYPT_SALT_ROUNDS=15
SECRET_KEY=b3357c864db8de2012719a835b6a5013ddd44671edf70a7a3aba274e5fee83b097525cf92132ebc92b3a3c0a4669a2000615b982fb4711ff067245744501a516

4️⃣ Build and Run the Server:
npm run build
npm run start:dev

Your server will start at:
📍 http://localhost:5000
