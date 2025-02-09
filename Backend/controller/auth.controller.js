/* eslint-disable no-undef */
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { AuthModal } = require("../models/auth.model");

const register = async (req, res) => {
 const { email, username, password } = req.body;
 try {
   const existuser = await AuthModal.findOne({ email });
   if (existuser) {
     return res
       .status(401)
       .json({ status: "Error", msg: `${username} is already Present` });
   }
   const hashed = await bcrypt.hash(password, 10);
   const newUser = await AuthModal({
     email,
     username,
     password: hashed,
   });
   await newUser.save();
   return res.status(201).json({
     status: "success",
     msg: "registration complete",
     data: { newUser },
   });
 } catch (e) {
   return res
     .status(500)
     .json({ status: "internal server error", msg: "lost server", e });
 }
};

const login = async (req, res) => {
    const { email, password } = req.body;
   try {
     const user = await AuthModal.findOne({ email });
     if (!user) {
       return res
         .status(401)
         .json({ status: "unauthorised", msg: "user is not Found" });
     }
     if (await bcrypt.compare(password, user.password)) {
       const token = jwt.sign(
         { email: user.email, Name: user.username },
         "Login",
         { expiresIn :"1hr" }
       );
       const expireToken = jwt.verify(token, "Login");
       return res
         .status(200)
         .json({
           status: "success",
           msg: `${user.username} is Logged In`,
           data: {
             token,
             email: user.email,
             username: user.username,
             expireIn: expireToken.exp
           },
         });
     } else {
       return res
         .status(404)
         .json({ status: "error", msg: "password is Invalid" });
     }
   } catch (e) {
     return res
       .status(500)
       .json({
         status: "error",
         msg: "Something went wrong",
         data: { error: e.message },
       });
   }
};

module.exports = { register, login };
