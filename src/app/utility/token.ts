
import jwt, { SignOptions } from "jsonwebtoken"
export const createToken = (
    payload: { email: string; role: string },
    secret: string,
    expiresIn: string
) => {

    const option: SignOptions = {
        algorithm: "HS256",
        expiresIn: expiresIn as SignOptions["expiresIn"]
    }

    const token = jwt.sign(payload, secret, option)
    return token
};


