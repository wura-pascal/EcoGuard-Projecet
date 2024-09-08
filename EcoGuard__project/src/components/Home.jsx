import banner from "../assets/banner.png";
import Banner from "../shared/Banner";

const Home = () => {
  return (
    <div className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-24">
      <Banner
        banner={banner}
        heading="Empowering commuities with Data"
        subheading="An environmental monitoring device"
        btn1={"Get Started"}
      />
    </div>
  );
};

export default Home;
