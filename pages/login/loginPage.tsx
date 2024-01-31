import { NextPage } from "next";
import { ChangeEvent, useContext, useState } from "react";
import PasswordInput from "../../components/PasswordInput";
import axios, { AxiosResponse } from "axios";
import { useRouter } from "next/router";
import Image from "next/image";
import AAppContext from "../../contexts/AAppContext";

// const SakuraComponent = () => {
//     const [props] = useFriction({
//         from: {
//             transform: 'scale(0) rotate(0deg)',
//             background: 'magenta'
//         },
//         to: {
//             transform: 'scale(1) rotate(360deg)',
//             background: 'coral'
//         },
//         config: {
//             mu: .5,
//             mass: 300,
//             initialVelocity: 10,
//             repeat: Infinity
//         }
//     })
//     return <div {...props}>
//         <Image src={"/images/sakura.svg"} width={64} height={64} alt="sakura"/>
//     </div>
// }

const LoginPage: NextPage = () => {
    const [pw, setPw] = useState<string>("");
    const router = useRouter();
    const appContext = useContext(AAppContext)

    const onSubmit = () => {
        axios.post("/api/validatePw", {
            pw: pw
        })
        .then(res => {
            console.log("Matching = " + res.data.isPasswordMatch)
            if (res.data.isPasswordMatch) {
                // dbcon
                appContext.setIsSuccessLogin(true)
                router.push("/bill/billPage")
            }
        })
        .catch(er => console.error(er))

    }

    return <>
        <div className="flex flex-col items-center justify-center w-screen h-screen bg-gray-500 p-8
        "
            style={{
                // backgroundImage: `url(${bg})`
                backgroundImage: `url("https://cdn.wallpapersafari.com/51/17/61E5bv.jpg")`,
                backgroundRepeat: "repeat",
                backgroundSize: "cover"
            }}
        >
            <div className="w-full text-center text-4xl font-bold mb-8 text-slate-100
                text-outline
            ">
                Please Login :D
            </div>
            <div className="w-[80%] h-[100px] bg-green-600 inline-flex rounded-2xl">
                <div className="w-[40%] text-[35px] flex items-center justify-center
                    text-slate-200">
                    Password
                </div>
                <div className="w-[60%] flex items-center justify-center">
                    {/* <input value={pw} type="password"
                        onChange={e => onPwChange(e)}
                    // className="w-[60%]"
                    /> */}
                    <PasswordInput setPw={setPw} />
                </div>
            </div>
            <button onClick={e => onSubmit()}
                className="mt-10 bg-blue-700 w-[50%] h-[80px]
                    flex justify-center items-center rounded-full
                ">
                <div className="w-full text-center text-4xl font-bold mb-8 text-white">
                    Login
                </div>
            </button>
        </div>

        {/* <input placeholder="" type={`show ? 'password' : 'text'`}
                className="text-md block px-3 py-2 rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md
                focus:placeholder-gray-500
                focus:bg-white
                focus:border-gray-600"
        /> */}


    </>
}

export default LoginPage
