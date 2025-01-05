import React from 'react'

const Form = () => {
return (
    <section className="bg-darkBrown"
    style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2))" }}
    >
        <div className="w-full max-w-screen-2xl h-auto mx-auto py-10 px-5 md:px-60">
            <div>
                <div className="flex flex-col items-center justify-center gap-5">
                    <h1 className="font-koulen text-3xl text-customGrey opacity-80 tracking-widest">
                        Join Fitzone and transform your fitness journey!
                    </h1>
                    <h2 className="font-sairaCondensed text-bronze text-xl tracking-wider font-bold">
                        Create your account, select a plan, and start your path to a healthier stronger you today.
                    </h2>
                </div>
            </div>

            <div>
                <form className="flex flex-col gap-5 py-10 px-20 font-sairaCondensed text-customGrey tracking-widest text-lg">
                    <label > 
                        First Name:
                        <input
                            type="text"
                            name="firstName"
                            placeholder="Enter your first name"
                            className="block w-full mt-2 p-2 border-2 border-bronze bg-transparent "
                        />
                    </label>
                    <label >
                        Last Name:
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Enter your last name"
                            className="block w-full mt-1 p-2 border-2 border-bronze bg-transparent "
                        />
                    </label>
                    <label >
                        Email:
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            className="block w-full mt-1 p-2 border-2 border-bronze bg-transparent"
                        />
                    </label>
                    <label >
                        Mobile Number:
                        <input
                            type="tel"
                            name="mobileNumber"
                            placeholder="Enter your mobile number"
                            className="block w-full mt-1 p-2 border-2 border-bronze bg-transparent"
                        />
                    </label>
                    <label >
                        Address:
                        <input
                            type="text"
                            name="address"
                            placeholder="Enter your address"
                            className="block w-full mt-1 p-2 border-2 border-bronze bg-transparent"
                        />
                    </label>
                    
                    <label>
                        Gender:
                        <div className="flex gap-20 mt-1">
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="male"
                                    className="mr-2 size-5"
                                />
                                Male
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="female"
                                    className="mr-2 size-5 " 
                                />
                                Female
                            </label>
                        </div>
                    </label>

                    <label >
                        Password:
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            className="block w-full mt-1 p-2 border-2 border-bronze bg-transparent"
                        />
                    </label>
                    <label className="">
                        Confirm Password:
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm your password"
                            className="block w-full mt-1 p-2 border-2 border-bronze bg-transparent"
                        />
                    </label>

                    <div>
                        <label className="flex items-center pt-10">
                            <input
                                type="checkbox"
                                name="terms"
                                className="mr-4 size-5"
                            />
                            <p className="font-sairaCondensed text-customGrey text-xl tracking-wider ">I have read and agree to the Privacy Policy and Terms of Service.</p>
                        </label>
                
            </div>  
                    <button type="submit" className="mt-4 p-4 bg-bronze font-koulen border borde-white text-white justify-center text-xl tracking-widest">
                        Register Now
                    </button>
                </form>
            </div>

           
        </div>
    </section>
)
}

export default Form