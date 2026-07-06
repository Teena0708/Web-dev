//JWT can be used to generate , decoding , verify .

const jwt = require("jsonwebtoken");
const zod = require("zod");

const jwtpassword = "mysecretpasswordss";

const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6);

function generateToken(email, password) {
    const emailValidation = emailSchema.safeParse(email);
    const passwordValidation = passwordSchema.safeParse(password);
    if(!emailValidation.success || !passwordValidation.success){
        return null;
    }
    const signature = jwt.sign({
        email},jwtpassword
    )
    return signature;
}

function verifyToken(token) {
    const decoded = jwt.decode(token);
    if(decoded){
        return true;
    }
    else{
        false
    }
}

function verifyToken(token){
    const verified = jwt.verify(token,jwtpassword);
    if(verified){
        return true;
    }
    else{
        false
    }
}
