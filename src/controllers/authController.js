import * as usersService from "./../services/authService.js";

export async function signUp(req, res) {
        const { name, email, password } = req.body;
    
        await usersService.signUp(name, email, password);

        res.sendStatus(201);
}

export async function signIn (req, res) {
        const { email, password } = req.body;
    
        const token = usersService.signIn(email, password);
    
        res.send({
          token,
        });
}
  