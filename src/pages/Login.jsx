import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import AuthContext from "../context/Authcontext";
import { toast } from "react-toastify";

const Login = () => {
  const { loginUser, loginUserWithGoogle } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    loginUser(email, password)
      .then((result) => {
        // navigate('/')
        if (result.user) {
          toast.success("User login Successfuly");
          return;
        }
        e.target.reset();
      })
      .catch(() => {
        toast.error("User login faield!");
      });
  };

  const handleGoogleSignIn = () => {
    loginUserWithGoogle()
      .then((result) => {
        console.log(result.user);
        // navigate("/");
        if (result.user) {
          toast.success("User login Successfuly");
          return;
        }
      })
      .catch(() => {
        toast.error("Google failed to be login!");
      });
  };

  return (
    <div className="bg-[#FDF9F3] flex justify-center items-center container px-2 md:px-0 mb-10 md:mb-20 md:mt-20 mx-auto">
      <div className="rounded-2xl bg-white w-full md:w-1/2">
        <div className="card-body">
          <h3 className="text-xl font-bold text-center">Login With</h3>
          <button
            onClick={handleGoogleSignIn}
            className="btn mt-5 text-blue-500 border"
          >
            <FcGoogle></FcGoogle> Google
          </button>
        </div>
        <form onSubmit={handleLogin} className="card-body space-y-2">
          <div className="text-center font-bold">Or</div>

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
              Login
            </button>
          </div>
          <p className="font-semibold">
            New to this website? please?{" "}
            <Link className="text-red-400" to="/register">
              Register
            </Link>
            .
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
