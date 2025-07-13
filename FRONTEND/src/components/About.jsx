import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
              Welcome to FoodPoint – where passion meets the plate! We believe food is not just fuel; it’s a celebration of culture, taste, and togetherness. Our journey began with a simple idea: to craft delicious, wholesome meals that not only satisfy hunger but also nourish the soul. Every dish we serve is a blend of fresh ingredients, creativity, and a deep love for cooking. Whether you’re here for a quick bite or a hearty meal, we promise to deliver flavors that feel like home.

At the heart of everything we do is a commitment to quality, sustainability, and unforgettable taste. Thank you for choosing us to be part of your food story.


            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;