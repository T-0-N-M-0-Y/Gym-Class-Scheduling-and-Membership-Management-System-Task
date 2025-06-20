# 🏋️ Gym Class Scheduling and Membership Management System

A role-based gym management backend system built with **TypeScript**, **Express.js**, **MongoDB**, and **JWT** authentication.  
It supports Admin, Trainer, and Trainee roles — with class scheduling, booking, and profile features.

---

## 🌐 Live Hosting Link

🔗 [https://your-vercel-api.vercel.app](https://your-vercel-api.vercel.app)  

---

## 🧾 Project Overview

This system is built to manage gym class scheduling efficiently.  
It includes:

- **Admin**: Create classes, assign trainers, schedule up to 5 classes per day.
- **Trainer**: View assigned schedules.
- **Trainee**: Book schedules (max 10 per class), cancel bookings, manage own profile.

The system enforces:
- Max **5 schedules per day**
- Max **10 trainees per schedule**
- JWT authentication and role-based access control
- Global error handling and validation

---

## 🛠 Technology Stack

| Technology     | Description                         |
|----------------|-------------------------------------|
| TypeScript     | Primary language                    |
| Express.js     | Web server framework                |
| MongoDB        | NoSQL Database                      |
| Mongoose       | ODM for MongoDB                     |
| JWT            | Auth system for secure access       |
| Vercel         | Live API Hosting Platform           |


