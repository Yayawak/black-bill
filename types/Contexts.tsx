import { Dispatch, SetStateAction } from "react"

type TAppContext = {
    isSuccessLogin : boolean
    // setIsSuccessLogin? : Dispatch<SetStateAction<boolean>>
    setIsSuccessLogin? : (val : boolean) => void
    // isSuccessLogin : boolean
}

export default TAppContext
