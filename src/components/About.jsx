import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4  ">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500 hover:border-gray-50">
              About
            </p>
          </div>

          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. I'm Junair, nice to meet you. Please take a look around</p>
          </div>
          <div>
            <p>
              I am thrilled to present my portfolio as a software developer,
              showcasing my expertise and accomplishments in the field. I am a
              dedicated React.js developer with a strong passion for crafting
              user-centric web experiences. With two years of hands-on
              experience, I thrive on turning complex ideas into elegant,
              high-performance applications. My expertise lies in creating
              reusable components, optimizing UI/UX design, and seamlessly
              integrating with back-end services. My commitment to staying
              up-to-date with the latest industry trends ensures I consistently
              deliver innovative, responsive, and scalable solutions that exceed
              expectations. With a passion for creating innovative solutions and
              a strong technical background, I believe my portfolio demonstrates
              my ability to excel in software development roles.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
