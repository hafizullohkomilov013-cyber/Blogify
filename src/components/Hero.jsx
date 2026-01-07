import React from "react";

function Hero() {
  return (
    <section className="bg-[#F7F1FD] pt-25 pb-25">
      <div className="heroContainer flex justify-center container">
        <div className="w-full max-w-125">
          <div className="hero-box">
            <h2 className="text-[#0F1729] text-[60px] font-bold ">
              Create, Read,
            </h2>
            <h2 className="text-[#4346EF] text-[60px] font-bold -mt-7">
              Inspire.
            </h2>
          </div>
          <p className="text-[#6B7280] mt-5 mb-5 pr-30 discover ">
            Discover stories written by amazing people. Share your knowledge and
            inspire others with your unique perspective.
          </p>
          <div className="btns-hero flex gap-4">
            <button className="max-w-50 bg-linear-65 from-[#4346EF] to-[#8524E5] text-white pt-3 pb-3 pr-7 pl-7 rounded-2xl">
              Explore Posts <i className="fa-solid fa-arrow-right"></i>
            </button>
            <button className="pt-3 pb-3 pr-7 pl-7 rounded-2xl bg-white">
              Get Started
            </button>
          </div>
        </div>
        <div>
          <img src="../../public/img/Hero illustration.png" alt="" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
