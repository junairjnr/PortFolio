import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Home = () => {
    return (
        <div name="home" className='h-screen w-full bg-[#0a192f]'>

            {/* container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-gray-300'>
                    Test</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Test</h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>Test</h2>
                <p className='text-[#8892b0] py-4 max-w-[700px]'>i ..............  </p>
                <div>
                    <button className='text-white group border-2 px-6 py-3  my-2 flex items-center hover:bg-gray-400 hover:border-gray-400 '>
                        view work
                        <span className='group-hover:rotate-90 duration-300'>
                            <HiArrowNarrowRight />
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home
