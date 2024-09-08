import React from "react";
import slide1 from "../assets/slide.png";

const Pricing = () => {
  return (
    <div className="md:px-14 p-4 max-w-s mx-auto py-10">
      <div className="text-center">
        <h2 className="md:text-5xl text-3xl font-extrabold text-primary mb-2">
          Here are all our plans
        </h2>
        <p className="text-tertiary md:w-1/3 mx-auto px-4">
          Choose the plan that's right for you
        </p>

        <div className="flex items-center justify-center gap-10">
          <h5 className="text-primary font-bold text-1.5xl">Monthly</h5>
          <img src={slide1} alt="" className="w-20" />
          <h5 className="text-primary font-bold text-1.5xl">Yearly</h5>
        </div>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 mt-8 grid-cols-1 item-start gap-7 ">
          <div className="bg-[rgba(255, 255, 255, 0.04] rounded-[35px] h-96 shadow-3xl p-8 cursor-pointer hover:-translate-y-4 transition-all duration-300">
            <div>
              <h4 className="text-2xl font-extrabold text-primary mt-5">
                Start
              </h4>
              <p className="font-light text-red text-10xl w-379">
                Access advanced data analysis and custom alerts with our
                flexible plans.
              </p>
            </div>
          </div>
          <div className="bg-[rgba(255, 255, 255, 0.04] rounded-[35px] h-96 cursor-pointer shadow-3xl p-8 hover:-translate-y-4 transition-all duration-300">
            <div>
              <h5 className="text-2xl font-semibold text-primary px-5 text-center mt-5">
                User friendly interface
              </h5>
            </div>
          </div>
          <div className="bg-[rgba(255, 255, 255, 0.04] rounded-[35px] h-96 cursor-pointer shadow-3xl p-8 hover:-translate-y-4 transition-all duration-300">
            <div>
              <h5 className="text-2xl font-semibold text-primary px-5 text-center mt-5">
                Custom alerts
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
