# MERN Contact Web Application

A simple and modern Contact Manager built using the MERN stack (MongoDB, Express, React, Node.js).  
Easily add, view, edit, and delete contacts with a responsive, Bootstrap-powered interface.

---

## Features

- Add new contacts (Name, Email, Phone)
- Edit and delete existing contacts
- View all contacts instantly
- Responsive and clean Bootstrap UI
- Toast notifications for feedback

---

## Technologies Used

- **Frontend:** React, Axios, Bootstrap, React Toastify
- **Backend:** Node.js, Express.js, MongoDB, Mongoose
- **Other:** dotenv for environment variables, CORS

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/MERN_ContactWebApplication.git
cd MERN_ContactWebApplication
```

### 2. Backend Setup

```bash
cd API
npm install
```

Create a `.env` file in the `API/` directory:
```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/mydb
```

Start the backend server:
```bash
node server.js
```
Server runs at [http://localhost:5000](http://localhost:5000)

---

### 3. Frontend Setup

```bash
cd ../CLIENT
npm install
```

(Optional) Create a `.env` file in `CLIENT/` if you need to specify the API URL:
```env
VITE_API_URL=http://localhost:5000
```

Start the frontend:
```bash
npm start
# or, if using Vite:
npm run dev
```
App runs at [http://localhost:3000](http://localhost:3000) or [http://localhost:5173](http://localhost:5173)

---

## Usage

1. **Add Contact:**  
   Click the **Add Contact** button, fill in the Name, Email, and Phone fields, then submit. The new contact will appear in the list below.

2. **Edit Contact:**  
   Click the **Edit** button on any contact card, update the information, and submit. Changes will be reflected instantly.

3. **Delete Contact:**  
   Click the **Delete** button on any contact card to remove it from the list.

4. **Toast Notifications:**  
   All actions (add, edit, delete) will show feedback messages at the top of the page.

---

## Example `.env` Files

**Backend (`API/.env`):**
```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/mydb
```

**Frontend (`CLIENT/.env`):**
```env
VITE_API_URL=http://localhost:5000
```

---

## Troubleshooting

- **MongoDB connection error:** Ensure MongoDB is running and `MONGO_URI` is correct.
- **CORS error:** Make sure CORS is enabled in your Express app.
- **Bootstrap not showing:** Ensure Bootstrap is linked in your frontend `public/index.html`.
- **Form issues:** Use unique `id` values and correct React props (`className`, `htmlFor`).

---

## License

[MIT](./LICENSE)