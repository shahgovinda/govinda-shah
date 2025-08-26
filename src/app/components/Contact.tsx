import React from 'react';
import { BackgroundBeams } from './ui/background-beams';

export function ContactInfo() {
  return (
    <div className='mx-auto py-48 px-9 relative overflow-hidden'>
      <BackgroundBeams />
      
      <div id='contactme' className='max-w-[40rem] mx-auto z-10 text-center space-y-16'>
        
        <h1 className='text-4xl md:text-6xl font-bold text-white'>Connect with me</h1>
        
        <div className='bg-zinc-900/50 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-zinc-700/50 shadow-2xl'>
          
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12'>
            
            <div className='flex flex-col items-center justify-center space-y-2'>
              <h2 className='text-xl text-gray-400 font-medium'>Phone</h2>
              <a 
                href="tel:7045617506" 
                className='text-2xl md:text-3xl font-semibold text-indigo-400 hover:text-indigo-300 transition-colors duration-300'
              >
                +91 7045617506
              </a>
            </div>

            <div className='flex flex-col items-center justify-center space-y-2'>
              <h2 className='text-xl text-gray-400 font-medium'>Email</h2>
              <a 
                href="mailto:govindashah603@gmail.com" 
                className='text-2xl md:text-3xl font-semibold text-indigo-400 hover:text-indigo-300 transition-colors duration-300'
              >
                govindashah603@gmail.com
              </a>
            </div>

          </div>
          
        </div>

        <p className="text-gray-500 font-light text-base md:text-lg">
          I look forward to hearing from you and discussing potential collaborations!
        </p>
        
      </div>
      
    </div>
  );
}
