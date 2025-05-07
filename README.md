# 📅 Basic Activity Booking App (Backend)

A simple REST API server built with **Node.js**, **Express.js**, and **MongoDB** for a basic Activity Booking application.

This project implements JWT-based authentication, allowing users to register, login, view available activities, and book them.

## 🚀 Features

- **User Registration & Login** with JWT authentication
- **Activity Listings** (Public Endpoint)
- **Authenticated Booking** for activities
- **Fetch My Bookings** (Authorized)
- **Request Validation** using Joi
- **Hashed Passwords** using Bcrypt
- Clean code structure (controllers, routes, models, middlewares)

## 🔗 API Endpoints

| Method | Endpoint                     | Description                    |
|--------|------------------------------|--------------------------------|
| POST   | `/api/auth/register`         | Register a new user            |
| POST   | `/api/auth/login`            | User login & obtain JWT token  |
| GET    | `/api/activities/list`       | List all available activities  |
| POST   | `/api/bookings`              | Book an activity (JWT required)|
| GET    | `/api/bookings`              | Get all bookings (JWT required)|

### Sample Request Body:

**/api/auth/register**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "9876543210",
  "password": "Password@1"
}
