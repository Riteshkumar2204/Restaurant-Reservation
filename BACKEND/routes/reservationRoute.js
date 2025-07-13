import express from "express";
import { sendreservation } from "../controller/reservation.js";

const router = express.Router();

router.post("/send", sendreservation);

export default router;