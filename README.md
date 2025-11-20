# Trello Assignment

**MeatTruck** is a Full-Stack Platform where individuals and sellers can trade bulk meat and livestock.  
It is not meant for retail transactions — the platform is primarily designed for traders and dealers.  
All Government guidelines and compliance rules are followed during development.

---


## 🚀 Features & Tools

- Bulk meat and livestock trading platform
- Secure payments via **Razorpay**
- OAuth login with **Google**
- Admin and seller dashboards
- Real-time notifications
- CORS-enabled for frontend-backend communication
- Live Chat with Socket.IO
- OTP Verification
- Redux 
- Framer Motion
- Spring Security
- Custom Exceptions
---

### 🧩 Tech Stack  
Frontend: Next.js 14, TypeScript, Tailwind, Razorpay, OAuth  
Backend: Spring Boot 3.x, Java 17  
Database: PostgreSQL 15  
Cloud & Storage: AWS S3  
Email Notifications: Gmail SMTP  

---

## 🌐 Live Demo


[Visit Website](https://b2-b-meat-web-pdvm.vercel.app/)

---

## 🛠️ Set Up Guide

### Frontend Setup

Create a `.env` file in the frontend root directory and add:

```
For now no ENV variables is required but still its good practice to have one 
```


Install dependencies and start the frontend:

```bash
cd frontend
npm install
npm run dev
# For production
npm run build
npm start
```

Backend Setup

In IntelliJ:
Run → Edit Configurations → select your Spring Boot app → Environment variables → click ... and add your .env values like:
DB_HOST=localhost;DB_PORT=5432;DB_NAME=meattruck;DB_USER=postgres;DB_PASS=1234;

Create a .env file in the backend root directory:
```
TRELLO_API_KEY=YOUR_TRELLO_API_KEY
TRELLO_API_TOKEN=YOUR_TRELLO_API_TOKEN


```

### 📸 Video Demo

[Visit Demo](https://drive.google.com/file/d/1tK3rJTgJyFRQu-jigQaBSbvubDfOwFS0/view?usp=sharing)


### ⚙️ Environment

Node.js >= 18

Java 17

PostgreSQL 15

IntelliJ IDEA / VS Code


### 📄 License

This project is licensed under the MIT License - see the LICENSE
 file for details.

### ❤️ Acknowledgements

Thanks to Razorpay for payment integration

Thanks to AWS for storage and hosting

Inspired by real-world bulk meat trading platforms