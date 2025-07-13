"use client";
import React, { useEffect, useRef } from 'react'
import Image from "next/image";
import { easeIn, easeInOut, motion, useAnimate, useAnimation, useInView } from "framer-motion";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";
import { Button } from './ui/moving-border';
import { HoverBorderGradient } from './ui/hover-border-gradient';

function About() {

    // const ref = useRef(null);
    // const isInView = useInView(ref,{once:true});
    // const maincontrol = useAnimation();

    // useEffect(() => {
    //     if(isInView){
    //         maincontrol.start('visible')
    //     }
    // },[isInView])

    return (
        <div className='lg:py-28 lg:mx-72' id='aboutme'

        >
            <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -60 }}
                transition={{ duration: 0.3 }}
                className='text-center space-y-4 '>
                <h1 className='text-4xl md:text-7xl font-bold'>About Me</h1>
                {/* <p className='tracking-wide text-sm'>A Frontend Developer, developing interaction between humans & brands</p> */}
            </motion.div>

            {/* Contents */}
            <div className='grid grid-rows-2 md:grid-rows-1 lg:grid-cols-10 lg:my-20 my-10  '>

                <motion.section
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className='  md:col-span-6 flex flex-col items-start justify-between p-6 gap-9'>
                    <h1 className='text-2xl  lg:text-5xl font-semibold'>Passionate web developer creating engaging, user-friendly designs.</h1>
                    <p className='text-sm text-justify lg:text-xl'>Passionate frontend developer focused on polished, user-first experiences
                        <br />
                        <br />Skilled frontend developer with a solid understanding of JavaScript, HTML, React. Looking for opportunities to apply my knowledge and contribute to innovative projects
                    </p>
                    <div className='flex flex-row gap-5 mx-auto md:mx-0'>
                        <HoverBorderGradient
                            containerClassName="rounded-[1.75rem]"
                            as='button'
                            onClick={()=> window.open('https://drive.google.com/file/d/1jq05Fx5lDBCBpy8q8F227mRVo7bNnZGV/view?usp=sharing', '_blank')}
                            className="text-sm bg-black border rounded-[28px] px-6 py-5">
                            Download CV
                        </HoverBorderGradient>
                        <Link href='#contactme'>
                        <Button
                            borderRadius="1.75rem"
                            className=" bg-slate-800 text-white  border-slate-800"
                        >
                            Contact Me
                        </Button>
                        </Link>
                    </div>
                </motion.section>

                {/* Image */}
                <motion.section
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 50 }}
                    transition={{ duration: 0.5 }}
                    className=' md:col-span-4 mx-auto '>
                    <CardContainer className="inter-var py-0">
                        <CardBody className="  relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] bg-black border-white/[0.2] w-full md:w-[24rem]  h-auto rounded-xl p-6 border">

                            <CardItem translateZ="100" className="w-full ">
                                <Image
                                    src="/photo.jpg"
                                    height="500"
                                    width="500"
                                    className="w-52 md:w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                    alt="thumbnail"
                                />
                            </CardItem>

                        </CardBody>
                    </CardContainer>
                </motion.section>

            </div>

        </div>
    )
}

export default About