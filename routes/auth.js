import express from "express";
import  { loginUser, signupUser } from "../controller/auth.js";

const authRoutes = express.Router()

authRoutes.post("/signup",signupUser)
authRoutes.post("/login",loginUser)

export default authRoutes