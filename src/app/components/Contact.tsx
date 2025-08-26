import React from 'react';
import { BackgroundBeams } from './ui/background-beams';

export function ContactInfo() {
  return (
    <div className='mx-auto py-48 px-9 relative overflow-hidden'>
      <BackgroundBeams />
      <div id='contactme' className='max-w-[40rem] mx-auto z-10 text-center'>
        <h1 className='text-4xl md:text-6xl font-bold text-white mb-12'>Connect with me</h1>
        
        <div className='bg-zinc-900/50 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-zinc-700/50 shadow-xl space-y-8'>
          
          <div className='flex flex-col items-center'>
            <h2 className='text-xl text-gray-400 font-medium mb-2'>Phone</h2>
            <a 
              href="tel:7045617506" 
              className='text-2xl md:text-3xl font-semibold text-indigo-400 hover:underline'
            >
              +91 7045617506
            </a>
          </div>

          <div className='flex flex-col items-center'>
            <h2 className='text-xl text-gray-400 font-medium mb-2'>Email</h2>
            <a 
              href="mailto:govindashah603@gmail.com" 
              className='text-2xl md:text-3xl font-semibold text-indigo-400 hover:underline'
            >
              govindashah603@gmail.com
            </a>
          </div>
          
        </div>

        <p className="mt-8 text-sm text-gray-500">
          I look forward to hearing from you!
        </p>
      </div>
    </div>
  );
}
