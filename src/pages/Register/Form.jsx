import React, { useState } from 'react';
import authService from '../../services/auth.service';
import { useNavigate } from 'react-router-dom';

const Form = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        mobileNumber: '',
        address: '',
        gender: '',
        password: '',
        confirmPassword: '',
        terms: false
    });

    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = async (e) => {
        console.log(formData);
        e.preventDefault();
        setError('');
        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match");
            return;
        }
        if(!formData.terms) {
            setError("Please agree to the terms and conditions");
            return;
        }
        try {
            const response = await authService.register(formData);
            alert("Registration successful! Redirecting to login page...");
            navigate('/login');
            // Handle successful registration (e.g., redirect to login page)
        } catch (error) {
            console.error(error);
            if(error.response.status === 409) {
                setError("Email already exists. Please login.");
                return;
            }
            if(error.response.status === 400) {
                setError(error.response.data.message[0] || error.response.data.message);
                return;
            }
            setError("Registration failed. Please try again.");
        }
    };

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
                    <form className="flex flex-col gap-5 py-10 px-20 font-sairaCondensed text-customGrey tracking-widest text-lg" onSubmit={handleSubmit}>
                        {error && <div className="text-red-500">{error}</div>}
                        <label>
                            First Name:
                            <input
                                type="text"
                                name="firstName"
                                placeholder="Enter your first name"
                                className="block w-full mt-2 p-2 border-2 border-bronze bg-transparent"
                                value={formData.firstName}
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            Last Name:
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Enter your last name"
                                className="block w-full mt-1 p-2 border-2 border-bronze bg-transparent"
                                value={formData.lastName}
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            Email:
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                className="block w-full mt-1 p-2 border-2 border-bronze bg-transparent"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            Mobile Number:
                            <input
                                type="tel"
                                name="mobileNumber"
                                placeholder="Enter your mobile number"
                                className="block w-full mt-1 p-2 border-2 border-bronze bg-transparent"
                                value={formData.mobileNumber}
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            Address:
                            <input
                                type="text"
                                name="address"
                                placeholder="Enter your address"
                                className="block w-full mt-1 p-2 border-2 border-bronze bg-transparent"
                                value={formData.address}
                                onChange={handleChange}
                            />
                        </label>

                        <label>
                            Gender:
                            <div className="flex gap-20 mt-1">
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="MALE"
                                        className="mr-2 size-5"
                                        checked={formData.gender === 'MALE'}
                                        onChange={handleChange}
                                    />
                                    Male
                                </label>
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="FEMALE"
                                        className="mr-2 size-5"
                                        checked={formData.gender === 'FEMALE'}
                                        onChange={handleChange}
                                    />
                                    Female
                                </label>
                            </div>
                        </label>

                        <label>
                            Password:
                            <input
                                type="password"
                                name="password"
                                placeholder="Enter your password"
                                className="block w-full mt-1 p-2 border-2 border-bronze bg-transparent"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            Confirm Password:
                            <input
                                type="password"
                                name="confirmPassword"
                                placeholder="Confirm your password"
                                className="block w-full mt-1 p-2 border-2 border-bronze bg-transparent"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                            />
                        </label>

                        <div>
                            <label className="flex items-center pt-10">
                                <input
                                    type="checkbox"
                                    name="terms"
                                    className="mr-4 size-5"
                                    checked={formData.terms}
                                    onChange={handleChange}
                                />
                                <p className="font-sairaCondensed text-customGrey text-xl tracking-wider">I have read and agree to the Privacy Policy and Terms of Service.</p>
                            </label>
                        </div>
                        <button type="submit" className="mt-4 p-4 bg-bronze font-koulen border borde-white text-white justify-center text-xl tracking-widest">
                            Register Now
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Form;