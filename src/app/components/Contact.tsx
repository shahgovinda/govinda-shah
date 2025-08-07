import React from 'react';
import { motion } from "framer-motion";
import { Mail, Phone } from 'lucide-react'; // Mail aur Phone icons import kiye hain

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
                        <Phone size={28} />
                        <span className='text-xl md:text-2xl font-medium'>{phoneNumber}</span>
                    </a>

                    {/* Email ID Section */}
                    <a 
                        href={`mailto:${emailId}`} 
                        className='flex items-center gap-4 text-white hover:text-green-400 transition-colors duration-300 transform hover:scale-105'
                    >
                        <Mail size={28} />
                        <span className='text-xl md:text-2xl font-medium'>{emailId}</span>
                    </a>
                </div>
            </div>
        </div>
    );
}
