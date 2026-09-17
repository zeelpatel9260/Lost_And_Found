import { useState } from "react"
import { EyeIcon, EyeSlashIcon, LockIcon, EnvelopeIcon, UserIcon, CodeIcon, ArrowLeftIcon } from "@phosphor-icons/react";

export default function AdminAuth() {
    const [isLogin, setIsLogin] = useState(false);

    const [signupData, setSignupData] = useState({
        name: "",
        phone_no: "",
        email: "",
        code: "",
        password: "",
        c_password: "",
        otp: ""
    });

    const [loginData, setLoginData] = useState({
        email: "",
        code: "",
        password: ""
    });

    const [viewPw, setViewPw] = useState(false)
    const [viewCPw, setViewCPw] = useState(false)

    function changeViewPw() {
        setViewPw((curr) => {
            return !curr
        })
    }

    function changeViewCPw() {
        setViewCPw((curr) => {
            return !curr
        })
    }

    function onSignupChange(event) {
        setSignupData((prev) => ({
            ...prev,
            [event.target.name]: event.target.value
        }));
    }

    function onLoginChange(event) {
        setLoginData((prev) => ({
            ...prev,
            [event.target.name]: event.target.value
        }));
    }

    function onSubmit(event) {
        event.preventDefault()
        isLogin ?
            setLoginData({
                email: "",
                code: "",
                password: ""
            })
            :
            setSignupData({
                name: "",
                phone_no: "",
                email: "",
                code: "",
                password: "",
                c_password: "",
                otp: ""
            })
    }
    return (
        <div className="
        bg-(--pure-white)
        flex 
        flex-col
        items-center 
        w-100
        h-fit
        border
        rounded-2xl
        gap-5
        ">



            <div className="relative flex w-55 h-10 mt-4 overflow-hidden rounded-lg border">

                {/* Active Sign Up Background */}
                {!isLogin && (
                    <div
                        className="absolute inset-0 bg-(--bg) z-0"
                        style={{
                            clipPath: "polygon(0 0, 53% 0, 47% 100%, 0 100%)"
                        }}
                    />
                )}

                {/* Active Login Background */}
                {isLogin && (
                    <div
                        className="absolute inset-0 bg-(--bg) z-0"
                        style={{
                            clipPath: "polygon(53% 0, 100% 0, 100% 100%, 47% 100%)"
                        }}
                    />
                )}

                {/* Sign Up Button */}
                <button
                    type="button"
                    onClick={() => setIsLogin(false)}
                    className={`relative z-10 flex-1 h-full text-2xl font-semibold
        ${!isLogin ? "text-(--dark-green)" : ""}`}
                >
                    Sign Up
                </button>

                {/* Login Button */}
                <button
                    type="button"
                    onClick={() => setIsLogin(true)}
                    className={`relative z-10 flex-1 h-full text-2xl font-semibold
        ${isLogin ? "text-(--dark-green)" : ""}`}
                >
                    Login
                </button>

                {/* Diagonal Separator */}
                <div
                    className="pointer-events-none absolute left-1/2 top-1/2
        h-[calc(100%+16px)] w-px
        -translate-x-1/2 -translate-y-1/2 rotate-20
        bg-black z-20"
                />

            </div>

            <div>
                {/* <UserRound size={80} strokeWidth={1} className="text-white"/> */}
                <svg width="100" height="100" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="bg-[linear-gradient(90deg,#255A4F_0%,#2F6F62_100%)] rounded-full">
                    {/* <defs>
                        <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stop-color="#F33FB5"/>
                        <stop offset="50%" stop-color="#C08CDD"/>
                        <stop offset="100%" stop-color="#F09BC0"/>
                        </linearGradient>
                    </defs> */}

                    <circle cx="100" cy="100" r="98" fill="url(#bgGradient)" />
                    <circle cx="100" cy="80" r="28" fill="#FFFFFF" fill-opacity="0.9" />

                    <path d="M 50 165
                            C 50 125 72 108 100 108
                            C 128 108 150 125 150 165
                            Z"
                        fill="#FFFFFF" fill-opacity="0.9" />

                    <clipPath id="circleClip">
                        <circle cx="100" cy="100" r="98" />
                    </clipPath>
                </svg>
            </div>
            {
                isLogin ? (
                    <form className="flex flex-col gap-4">
                        <div className="flex border rounded-lg px-2 py-1">
                            {/* <Mail /> */}
                            <EnvelopeIcon size={24} className="text-(--green)" />
                            <input type="text" placeholder="Email" name="email" id="email" value={loginData.email} onChange={onLoginChange}
                                className="w-70 px-2 focus:outline-none focus:ring-0" />
                        </div>

                        <div className="flex border rounded-lg px-2 py-1">
                            <LockIcon size={24} className="text-(--green)" />
                            <input type={viewPw ? "text" : "password"} placeholder="Password" name="password" id="password" value={loginData.password} onChange={onLoginChange}
                                className="w-70 px-2 focus:outline-none focus:ring-0" />
                            {
                                viewPw ?
                                    <EyeSlashIcon size={24} strokeWidth={2} className="hover:cursor-pointer text-(--green)" onClick={changeViewPw} />
                                    :
                                    <EyeIcon size={24} strokeWidth={2} className="hover:cursor-pointer text-(--green)" onClick={changeViewPw} />
                            }
                        </div>

                        <button className="flex flex-col items-center justify-center font-semibold border rounded-lg w-full h-10 hover:cursor-pointer bg-[linear-gradient(90deg,#255A4F_0%,#2F6F62_100%)] text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(47,111,98,0.5)] hover:brightness-110" onClick={onSubmit}>Login</button>

                        <div className="flex justify-center h-9 mb-4 ">
                            <button className="border rounded-lg flex items-center gap-2 px-2 text-(--orange) font-semibold hover:cursor-pointer transition-all duration-200 hover:bg-(--orange) hover:text-white" onClick={(event) => event.preventDefault()}>
                                <ArrowLeftIcon size={24} />
                                User Login
                            </button>
                        </div>
                    </form>
                )

                    :

                    (
                        <form className="flex flex-col gap-4">
                            {/* <label htmlFor="name">Name: </label>
                <br /> */}
                            <div className="flex border rounded-lg px-2 py-1">
                                <UserIcon size={24} className="text-(--green)"/>
                                <input type="text" placeholder="Name" name="name" id="name" value={signupData.name} onChange={onSignupChange} className="w-70 px-2 focus:outline-none focus:ring-0" />
                            </div>

                            {/* <label htmlFor="email">Email: </label>
                <br /> */}
                            <div className="flex border rounded-lg px-2 py-1">
                                {/* <Mail /> */}
                                <EnvelopeIcon size={24} className="text-(--green)"/>
                                <input type="text" placeholder="Email" name="email" id="email" value={signupData.email} onChange={onSignupChange}
                                    className="w-70 px-2 focus:outline-none focus:ring-0" />
                            </div>

                            {/* <label htmlFor="code">Code: </label>
                <br /> */}
                            <div className="flex border rounded-lg px-2 py-1">
                                <CodeIcon size={24} className="text-(--green)"/>
                                <input type="text" placeholder="Code" name="code" id="code" value={signupData.code} onChange={onSignupChange}
                                    className="w-70 px-2 focus:outline-none focus:ring-0" />
                            </div>

                            {/* <label htmlFor="password">Password: </label>
                <br/> */}
                            <div className="flex border rounded-lg px-2 py-1">
                                {/* <LockKeyhole /> */}
                                <LockIcon size={24} className="text-(--green)"/>
                                <input type={viewPw ? "text" : "password"} placeholder="Create a password" name="password" id="password" value={signupData.password} onChange={onSignupChange}
                                    className="w-70 px-2 focus:outline-none focus:ring-0" />
                                {
                                    viewPw ?
                                        <EyeSlashIcon size={24} strokeWidth={2} className="hover:cursor-pointer text-(--green)" onClick={changeViewPw} />
                                        :
                                        <EyeIcon size={24} strokeWidth={2} className="hover:cursor-pointer text-(--green)" onClick={changeViewPw} />
                                }
                            </div>

                            {/* <label htmlFor="c_password">Confirm Password: </label>
                <br/> */}
                            <div className="flex border rounded-lg px-2 py-1">
                                {/* <LockKeyhole /> */}
                                <LockIcon size={24} className="text-(--green)"/>
                                <input type={viewCPw ? "text" : "password"} placeholder="Confirm password" name="c_password" id="c_password" value={signupData.c_password} onChange={onSignupChange}
                                    className="w-70 px-2 focus:outline-none focus:ring-0" />
                                {
                                    viewCPw ?
                                        <EyeSlashIcon size={24} strokeWidth={2} className="hover:cursor-pointer text-(--green)" onClick={changeViewCPw} />
                                        :
                                        <EyeIcon size={24} strokeWidth={2} className="hover:cursor-pointer text-(--green)" onClick={changeViewCPw} />
                                }
                            </div>

                            <button className="flex flex-col items-center justify-center font-semibold border rounded-lg w-full h-10 hover:cursor-pointer bg-[linear-gradient(90deg,#255A4F_0%,#2F6F62_100%)] text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(47,111,98,0.5)] hover:brightness-110" onClick={onSubmit}>Sign Up</button>

                            <div className="flex justify-center h-9 mb-4 ">
                                <button className="border rounded-lg flex items-center gap-2 px-2 text-(--orange) font-semibold hover:cursor-pointer transition-all duration-200 hover:bg-(--orange) hover:text-white" onClick={(event) => event.preventDefault()}>
                                    <ArrowLeftIcon size={24} />
                                    User Sign Up
                                </button>
                            </div>
                        </form>
                    )
            }
        </div>

    )
}