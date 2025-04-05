import { useEffect, useState } from "react";
import AuthContext from "../context/Authcontext";
import VolunteerCard from "../components/VolunteerCard";
import { BiSolidCategory } from "react-icons/bi";
import { FaMapMarkerAlt } from "react-icons/fa";

const AllVolunteer = () => {
  const [volunteers, setVolunteers] = useState([]);
//   const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/volunteers`)
      .then((res) => res.json())
      .then((data) => setVolunteers(data));
  }, []);

  return (
    <div>
      <div className="mt-7 md:mt-20 bg-[#FDF9F3] px-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {volunteers.map((volunteer) => (
          <div className="card bg-base-100 shadow-sm">
            <figure className="overflow-hidden">
              <img
                className="transition-transform duration-300 hover:scale-110"
                src={volunteer.thumbnail}
                alt="This is volunteer thumbnail"
              />
            </figure>
            <div className="card-body">
              <h2 className="font-m card-title">{volunteer.postTitle}</h2>
              <p className="mt-2 flex items-center gap-1 font-l text-gray-600">
                <BiSolidCategory /> {volunteer.category}
              </p>
              <p className="mt-2 flex items-center gap-1 font-l text-gray-600">
                <FaMapMarkerAlt /> {volunteer.deadline}
              </p>
              <div></div>
              <button className="btn bg-[#F68926] hover:bg-[#f1a359] text-white mt-5">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllVolunteer;
