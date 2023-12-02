import React from "react";
import { Link } from "react-scroll";
import Button from "../layout/Button";
import img from "../images/img.jpg";

const Home = () => {
  return (
    <div className=" min-h-[70vh] flex flex-col md:flex-row md:justify-between items-center md:mx-32 mx-5 mt-10">
      <div className=" md:w--2/4 text-center">
        <h2 className=" text-5xl font-semibold leading-tight">I am Aman kumar</h2>
        <span className="text-5xl font-semibold text-[#4b4edf]">Career Advisor</span>

        <p className=" text-lightTaxt mt-5 text-start">
          A career advisor guides individuals in navigating their professional
          paths, offering insights, advice, and strategic planning. They assess
          skills, interests, and goals to help clients make informed career
          decisions. By providing support in resume building, job searching, and
          interview preparation, career advisors empower individuals to pursue
          fulfilling and successful career trajectories.
        </p>

        <Link to="contact" spy={true} smooth={true} duration={500}>
            <Button title="Contact Us" />
        </Link>
      </div>

      <div className=" md:w--2/4 text-right">
        <img src={img} alt="1mg"  />
      </div>
    </div>
  );
};

export default Home;
