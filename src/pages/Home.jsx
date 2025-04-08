import Accordion from "../components/Accordion";
import Slider from "../components/Slider";
import VolunteerNeeds from "../components/VolunteerNeeds";

const Home = () => {
    return (
        <div className="bg-[#FDF9F3]">
            <Slider></Slider>
            <VolunteerNeeds></VolunteerNeeds>
            <Accordion></Accordion>
        </div>
    );
};

export default Home;