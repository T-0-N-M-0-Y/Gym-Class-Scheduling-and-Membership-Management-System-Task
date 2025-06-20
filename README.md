# 🏋️ Gym Class Scheduling and Membership Management System

A role-based gym management backend system built with **TypeScript**, **Express.js**, **MongoDB**, and **JWT** authentication.

It supports **Admin**, **Trainer**, and **Trainee** roles — with class scheduling, booking, and access control.

---

## 🌐 Live Hosting Link

🔗 [https://your-vercel-api.vercel.app](https://your-vercel-api.vercel.app)

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

| Method | Endpoint                      | Role      | Description                            |
|--------|-------------------------------|-----------|----------------------------------------|
| POST   | `/auth/login`                | all       | 🔐 User Login                           |
| POST   | `/users/create-user`         | all       | 👤 Create new user (trainee)            |
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

### 👤 User Model
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
