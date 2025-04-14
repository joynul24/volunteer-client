import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import AuthContext from "../context/Authcontext";

const VolunteerDetails = () => {
  const {
    postTitle,
    thumbnail,
    category,
    location,
    volunteersNeeded,
    deadline,
    description,
  } = useLoaderData();
  const { user } = useContext(AuthContext);

  return (
    <div className="px-2 mb-10 md:mb-0">
      <div className="flex flex-col md:flex-row gap-6 bg-white rounded-xl mt-10 md:mt-20">
        {/* thumbnail */}
        <div className="md:w-1/2">
          <img
            className="h-full rounded-xl"
            src={thumbnail}
            alt="volunteer thumbnail"
          />
        </div>
        {/* conent */}
        <div className="md:w-1/2 px-5 md:px-0 flex flex-col space-y-3">
          {/* 1 */}
          <p className="text-xl ">
            <span className="font-m font-bold">Title:</span>{" "}
            <span className="font-l font-medium text-gray-600">
              {postTitle}
            </span>
          </p>
          <p className="text-xl ">
            <span className="font-m font-bold">Category:</span>{" "}
            <span className="font-l font-medium text-gray-600">{category}</span>
          </p>
          <p className="text-xl ">
            <span className="font-m font-bold">Location:</span>{" "}
            <span className="font-l font-medium text-gray-600">{location}</span>
          </p>
          <p className="text-xl ">
            <span className="font-m font-bold">Volunteers Needed:</span>{" "}
            <span className="font-l font-medium text-gray-600">
              {volunteersNeeded}
            </span>
          </p>
          <p className="text-xl ">
            <span className="font-m font-bold">Deadline:</span>{" "}
            <span className="font-l font-medium text-gray-600">{deadline}</span>
          </p>
          <p className="text-xl ">
            <span className="font-m font-bold">Description:</span>{" "}
            <span className="font-l font-medium text-gray-600">
              {description}
            </span>
          </p>
          <h3 className="text-xl font-m font-bold">Organizer:</h3>
          <p className="font-m font-bold">
            Name:{" "}
            <span className="font-l font-medium text-gray-600">
              {" "}
              {user.displayName}
            </span>
          </p>
          <p className="font-m font-bold">
            Email:{" "}
            <span className="font-l font-medium text-gray-600">
              {" "}
              {user.email}
            </span>
          </p>
          <div>
            <button className="btn btn-secondary">Be a Volunteer</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerDetails;
