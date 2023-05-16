import { Router } from "express";

import { signUpFactory } from "../SignUp/SignUpFactory";
import { signInFactory } from "../SignIn/SignInFactory";

export const authRoutes = Router();

authRoutes.route('/login')
  .post((request, response) => { return signInFactory().handle(request, response) } )

authRoutes.route('/register')
  .post((request, response) => { return signUpFactory().handle(request, response) } )