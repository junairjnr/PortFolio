import React from 'react'

const Works = () => {
  return (
    <div name='work' className='w-full md:h-screen bg-[#0a192f] text-gray-300'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-yellow-100'>Works</p>
          <p className='py-4'>//check out my recent Works</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          <div className=''>
            <div>
              <span>

              </span>
              <div>
                <a>
                  <button>

                  </button>
                </a>
                <a>
                  <button>

                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Works
