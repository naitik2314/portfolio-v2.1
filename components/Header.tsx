import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { Social } from '../typings';

type Props = {
    socials: Social[]
};

export default function Header({ socials }: Props) {
    return (
        <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
            <motion.div
                initial={{
                    x: -500,
                    opacity: 0,
                    scale:0.5
                }}
                animate={{
                    x:0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 1.2,
                }}
                className='flex flex-row items-center'>
                {/*Social Icons*/}
                <SocialIcon
                    url='https://github.com/naitik2314/'
                    fgColor='gray'
                    bgColor='transparent'
                />
                <SocialIcon
                    url='https://www.linkedin.com/in/naitik-shah-49baba1a1/'
                    fgColor='gray'
                    bgColor='transparent'
                />
                <SocialIcon
                    url='https://www.youtube.com/@naitikshah7812'
                    fgColor='gray'
                    bgColor='transparent'
                />
            </motion.div>
            
            
            <Link href="#contact">
            <motion.div
                initial={{
                    x: 500,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{duration: 1.2}}
                className='flex flex-row items-center text-gray-300 cursor-pointer'>
                <SocialIcon
                    className='cursor-pointer'
                    network='email'
                    fgColor='gray'
                    bgColor='transparent'
                />
                <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>
                    Get In Touch
                </p>
            </motion.div>
            </Link>
        </header>
    );
}