import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import AuthContext from "../context/Authcontext";
import { toast } from "react-toastify";

const Register = () => {
  const { createUser, setUser, loginUserWithGoogle, updateUserProfile } =
    useContext(AuthContext);

  const handleRegister =  (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photoUrl.value;
    const email = form.email.value;
    const pass = form.password.value;
    console.log(name, photo, email, pass);
    
    createUser(email, pass)
    .then((result) => {
      setUser(result.user);
      console.log(result.user);
      updateUserProfile({ displayName: name, photoURL: photo });
      if (result.user) {
        toast.success("User added Successfuly");
        return;
      }
    })
    .then(() => {
      // e.target.reset();
      // navigate("/");
    })
    .catch((error) => {
      console.log(error.message);
      toast.success("User register failed!");
    })

  };

  const handleGoogleSignIn = () => {
    loginUserWithGoogle()
      .then((result) => {
        console.log(result.user);
        // navigate("/");
        if (result.user) {
          toast.success("User register Successfuly");
          return;
        }
      })
      .catch(() => {
        toast.error("Google failed to be login!");
      });
  };

  return (
    <div className="flex bg-[#FDF9F3] justify-center items-center container px-2 md:px-0 mb-10 md:mb-20 mt-10 md:mt-20 mx-auto">
      <div className="rounded-2xl bg-white w-full md:w-1/2">
        <div className="card-body">
        <h3 className="text-xl font-bold text-center">Register With</h3>
          <button
            onClick={handleGoogleSignIn}
            className="btn mt-5 text-blue-500 w-full border"
          >
            <FcGoogle></FcGoogle> Google
          </button>
        </div>
        <div className="text-center font-bold text-black">Or</div>
        <form onSubmit={handleRegister} className="card-body space-y-2">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="Your name"
              className="w-full input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo-URL</span>
            </label>
            <input
              name="photoUrl"
              type="text"
              placeholder="Your photo url"
              className="w-full input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="Your email"
              className="w-full input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="Your password"
              className="w-full input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary w-full bg-[#F68926] border-0 text-black hover:bg-[#f68b26ee]">
              Register
            </button>
          </div>
          <p className="font-semibold">
            Already have an account? please
            <Link className="text-red-400 ml-1 font-bold" to="/login">
              Login
            </Link>
            .
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
