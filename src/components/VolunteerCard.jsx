import { BiSolidCategory } from "react-icons/bi";
import { Link } from "react-router-dom";
import AuthContext from "../context/Authcontext";
import { useContext } from "react";
import { MdOutlineDateRange } from "react-icons/md";

const VolunteerCard = ({ volunteer }) => {
  const {_id, thumbnail,postTitle
,category, deadline } = volunteer || {};
  const {user} = useContext(AuthContext)

  return (
    <div>
      <div className="card bg-base-100 shadow-sm">
        <figure className="overflow-hidden">
          <img
            className="transition-transform duration-300 hover:scale-110"
            src={thumbnail}
            alt="This is volunteer thumbnail"
          />
        </figure>
        <div className="card-body">
          <h2 className="font-m card-title">{postTitle}</h2>
          <p className="mt-2 flex items-center gap-1 font-l text-gray-600">
            <BiSolidCategory /> {category}
          </p>
          <p className="mt-2 flex items-center gap-1 font-l text-gray-600">
          <MdOutlineDateRange /> {deadline}
          </p>
          <div>
            <Link to="/allVolunteer">
              <button className="btn-link mt-2 text-base cursor-pointer text-yellow-600 font-l">
                See All Volunteer
              </button>
            </Link>
          </div>
          <Link to={user ? `/volunteerDetails/${_id}` : "/login"}>
            <button className="btn bg-[#F68926] hover:bg-[#f1a359] text-white mt-5">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VolunteerCard;
