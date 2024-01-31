import { NextApiRequest, NextApiResponse } from "next"
const bcrypt = require("bcrypt")

export default (req : NextApiRequest, res : NextApiResponse ) => {
    res.status(200).json({ pw: 'ae06ee63cf6f0019cce4038c5f10277d7a7bf9a50b244aa1d0722430d01cf670'})
}

    // todo : validate in api part
const validatePw = (pwToCheck: string) => {
    bcrypt
        .hash(pwToCheck, 256)
        .then((hash: string) => {
            console.log('Hash ', hash)
        })
        .catch(err => console.error(err.message))
}
