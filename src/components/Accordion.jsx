import Lottie from "lottie-react";
import FAQ from "../assets/FAQ.json";

const Accordion = () => {
  return (
    <div className="mt-10 md:mt-32">
      <h1 className="text-center font-semibold md:font-bold font-m md:text-2xl lg:text-3xl mb-3">
        Why Volunteer With Us?
      </h1>
      <p className="text-gray-600 font-l w-full md:w-xl text-center mx-auto px-2 md:px-0">
        Join hands to make a real difference in your community. Gain experience,
        build connections, and grow personally. Every small effort counts toward
        a bigger change. Together, we create a world full of kindness and hope.
      </p>
      {/* Accordion */}
      <div className="mt-10 md:mt-20 md:w-[90%] gap-10 mx-auto flex flex-col md:flex-row items-center">
        {/* lottie animation */}
        <div className=" p-20 md:p-0 w-full md:w-44 lg:w-60">
          <Lottie animationData={FAQ}></Lottie>
        </div>
        {/* FAQ */}
        <div className="px-2 md:px-0 flex-1">
          {/* 1 */}
          <div className="collapse collapse-arrow bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="font-m collapse-title font-semibold">
              🌍 Why Volunteer With Us?
            </div>
            <div className="text-gray-600 font-l collapse-content text-sm">
              Join hands to make a real difference in your community. Gain
              experience, build connections, and grow personally. Every small
              effort counts toward a bigger change. Together, we create a world
              full of kindness and hope.
            </div>
          </div>
          {/* 2 */}
          <div className="collapse collapse-arrow bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="font-m collapse-title font-semibold">
              📅 How to Get Started?
            </div>
            <div className="text-gray-600 font-l collapse-content text-sm">
              Sign up in minutes and complete your profile. Browse through a
              variety of available events. Pick the ones that match your skills
              and interest. Click “Join” and start making a difference today!
            </div>
          </div>
          {/* 3 */}
          <div className="collapse collapse-arrow bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="font-m collapse-title font-semibold">
              🤝 Who Can Join?
            </div>
            <div className="text-gray-600 font-l collapse-content text-sm">
              Students, professionals, homemakers—everyone is welcome! No prior
              experience is needed to lend a hand. Whether you have 1 hour or
              10, it all matters. If you care, you belong here.
            </div>
          </div>
          {/* 4 */}
          <div className="collapse collapse-arrow bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="font-m collapse-title font-semibold">
              🧠 What Will You Learn?
            </div>
            <div className="text-gray-600 font-l collapse-content text-sm">
              Improve your teamwork and leadership skills. Learn real-world
              problem-solving by doing good. Gain certificates and recognition
              for your efforts. Your growth starts the moment you start giving.
            </div>
          </div>
          {/* 5 */}
          <div className="collapse collapse-arrow bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="font-m collapse-title font-semibold">
              🏆 Rewards & Recognition
            </div>
            <div className="text-gray-600 font-l collapse-content text-sm">
              Earn digital badges for your milestones. Top volunteers get
              featured on our homepage. Special gifts and appreciation for
              consistent impact. Because your good work deserves to be
              celebrated.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
