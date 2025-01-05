import React from 'react'
import BronzeBtn from '../../components/common/BronzeBtn'

const index = () => {
    return (
        <section className=" bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/images/login-bg.jpg')" }}
        >
            <div className="w-full max-w-screen-xl h-screen px-5 md:px-20 py-5 flex justify-end">
                <div className="grid max-w-1/2 items-center justify-around">
                    <div className="grid opacity-80 gap-3 text-white">
                        <div>
                            <img src="/images/logo.png" alt="logo" className=" w-8  mx-auto" />
                        </div>
                        <div>
                            <img src="/images/text-logo.png" alt="logo" className="w-28 mx-auto" />
                        </div>
                        <div className="py-5">
                            <p className="font-sairaCondensed text-md text-customGrey tracking-widest">
                                Welcome Back to Fitzone - Stay Committed, Stay Strong, Stay Fit!
                            </p>
                        </div>
                    </div>

                    <div className="grid gap-10 font-sairaCondensed text-customGrey tracking-widest text-sm">
                        <div>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                className="block w-full p-2 border-b border-bronze bg-transparent "
                            />
                        </div>

                        <div>
                            <input
                                type="password"
                                name="password"
                                placeholder="Enter your password"
                                className="block w-full p-2 border-b border-bronze bg-transparent"
                            />
                        </div>
                    </div>
                    <div className="flex font-sairaCondensed text-sm justify-between pb-5 text-customGrey tracking-widest items-center">
                        <div>
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    name="terms"
                                    className="mr-3 size-4"
                                />
                                <p>Remember me</p>
                            </label>
                        </div>

                        <div>
                            <p>Forgot Password?</p>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <BronzeBtn to="#aboutUs" text="Login" classname="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default index