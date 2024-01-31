import { FC } from "react"
import { TPair } from "../types/LRPair"

const LRPair : FC = (prop : TPair) => {
    return (<div className="inline-flex w-[100%] h-[50%]">
        <div className="text-lg font-bold">
            {prop.left}
        </div>
        <div className="">
            {prop.right}
        </div>
    </div>)
}

export default LRPair
