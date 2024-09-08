import React from "react";

const Banner = ({ banner, heading, subheading, btn1 }) => {
  return (
    <div className="gradientBg rounded-xl rounded-br-[80px] md:p-9 px-4 py-9">
      <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-10">
        {/* banner image */}
        <div>
          <img src={banner} alt="" className="lg:h-[386px]" />
        </div>
        {/* banner content */}
        <div className="md:w-3/5">
          <h2 className="md:text-7xl text-4xl font-bold text-white mb-6 leading-relaxed">
            {heading}
          </h2>
          <p className="text-[#EBEBEB] text-2xl mb-8">{subheading}</p>
          <div>
            <button className="btnPrimary">{btn1}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
