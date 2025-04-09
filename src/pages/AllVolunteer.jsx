import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/Authcontext";
import { BiSolidCategory } from "react-icons/bi";
import { Link } from "react-router-dom";
import { MdOutlineDateRange } from "react-icons/md";

const AllVolunteer = () => {
  const [volunteers, setVolunteers] = useState([]);
    const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/volunteers`)
      .then((res) => res.json())
      .then((data) => setVolunteers(data));
  }, []);

  return (
    <div>
      <h1 className="mt-10 text-center font-semibold md:font-bold font-m md:text-2xl lg:text-3xl mb-3">
        {" "}
        Meet Our Amazing Volunteers
      </h1>
      <p className="text-gray-600 font-l w-full md:w-xl text-center mx-auto px-2 md:px-0">
        They selflessly dedicate their time and effort to drive our mission
        forward. With every helping hand, we build a more compassionate world.
        Let’s take a moment to appreciate these incredible individuals.
      </p>
      <div className="mt-7 md:mt-20 bg-[#FDF9F3] px-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {volunteers.map((volunteer) => (
          <div key={volunteer._id} className="card bg-base-100 shadow-sm">
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
              <MdOutlineDateRange /> {volunteer.deadline}
              </p>
              <div></div>
              <Link to={user ? `/volunteerDetails/${volunteer._id}` : "/login"}>
                <button className="btn bg-[#F68926] hover:bg-[#f1a359] text-white mt-5">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllVolunteer;
