import aboutImg1 from "../assets/about1.png";
import aboutImg2 from "../assets/about2.png";

const About = () => {
  return (
    <div className="md:px-14 p-4 max-w-s mx-auto">
      <div className="flex  flex-col md:flex-row justify-between items-center gap-8">
        <div className="md:w-1/2">
          <img src={aboutImg1} alt="" />
        </div>

        {/* about content */}
        <div className="md:w-2/5">
          <h2 className="md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal">
            EcoGuard enhances disaster{" "}
            <span className="text-secondary">preparedness.</span>
          </h2>
          <p className="text-tertiary text-lg mb-7">
            EcoGuard uses communication modules like Wi-Fi or GSM to transmit
            collected data in real-time to a central server. The system
            processes this data to generate actionable insights and alerts.
          </p>
          <button className="btnPrimary">Get Started</button>
        </div>
      </div>

      {/* 2nd part */}
      <div className="flex  flex-col md:flex-row justify-between items-center gap-8">
        <div className="md:w-2/5">
          <h2 className="md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal">
            It analyzes the data through our platform.{" "}
            <span className="text-secondary">preparedness.</span>
          </h2>
          <p className="text-tertiary text-lg mb-7">
            All data collected can be analyzed through our platform to make
            informed decisions to help mitigate climate change effects.
          </p>
          <button className="btnPrimary">Get Started</button>
        </div>
        {/* about content image */}
        <div className="md:w-1/2">
          <img src={aboutImg2} alt="" />
        </div>
        ;
      </div>
    </div>
  );
};

export default About;
