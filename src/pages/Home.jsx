import Accordion from "../components/Accordion";
import Integration from "../components/Integration";
import Slider from "../components/Slider";
import VolunteerNeeds from "../components/VolunteerNeeds";

const Home = () => {
    return (
        <div className="bg-[#FDF9F3]">
            <Slider></Slider>
            <VolunteerNeeds></VolunteerNeeds>
            <Accordion></Accordion>
            <Integration></Integration>
        </div>
    );
};

export default Home;