import React from "react";
import WorkImage from "../assets/social.png";
import Portfolio from "../assets/Portfolio.jpg";

const Works = () => {
  return (
    <div name="work" className="w-full md:h-screen bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-gray-400 hover:border-gray-50">
            Works
          </p>
          <p className="py-4">check out my recent Works</p>
        </div>
        {/*container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/*grid */}
          <div
            style={{ backgroundImage: `url(${WorkImage})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
           mx-auto content-div"
          >
            {/*Hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-black tracking-wider">
                Social Media
              </span>
              <div className="pt-8 text-center">
                <a href="https://social-media-woad-nine.vercel.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/junairjnr/Social_Media">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

{/*------------------------------------------------------------- */}
          <div
            style={{ backgroundImage: `url(${Portfolio})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
           mx-auto content-div"
          >
            {/*Hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-black tracking-wider">
                PortFolio
              </span>
              <div className="pt-8 text-center">
                <a href="https://port-folio-two-omega.vercel.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/junairjnr/PortFolio">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          
{/*------------------------------------------------------------- */}

        </div>
      </div>
    </div>
  );
};

export default Works;
