import { useContext } from "react";
import AuthContext from "../context/Authcontext";
import axios from "axios";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const AddVolunteer = () => {
  const { user } = useContext(AuthContext);
  const hangleAddVolunteer = async (e) => {
    e.preventDefault();
    const form = e.target;
    const postTitle = form.postTitle.value;
    const category = form.category.value;
    const location = form.location.value;
    const deadline = form.deadline.value;
    const volunteersNeeded = parseInt(form.volunteersNeeded.value);
    const thumbnail = form.thumbnail.value;
    const description = form.description.value;
    const email = form.email.value;
    const newVolunteer = {
      postTitle,
      category,
      location,
      organizer: {
        email,
        name: user?.displayName,
      },
      deadline,
      volunteersNeeded,
      thumbnail,
      description,
    };

    if (
      postTitle === "" ||
      category === "" ||
      location === "" ||
      deadline === "" ||
      volunteersNeeded === "" ||
      thumbnail === "" ||
      description === ""
    ) {
      toast.error("Please Complete the full form!");
      return;
    }

    // make a post request
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/addVolunteer`,
        newVolunteer
      );
      if (data.insertedId) {
        Swal.fire({
          title: "Post added Successfuly!",
          icon: "success",
          draggable: true,
        });
        form.reset();
      }
    } catch {
      toast.error("Post failed to be add");
    }
  };

  return (
    <div className="bg-[#FDF9F3] md:px-8 px-2 md:pb-10 pb-2">
      <div className="flex justify-center">
        <h1 className="border-b-3 border-b-[#F68926] font-m md:font-bold text-center mt-5 md:text-xl lg:text-2xl">
          Add Volunter
        </h1>
      </div>
      {/* Add Volunteer */}
      <form
        onSubmit={hangleAddVolunteer}
        className=" bg-base-100 shrink-0 shadow-2xl text-black mt-10 p-8 rounded-xl"
      >
        <div className="md:flex gap-6 mb-6">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text f-oswald">Post Title</span>
            </label>
            <input
              name="postTitle"
              type="text"
              placeholder="title"
              className="input input-bordered w-full"
            />
          </div>
          {/* Category field */}
          <div className="flex flex-col form-control md:w-1/2">
            <label className="label">
              <span className="label-text f-oswald">Category</span>
            </label>
            <select
              name="category"
              defaultValue="category"
              className="select w-full"
            >
              <option>Choose Category</option>
              <option>Healthcare</option>
              <option>Social Service</option>
              <option>Education</option>
              <option>Animal Welfare</option>
            </select>
          </div>
        </div>
        <div className="md:flex gap-6 mb-6">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text f-oswald">Location</span>
            </label>
            <input
              name="location"
              type="text"
              placeholder="location "
              className="input input-bordered w-full"
            />
          </div>
          {/* Deadline*/}
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text f-oswald">Deadline</span>
            </label>
            <input
              type="date"
              name="deadline"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        {/* Number of volunteers */}
        <div className="md:flex gap-6 mb-6">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text f-oswald">Volunteers Needed</span>
            </label>
            <input
              name="volunteersNeeded"
              type="number"
              placeholder="volunteers needed"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text f-oswald">Thumbnail</span>
            </label>
            <input
              name="thumbnail"
              type="text"
              placeholder="thumbnail url"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        {/* Organizer */}
        <div className="form-control md:w-1/2">
          <label className="label">
            <span className="label-text f-oswald">Organizer</span>
          </label>
          <input
            name="email"
            type="text"
            defaultValue={user?.email}
            readOnly
            className="input input-bordered w-full"
          />
        </div>
        <div className="md:flex gap-6 mb-6">
          <div className="flex flex-col form-control w-full">
            <label className="label">
              <span className="label-text f-oswald">Description</span>
            </label>
            <textarea
              type="description"
              name="description"
              className="w-full textarea"
              placeholder="description"
            ></textarea>
          </div>
        </div>
        <button className="btn text-white bg-[#F68926] hover:bg-[#b17843] w-full">
          Add Post
        </button>
      </form>
    </div>
  );
};

export default AddVolunteer;
