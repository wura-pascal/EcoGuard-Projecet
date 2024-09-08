import React from "react";
import featureImg from "../assets/feature.png";

const Features = () => {
  return (
    <div className="my-24 md:px-14 px-4 max-w-screen-2xl mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
        <div className="lg:w-1/4">
          <h3 className="text-3xl text-primary font-bold lg:w-1/2 mb-3">
            Why choose EcoGuard
          </h3>
          <p className="text-base text-tertiary">
            EcoGuard is an environmental monitoring device that monitors air
            quality and soil moisture, analyzes the data and sends it to a
            server to enhance disaster preparedness.
          </p>
        </div>
        {/*features card */}
        <div className="ww-full lg:w-3/4">
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 item-start md:gap-12 gap-8">
            <div className="bg-[rgba(255, 255, 255, 0.04] rounded-[35px] h-96 shadow-3xl p-8 items-center flex justify-center cursor-pointer hover:-translate-y-4 transition-all duration-300">
              <div>
                <img src={featureImg} alt="" />
                <h5 className="text-2xl font-semibold text-primary px-5 text-center mt-5">
                  Real time data monitoring
                </h5>
              </div>
            </div>
            <div className="bg-[rgba(255, 255, 255, 0.04] rounded-[35px] h-96 cursor-pointer shadow-3xl p-8 items-center flex justify-center items-center md:mt-16 hover:-translate-y-4 transition-all duration-300">
              <div>
                <img src={featureImg} alt="" />
                <h5 className="text-2xl font-semibold text-primary px-5 text-center mt-5">
                  User friendly interface
                </h5>
              </div>
            </div>
            <div className="bg-[rgba(255, 255, 255, 0.04] rounded-[35px] h-96 cursor-pointer shadow-3xl p-8 items-center flex justify-center items-center hover:-translate-y-4 transition-all duration-300">
              <div>
                <img src={featureImg} alt="" />
                <h5 className="text-2xl font-semibold text-primary px-5 text-center mt-5">
                  Custom alerts
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
