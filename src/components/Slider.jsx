import { FaArrowTrendUp } from "react-icons/fa6";

const Slider = () => {
  return (
    <div className="carousel w-full">
      {/* Slider 1 */}
      <div
        id="slide1"
        className="slider carousel-item relative w-full bg-[url(https://joynul2024.sirv.com/volunteerHub/Banner_img/volunteer_banner_3.jpg)] bg-no-repeat bg-center bg-cover object-cover"
      >
        <div className="text-white text-center  py-[50px] hero-overlay lg:py-[150px]">
          <h2 className="font-m text-2xl lg:text-5xl font-bold mb-6">
            Helping Hands, Caring <br /> Hearts!
          </h2>
          <p className="font-l text-base font-inter">
            Join us in making a lasting impact. Every act of kindness brings
            hope to someone in need. Together, <br /> we can build a better
            tomorrow. Be a volunteer, be the change!
          </p>
          <button className="btn flex mx-auto items-center bg-[#F68926] text-white hover:text-black mt-6 font-semibold hover:bg-white">
            Explore More <FaArrowTrendUp />
          </button>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      {/* Slider 2 */}
      <div
        id="slide2"
        className="slider carousel-item relative w-full bg-[url(https://joynul2024.sirv.com/volunteerHub/Banner_img/volunteer_banner_2.jpg)] bg-no-repeat bg-center bg-cover object-cover"
      >
        <div className="text-white text-center  py-[50px] hero-overlay lg:py-[150px]">
          <h2 className="font-m text-2xl lg:text-5xl font-bold mb-6">
            Empower Communities, <br /> Inspire Change!
          </h2>
          <p className="font-l text-base font-inter">
            Empower others through your service. Create a lasting impact in your
            community. <br /> Your compassion can brighten someone’s life. Join
            us and be a force for good!
          </p>
          <button className="btn flex mx-auto items-center bg-[#F68926] text-white hover:text-black mt-6 font-semibold hover:bg-white">
           Explore More <FaArrowTrendUp />
          </button>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      {/* Slider 3  */}
      <div
        id="slide3"
        className="slider carousel-item relative w-full bg-[url(https://joynul2024.sirv.com/volunteerHub/Banner_img/volunteer_banner_1.jpg)] bg-no-repeat bg-center bg-cover object-cover"
      >
        <div className="text-white text-center  py-[50px] hero-overlay lg:py-[150px]">
          <h2 className="font-m text-2xl lg:text-5xl font-bold mb-6">
            Serve with Purpose, Lead <br /> with Heart!
          </h2>
          <p className="font-l text-base font-inter">
            Empower others through your service. Create a lasting impact in your
            community. <br /> Your compassion can brighten someone’s life. Join
            us and be a force for good!
          </p>
          <button className="btn flex mx-auto items-center bg-[#F68926] text-white hover:text-black mt-6 font-semibold hover:bg-white">
            Explore More <FaArrowTrendUp />
          </button>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Slider;
