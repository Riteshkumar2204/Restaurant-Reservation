// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import { dbConnection } from "./database/dbConnection.js";
// import { errorMiddleware } from "./middlewares/error.js";
// import reservationRouter from "./routes/reservationRoute.js";

// const app = express();
// dotenv.config({ path: "./config/config.env" })


// app.use(
//   cors({
//     origin: [process.env.FRONTEND_URL],
//     methods: ["POST"],
//     credentials: true,
//   })
// );
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use("/api/v1/reservation", reservationRouter);

// dbConnection();
// app.use(errorMiddleware)

// export default app;


// app.js or index.js


import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnection } from "./database/dbConnection.js";
import { errorMiddleware } from "./middlewares/error.js";
import reservationRouter from "./routes/reservationRoute.js";

// Load environment variables from ./config/config.env
dotenv.config({ path: "./config/config.env" });

const app = express();

// ✅ Log the allowed frontend origin(s)
console.log("FRONTEND_URL =", process.env.FRONTEND_URL);

// ✅ Allow multiple known frontend origins
const allowedOrigins = [
  process.env.FRONTEND_URL || "http://localhost:5173",
  "http://localhost:5173",
  "https://restaurant-reservation-lyart.vercel.app/", // replace with your actual vercel domain
];

// ✅ CORS setup with dynamic origin checking
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("CORS Error: Origin not allowed -> " + origin));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// ✅ Express parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Optional debug route to verify backend is alive
app.get("/ping", (req, res) => {
  res.json({ message: "pong" });
});

// ✅ Routes
app.use("/api/v1/reservation", reservationRouter);

// ✅ DB connection
dbConnection();

// ✅ Global error middleware
app.use(errorMiddleware);

export default app;
