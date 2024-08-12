import React, { useState, useEffect } from 'react';
import Section from './Section';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Book = () => {
    const today = new Date().toISOString().split('T')[0];
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        coupon: '',
        bookingDate: '',
        slot: '',
        sport: '',
        price: ''
    });

    useEffect(() => {
        const isLoggedIn = sessionStorage.getItem('isLoggedIn');
        if (!isLoggedIn) {
            navigate('/signin');
        }else{
        // Retrieve and set name and email from sessionStorage
        const name = JSON.parse(sessionStorage.getItem('User')).name || ""
        const email = JSON.parse(sessionStorage.getItem('User')).email || ""
       
        setFormData(prevData => ({
            ...prevData,
            name: name || '',
            email: email || ''
        }));

        // Update price based on selected sport
        let price = '';
        switch (formData.sport) {
            case 'FOOTBALL':
                price = '50';
                break;
            case 'basketball':
                price = '40';
                break;
            case 'tennis':
                price = '30';
                break;
            case 'cricket':
                price = '70';
                break;
            default:
                price = '';
        }
        setFormData(prevData => ({ ...prevData, price }));
    }
    }, [formData.sport, navigate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
             const jwt = JSON.parse(sessionStorage.getItem('jwt')) || ""
             console.log(jwt);
             console.log(formData);
             
            const response = await axios.post('http://localhost:8080/bookings', {formData , jwt});
            console.log('Booking successful:', response.data);
            navigate('/thank-you');
        } catch (error) {
            console.error('Error booking:', error);
        }
    };

    return (
        <>
            <Section crosses>
                <div className="container relative z-2 max-w-[68rem] m-auto lg:flex lg:justify-between">
                    <div className="max-w-[32.875rem] mx-auto mb-12 text-center md:mb-16 lg:flex lg:flex-col lg:justify-around lg:max-w-[23.75rem] lg:m-0 lg:text-left">
                        <h2 className="h2">Join the AI revolution with Brainwave</h2>
                        <p className="hidden body-2 mt-4 text-n-4 md:block">Get started with Brainwave - AI chat app today and experience the power of AI in your conversations!</p>
                    </div>
                    <form
                        className="relative max-w-[23.5rem] mx-auto p-0.25 bg-conic-gradient rounded-3xl lg:flex-1 lg:max-w-[27.5rem] lg:m-0 xl:mr-12"
                        onSubmit={handleSubmit}
                    >
                        <div className="px-9 py-10 bg-n-8 rounded-[1.4375rem] lg:px-16 lg:py-[3.25rem]">
                            <div className="relative mb-4 lg:mb-5">
                                <input
                                    className="w-full h-14 pl-12 bg-transparent border-b border-n-1/15 font-light placeholder:text-n-4 outline-none transition-colors focus:border-n-1/30"
                                    placeholder="Name"
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    readOnly
                                />
                            </div>
                            <div className="relative mb-4 lg:mb-5">
                                <input
                                    className="w-full h-14 pl-12 bg-transparent border-b border-n-1/15 font-light placeholder:text-n-4 outline-none transition-colors focus:border-n-1/30"
                                    placeholder="Email"
                                    type="text"
                                    name="email"
                                    value={formData.email}
                                    readOnly
                                />
                            </div>
                            <div className="relative mb-4 lg:mb-5">
                                <input
                                    className="w-full h-14 pl-12 bg-transparent border-b border-n-1/15 font-light placeholder:text-n-4 outline-none transition-colors focus:border-n-1/30"
                                    placeholder="Coupon"
                                    type="text"
                                    name="coupon"
                                    value={formData.coupon}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="relative mb-4 lg:mb-5">
                                <input
                                    className="w-full h-14 pl-12 bg-transparent border-b border-n-1/15 font-light placeholder:text-n-4 outline-none transition-colors focus:border-n-1/30"
                                    placeholder="Date"
                                    type="date"
                                    name="bookingDate"
                                    value={formData.date}
                                    onChange={handleChange}
                                    min={today}
                                    required
                                />
                            </div>
                            <div className="relative mb-4 lg:mb-5">
                                <select
                                    className="w-full h-14 pl-12 bg-transparent border-b border-n-1/15 font-light placeholder:text-n-4 outline-none transition-colors focus:border-n-1/30"
                                    name="slot"
                                    value={formData.slot}
                                    onChange={handleChange}
                                    required
                                >
                                    <option className='text-neutral-950' value="" disabled>Select Slot</option>
                                    <option className='text-neutral-950' value="MORNING">morning</option>
                                    <option className='text-neutral-950' value="afternoon">Afternoon</option>
                                    <option className='text-neutral-950' value="evening">Evening</option>
                                </select>
                            </div>
                            <div className="relative mb-4 lg:mb-5">
                                <select
                                    className="w-full h-14 pl-12 bg-transparent border-b border-n-1/15 font-light placeholder:text-n-4 outline-none transition-colors focus:border-n-1/30"
                                    name="sport"
                                    value={formData.sport}
                                    onChange={handleChange}
                                    required 
                                >
                                    <option className='text-neutral-950' value="" disabled>Select Sport</option>
                                    <option className='text-neutral-950' value="FOOTBALL">football</option>
                                    <option className='text-neutral-950' value="basketball">Basketball</option>
                                    <option className='text-neutral-950' value="tennis">Tennis</option>
                                    <option className='text-neutral-950' value="cricket">Cricket</option>
                                </select>
                            </div>
                            <div className="relative mb-4 lg:mb-5">
                                <input
                                    className="w-full h-14 pl-12 bg-transparent border-b border-n-1/15 font-light placeholder:text-n-4 outline-none transition-colors focus:border-n-1/30"
                                    placeholder="Price"
                                    type="text"
                                    name="price"
                                    value={formData.price}
                                    readOnly
                                />
                            </div>
                            <button
                                className="button relative inline-flex items-center justify-center h-11 px-7 text-n-8 transition-colors hover:text-color-1 w-full"
                                type="submit"
                            >
                                <span className="relative z-10">Book now</span>
                                <svg className="absolute top-0 left-0" width="21" height="44" viewBox="0 0 21 44">
                                    <path fill="white" stroke="white" strokeWidth="2"
                                        d="M21,43.00005 L8.11111,43.00005 C4.18375,43.00005 1,39.58105 1,35.36365 L1,8.63637 C1,4.41892 4.18375,1 8.11111,1 L21,1">
                                    </path>
                                </svg>
                                <svg className="absolute top-0 left-[1.3125rem] w-[calc(100%-2.625rem)]" height="44"
                                    viewBox="0 0 100 44" preserveAspectRatio="none" fill="white">
                                    <polygon fill="white" fillRule="nonzero" points="100 0 100 44 0 44 0 0"></polygon>
                                </svg>
                                <svg className="absolute top-0 right-0" width="21" height="44" viewBox="0 0 21 44">
                                    <path fill="white" stroke="white" strokeWidth="2"
                                        d="M0,43.00005 L5.028,43.00005 L12.24,43.00005 C16.526,43.00005 20,39.58105 20,35.36365 L20,16.85855 C20,14.59295 18.978,12.44425 17.209,10.99335 L7.187,2.77111 C5.792,1.62675 4.034,1 2.217,1 L0,1">
                                    </path>
                                </svg>
                            </button>
                            <div className="mt-10 text-center">
                                <p className="text-sm font-light text-n-4">Already have an account? <a className="text-color-1 underline" href="#">Sign In</a></p>
                            </div>
                        </div>
                    </form>
                </div>
            </Section>
        </>
    );
};

export default Book;
