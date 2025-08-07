import React from 'react';
import { motion } from "framer-motion";

// cn utility function
export function cn(...inputs) {
    return inputs.filter(Boolean).join(' ');
}

// BackgroundBeams component ka code yahan include kiya gaya hai
const BackgroundBeams = ({ className, ...rest }) => {
    return (
        <div className={cn("h-full w-full absolute inset-0 z-0 overflow-hidden", className)} {...rest}>
            <div className="absolute inset-0 bg-black" />
            <svg
                className="absolute inset-0 z-10 h-full w-full stroke-neutral-200 [mask-image:radial-gradient(transparent,white)]"
                aria-hidden="true"
            >
                <pattern
                    id="background-beams"
                    width="100"
                    height="100"
                    patternUnits="userSpaceOnUse"
                    x="50%"
                    y="50%"
                >
                    <path d="M 100 0 L 0 0 0 100" fill="none" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#background-beams)" />
            </svg>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05)_0%,transparent_75%)]" />
        </div>
    );
};

export default function ContactForm() {
    // Phone number aur email ID ko seedhe variables me store kar liya hai
    const phoneNumber = "7045617506";
    const emailId = "govindashah603@gmail.com";

    return (
        <div className='relative overflow-hidden min-h-screen flex items-center justify-center' >
            <BackgroundBeams />
            <div id='contactme' className='relative z-10 max-w-2xl mx-auto p-8 bg-black bg-opacity-70 rounded-2xl shadow-2xl border border-gray-700'>
                <h1 className='text-3xl md:text-5xl font-bold text-center text-white mb-8'>Connect with me</h1>
                <p className='text-center text-gray-300 text-lg mb-12'>I'm always open to new opportunities. Feel free to reach out!</p>
                
                <div className='space-y-8 flex flex-col items-center'>
                    {/* Phone Number Section */}
                    <a 
                        href={`tel:${phoneNumber}`} 
                        className='flex items-center gap-4 text-white hover:text-green-400 transition-colors duration-300 transform hover:scale-105'
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                        <span className='text-xl md:text-2xl font-medium'>{phoneNumber}</span>
                    </a>

                    {/* Email ID Section */}
                    <a 
                        href={`mailto:${emailId}`} 
                        className='flex items-center gap-4 text-white hover:text-green-400 transition-colors duration-300 transform hover:scale-105'
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                        <span className='text-xl md:text-2xl font-medium'>{emailId}</span>
                    </a>
                </div>
            </div>
        </div>
    );
}
