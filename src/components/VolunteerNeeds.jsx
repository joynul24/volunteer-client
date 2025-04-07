import React, {useEffect, useState } from "react";
import VolunteerCard from "./VolunteerCard";
import AuthContext from "../context/Authcontext";

const VolunteerNeeds = () => {
  const [volunteers, setVolunteers] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/volunteers`)
    .then((res) => res.json())
    .then((data) => setVolunteers(data));
  }, []);

  return (
    <div className="mt-5 md:mt-10">
      <h1 className="text-center font-semibold md:font-bold font-m md:text-2xl lg:text-3xl mb-3">
        Volunteer Needs Now
      </h1>
      <p className="text-gray-600 font-l w-full md:w-xl text-center mx-auto px-2 md:px-0">
        Your time and skills can change lives. Step forward and be a part of
        something meaningful. Every act of kindness brings hope to those in
        need. Join us now and make a difference!
      </p>

      <div className="mt-7 md:mt-20 bg-[#FDF9F3] px-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {volunteers.slice(0,6).map((volunteer) => (
          <VolunteerCard
            key={volunteer._id}
            volunteer={volunteer}
          ></VolunteerCard>
        ))}
      </div>
    </div>
  );
};

export default VolunteerNeeds;
