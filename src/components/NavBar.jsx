import React, { useState } from 'react';
import Logo from '../assets/logo white.png';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaFabook, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs'

const NavBar = () => {

    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 '>
            <div>
                <img src={Logo} alt='logo' className='w-16' />
            </div>

            {/* menu */}
            <ul className='hidden md:flex '>
                <li className='hover:text-gray-500'>Home</li>
                <li className='hover:text-gray-500'>About</li>
                <li className='hover:text-gray-500'>Skills</li>
                <li className='hover:text-gray-500'>Works</li>
                <li className='hover:text-gray-500'>Contact</li>
            </ul>

            {/* hamburger */}
            <div
                onClick={handleClick}
                className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div> 

            {/* Mobile Menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col items-center justify-center'}>
                <li className='py-6 text-3xl'>Home</li>
                <li className='py-6 text-3xl'>About</li>
                <li className='py-6 text-3xl'>Skills</li>
                <li className='py-6 text-3xl'>Works</li>
                <li className='py-6 text-3xl'>Contact</li>
            </ul>
            {/* social icons */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                            href='/'>
                            LinkedIn <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                            href='/'>
                            GitHub <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#e20a0a]'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                            href='/'>
                            Mail <HiOutlineMail size={30} />
                        </a>
                    </li>
                    {/* <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#19e86fc7]'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                            href='/'>
                            WhatsApp <FaWhatsapp size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#d415d4cd]'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                            href='/'>
                            Instagram <FaInstagram size={30} />
                        </a>
                    </li> */}
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[565f69]'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                            href='/'>
                            Resume <BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar
