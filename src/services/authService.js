import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import usersRepository from "./../repositories/usersRepository.js";

async function signUp(name, email, password){
    if (!name || !email || !password) {
        throw {type: 'Unprocessable Entity'};
      }
  
      const existingUsers = await usersRepository.findUser(email);
  
      if (existingUsers.rowCount > 0) {
        throw {type: 'Conflict'};
      }
  
      const hashedPassword = bcrypt.hashSync(password, 12);
  
      return await usersRepository.insertUser(name, email, hashedPassword);
}

async function signIn(email, password){
    if (!email || !password) {
        throw {type: 'Unprocessable Entity'};
      }
  
      const { rows } = await usersRepository.findUser(email);
      const [user] = rows;
  
      if (!user || !bcrypt.compareSync(password, user.password)) {
        throw {type: 'Unauthorized'}
      }
  
      const token = jwt.sign(
        {
          id: user.id,
        },
        process.env.JWT_SECRET
      );

      return token;
}

export {
    signUp,
    signIn
}