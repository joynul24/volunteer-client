import { useContext } from "react";
import AuthContext from "../../context/Authcontext";
import { toast } from "react-toastify";
import { Link, NavLink } from "react-router-dom";
import "./Navber.css";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  // console.log(name);

  const handleSignOut = () => {
    signOutUser();
    if (signOutUser) {
      toast.success("User SignOut Successfuly");
    }
  };

  return (
    <div className="navbar bg-base-100 container px-2 mx-auto">
      <div className="flex-1">
        <Link to="/" className="flex gap-2 items-center">
          {/* logo img */}
          <img
            className="w-auto hidden md:block h-7"
            src="https://joynul2024.sirv.com/volunteerHub/logo.png"
            alt=""
          />
          <span className="font-m font-semibold md:font-bold sm:text-base md:text-xl lg:text-2xl">
            Voluteer <span className="text-[#F68926]">Hub</span>
          </span>
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu font-l menu-horizontal px-1">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="allVolunteer">All Volunteer</NavLink>
          </li>

          {!user && (
            <li className="text-[#F68926] font-semibold">
              <Link to="login">Login</Link>
            </li>
          )}
        </ul>

        {user && (
          <div className="dropdown dropdown-end z-50">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div
                title={user?.displayName}
                className="w-10 rounded-full border-green-500 border-[1px]"
              >
                <img
                  className=""
                  referrerPolicy="no-referrer"
                  alt="User Profile Photo"
                  src={user?.photoURL}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="font-l menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to="addVolunteer" className="justify-between">
                  Add Volunteer
                </NavLink>
              </li>
              <li>
                <NavLink to="">Manage My Posts</NavLink>
              </li>
              <li className="mt-2">
                <button
                  onClick={handleSignOut}
                  className="bg-[#F68926] block text-white text-center"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
