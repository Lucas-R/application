import jwt from 'jsonwebtoken';
import "dotenv/config";
import { PayloadSchema } from '../schemas/PayloadSchema';

const JWT_SECRET = process.env.JWT_SECRET as string;

export function token(payload: PayloadSchema): string {
    return jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });
}

export function checkToken(token: string) {
    return jwt.verify(token, JWT_SECRET, (err: any, user: any) => {
        if (err) return err;
    
        return user;
    });
}