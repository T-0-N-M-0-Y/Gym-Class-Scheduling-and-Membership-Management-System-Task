# Gym-Class-Scheduling-and-Membership-Management-System-Task
 
🧾 Project Overview:
This Gym Class Scheduling and Membership Management System is designed to manage gym operations efficiently. It supports three roles:

Admin: Manage users, create classes, assign trainers, schedule classes (max 5/day).

Trainer: View their assigned schedules.

Trainee: Book classes (max 10 per schedule), manage profile, cancel bookings.

All access is protected by JWT-based authentication and role-based authorization.

🛠️ Technology Stack
TypeScript
Express.js
MongoDB
Mongoose
JWT	Authentication and Authorization
Vercel Deployment Platform

📊 Relational Diagram (ERD)


![WhatsApp Image 2025-06-19 at 12 46 57_eb166f9a](https://github.com/user-attachments/assets/bbcf1eb2-3bb6-40a0-8adb-8092b2517f81)


🔗 API Endpoints
Method      Endpoint      ~ Role	~ Description
POST	/auth/login	~ all	 ~ User Login
POST	/users/create	admin	Create new user (trainer/trainee)
POST	/classes	admin	Create a new class
GET	/api/v1/classes	all	Get all available classes
POST	/api/v1/schedules	admin	Create schedule (max 5/day)
GET	/api/v1/schedules	all	Get all schedules
POST	/api/v1/bookings	trainee	Book a schedule (max 10 trainees)
GET	/api/v1/bookings/my-bookings	trainee	View own bookings
DELETE	/api/v1/bookings/cancel/:id	trainee	Cancel a booking

🧬 Database Schema
👤 User
ts
Copy
Edit
{
  email: string;
  password: string;
  role: 'admin' | 'trainer' | 'trainee';
  name?: string;
  phone?: string;
}
🏋️ Class
ts
Copy
Edit
{
  title: string;
  description: string;
  level: 'beginner' | 'intermediate' | 'advanced';
}
📆 Schedule
ts
Copy
Edit
{
  classId: ObjectId (ref: Class),
  trainerId: ObjectId (ref: User),
  classDate: string,     // '2025-06-20'
  startTime: string,     // '10:00'
  endTime: string        // '12:00'
}
📑 Booking
ts
Copy
Edit
{
  traineeId: ObjectId (ref: User),
  scheduleId: ObjectId (ref: Schedule)
}
🧪 How to Run Locally
📁 Clone the Repository
bash
Copy
Edit
git clone https://github.com/yourname/gym-management-system.git
cd gym-management-system
📦 Install Dependencies
bash
Copy
Edit
npm install
⚙️ Setup Environment Variables
Create a .env file:

env
Copy
Edit
PORT=5000
MONGODB_URI=your_mongo_connection_uri
JWT_SECRET=your_jwt_secret
🔨 Build and Start
bash
Copy
Edit
npm run build
npm run start
Local Server: http://localhost:5000

🧪 Testing Instructions
🔐 Login as Admin
json
Copy
Edit
POST /api/v1/auth/login
{
  "email": "admin@gym.com",
  "password": "admin123"
}
✅ Admin Actions
Create trainer: POST /api/v1/users/create

Create class: POST /api/v1/classes

Create schedule: POST /api/v1/schedules (max 5/day)

✅ Trainee Actions
Login & Book class: POST /api/v1/bookings

View bookings: GET /api/v1/bookings/my-bookings

Cancel booking: DELETE /api/v1/bookings/cancel/:id

View profile: GET /api/v1/users/me

Update profile: PATCH /api/v1/users/me

❌ Error Test
Try booking more than 10 trainees → should return limit error

Try schedule more than 5 on same date → should return error

Unauthorized access → should return 401

🚀 Live Hosting Link
🔗 https://your-deployed-api.onrender.com
