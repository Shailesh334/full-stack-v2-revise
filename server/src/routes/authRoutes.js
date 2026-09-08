import express from "express";
import bcrypt from "bcrypt";
import db from "../db.js";
import jwt from "jsonwebtoken";
import prisma from "../PrismaClient.js";

const router = express.Router();

router.post("/register", async (req, res) => {
  const { username, password } = req.body;

  // create hashed password
  const hashPassWord = bcrypt.hashSync(password, 8);

  try {
    // Store user into db
    const user = await prisma.user.create({
        data : {
          username : username,
          password : hashPassWord  
        }
    })

    // create token
    const token = jwt.sign(
      { id: user.id },
      process.env.JWT_SECRET,
      { expiresIn: "24h" },
    );

    // send token
    res.json({ token });
  } catch (err) {
    console.log(err.message);
    res.status(502).json({ message: err.message });
  }
});

router.post("/login", (req, res) => {
    const {username , password} = req.body;

    try{
        // Get user from db
        const getUser = db.prepare(`
            SELECT * FROM users WHERE username = ?
        `)
        const user = getUser.get(username)
        
        // Check if user exist
        if(!user){
            return res.status(404).json({message : "User not found "})
        }

        // compare passwrd
        const isPassValid = bcrypt.compareSync(password , user.password)

        if(!isPassValid){
            return res.status(401).send({message : "Invalid password "})
        }

        // generate token
        const token = jwt.sign({id : user.id } , process.env.JWT_SECRET , {expiresIn : '24h'})
        res.send({token})

        
    }catch(err){
        console.log(err.message);
        res.status(503)
    }
});

export default router;
