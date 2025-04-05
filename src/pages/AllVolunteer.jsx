import { useEffect, useState } from "react";

const AllVolunteer = () => {

    const [volunteers, setVolunteers] = useState([])

    useEffect(()=>{
        fetch(`${import.meta.env.VITE_API_URL}/volunteers`)
        .then(res => res.json())
        .then(data => setVolunteers(data))
    },[])
   console.log(volunteers);
    return (
        <div>
            <h1>All Volunteer</h1>
        </div>
    );
};

export default AllVolunteer;