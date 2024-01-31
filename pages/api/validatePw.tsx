import { NextApiRequest, NextApiResponse } from "next"
// const bcrypt = require("bcrypt")
import sha256 from "sha256"
// const sha256 = require("sha256")

export default (req : NextApiRequest, res : NextApiResponse ) => {
    const method : string = req.method
    let isPwMatch : boolean = false
    if (method === "POST") {
        const pwToCheck = req.body.pw
        console.log("validateing password in api")
        isPwMatch = validatePw(pwToCheck)

        res.status(200).json({isPasswordMatch : isPwMatch})
    }
    else if (method === "GET") {
        return res.status(200).json({isPasswordMatch : isPwMatch})

    }
}

export const validatePw = (pwToCheck: string) => {
    const realPw  = "af5ca7b4d65c52c39ef485841b7bf2bdb642b0f6ef80373d45d7864bfe896230"
    return realPw == sha256(pwToCheck)
}
