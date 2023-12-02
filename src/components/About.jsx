import React from "react";
import img from "../images/img2.jpg";
import { Link } from "react-scroll";
import Button from "../layout/Button";
import Heading from "../layout/Heading";

const About = () => {
  return (
    <div className=" md:min-h-screen flex flex-col-reverse md:flex-row items-center gap-5 md:mx-32 mx-5 mt-14">
      <div className=" text-4xl md:w--2/4 text-left ">
        <img src={img} alt="img" />
      </div>
      <div className="text-1xl md:w--2/4 text">
        <Heading title1="About" title2="Us?"/>
        <p>
        As career advisors, we empower individuals to navigate their
        professional journeys with confidence. Our personalized guidance and
        expertise help you make informed decisions, achieve career goals, and
        thrive in a dynamic professional landscape.
        </p>

        <Link to="contact spy={true} smooth={true} duration={500}">
            <Button title="Contact Us" />
        </Link>
      </div>
    </div>
  );
};

export default About;
