import { Request, Response, NextFunction, Router } from "express";
import { StatusCodes } from "http-status-codes";
import JWT from "jsonwebtoken";
import basciAuthenticationMiddleware from "../middlewares/basic-authentication.middleware";
import jwtAuthenticationMiddleware from "../middlewares/jwt-authentication.middleware";
import ForbiddenError from "../models/errors/forbidden.error.model";

const authorizationRoute = Router();

authorizationRoute.post('/token', basciAuthenticationMiddleware, async (req: Request, res: Response, next: NextFunction) => {
    try {
        // "iss" - O domínio da aplicação geradora do token
        // "sub" - É o assunto do token, mas é muito utilizado para guardar o ID do usuário
        // "aud" - Define quem pode usar o token
        // "exp" - Data para expiração do token
        // "nbf" - Define uma data para qual o token não pode ser aceito antes dela
        // "iat" - DAta de criação do token
        // "jti" - O id do token
        
        const user = req.user;

        if(!user) {
            throw new ForbiddenError('Usuário não informado!');
        }

        const jwtPayload = { username: user.username };
        const jwtOptions = { subject: user?.uuid };
        const secretKey = 'my_secret_key';

        const jwt = JWT.sign(jwtPayload, secretKey, jwtOptions);

        res.status(StatusCodes.OK).json({ token: jwt });

    } catch (error) {
        next(error);
    }
});

authorizationRoute.post('/token/validate', jwtAuthenticationMiddleware, (req: Request, res: Response, next: NextFunction) => {
    res.sendStatus(StatusCodes.OK);
});

export default authorizationRoute;