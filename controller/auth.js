import User from "../models/auth.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

export const signupUser = async (req, res) => {
  try {
    const { name,email, password,role } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        message: "Required filled is missing",
      });
    }
    const existUser = await User.findOne({ email });
    if (existUser) {
      return res.status(401).json({
        message: "User already exist!",
      });
    }
    const token = jwt.sign(
        {name},
        process.env.JWT_SECRET_KEY,
        {expiresIn:"1d"}
    )
    // console.log(token)
    const salt = await bcrypt.genSalt(10)
    const hashedPass = await bcrypt.hashSync(password,salt)
    const userObj = {
        name,
        email,
        password:hashedPass,
        token,
        role
    }
    const user = await User.create(userObj);
    return res.status(200).json({
      message: "User signup succesfully",
      user,
    });
  } catch (error) {
    return res.status(500).json({
      message: "An errror occurred while signing up!",
      error: error.message,
    });
  }
};


export const loginUser = async (req, res) => {
  try {
    const { name,email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        message: "Required filled is missing",
      });
    }
    const existUser = await User.findOne({ email });
    if (!existUser) {
      return res.status(401).json({
        message: "Please login first!",
      });
    }
    const token = jwt.sign(
        {name:existUser.name},
        process.env.JWT_SECRET_KEY,
        {expiresIn:"1d"}
    )
    // console.log(token)
    // const salt = await bcrypt.genSalt(10)
    const comparePass = await bcrypt.compareSync(password,existUser.password)
    if(!comparePass){
      return res.status(401).json({
        message:"Please enter correct password!"
      })
    }
    return res.status(200).json({
      message: "login signup succesfully",
      existUser,
    });
  } catch (error) {
    return res.status(500).json({
      message: "An errror occurred while signing up!",
      error: error.message,
    });
  }
};


