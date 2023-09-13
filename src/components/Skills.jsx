import React from 'react'
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import REACT from '../assets/react.png';
import GITHUB from '../assets/github.png';
import FIREBASE from '../assets/firebase.png';
import TAILWIND from '../assets/tailwind.png';
import CSharp from '../assets/Csharp_Logo.png';
import DOTNET from '../assets/NET_Core_Logo.png';

const Skills = () => {
    return (
        <div name='skill' className='bg-[#0a192f] text-gray-300'>
            {/* container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-400'>Expirience</p>
                    <p className='py-4'>//These are the technologies I've worked with</p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'> 
                    <div className='font-serif font-bold shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={REACT} alt='REACT' />
                        <p className='py-4'>REACT</p>
                    </div>
                    <div className='font-serif font-bold shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={HTML} alt='HTML' />
                        <p className='py-4'>HTML</p>
                    </div>
                     <div className='font-serif font-bold shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={CSS} alt='css' />
                        <p className='py-4'>CSS</p>
                    </div>
                    <div className='font-serif font-bold shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={TAILWIND} alt='TAILWIND' />
                        <p className='py-4'>TAILWIND</p>
                    </div>
                    <div className='font-serif font-bold shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={CSharp} alt='CSharp' />
                        <p className='py-4'>CSHARP</p>
                    </div>
                    <div className='font-serif font-bold shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={DOTNET} alt='DOTNET' />
                        <p className='py-4'>.NETCORE</p>
                    </div> 
                    <div className='font-serif font-bold shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={GITHUB} alt='GITHUB' />
                        <p className='py-4'>GITHUB</p>
                    </div>
                    <div className='font-serif font-bold shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={FIREBASE} alt='FIREBASE' />
                        <p className='py-4'>FIREBASE</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Skills
