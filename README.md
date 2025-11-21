# Trello Assignment

**MeatTruck** is a Full-Stack Platform where individuals and sellers can trade bulk meat and livestock.  
It is not meant for retail transactions — the platform is primarily designed for traders and dealers.  
All Government guidelines and compliance rules are followed during development.

---

## Postman Collection 
## Postman Collection  
[View Collection](https://postman.co/workspace/My-Workspace~1ed9d8d2-f6da-4674-8f5f-98100abe1643/request/38668940-42b8e47b-3f0a-424f-88e5-027aa409f04b?action=share&creator=38668940&ctx=documentation)

## 🚀 Features & Tools


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
[Visit Backend](https://trello-proj.onrender.com/)

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

```bash
cd ..
cd backend
npm install
npm run dev
# For production

npm start
```

### 🔑 How to Get Trello API Key & Token

Log in to Trello → https://trello.com

Open: https://trello.com/app-key

Copy your API Key shown on the page.

Scroll down and click "Generate Token".

Allow access → Copy the Token.

Add both to your .env:


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