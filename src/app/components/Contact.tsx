import React from 'react';
import { BackgroundBeams } from './ui/background-beams';

export function ContactForm() {
    return (
        <div className='mx-auto py-48 px-9 relative overflow-hidden'>
            <BackgroundBeams />
            <div id='contactme' className='max-w-[40rem] mx-auto z-10 text-center'>
                <h1 className='text-4xl md:text-6xl font-bold text-white'>Connect with me</h1>
                <div className='mt-16 space-y-8'>
                    <p className='text-2xl md:text-4xl font-semibold text-gray-300'>
                        Phone: <a href="tel:7045617506" className='text-indigo-400 hover:underline'>+91 7045617506</a>
                    </p>
                    <p className='text-2xl md:text-4xl font-semibold text-gray-300'>
                        Email: <a href="mailto:govindashah603@gmail.com" className='text-indigo-400 hover:underline'>govindashah603@gmail.com</a>
                    </p>
                </div>
                <p className="mt-8 text-sm text-gray-500">
                    I look forward to hearing from you!
                </p>
            </div>
        </div>
    );
}
