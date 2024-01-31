import { NextPage } from "next";
import { useContext, useEffect } from "react";
import AAppContext from "../../contexts/AAppContext";

const BillPage : NextPage = (prop) => {
    const {isSuccessLogin} = useContext(AAppContext)
    useEffect(() => {
        console.log("Start Render Bill Page")
        console.log("is success login = " + isSuccessLogin)
    }, [])
    return <div>
        { isSuccessLogin ?
            <>
                BillPage
                {/* //todo : get data bill from api (api from db) */}
            </>
            :
            <>
                404 Error you must login first go to login Page Here
            </>
        }
    </div>
}

export default BillPage
