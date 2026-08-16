import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";

const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-brand-muted">
          <p>
            AuraWear was born out of a passion for innovation and a desire to
            revolutionize the way people shop online. Our journey began with a
            simple idea: to provide a platform where customers can easily
            discover, explore, and purchase a wide range of products from the
            comfort of their homes.
          </p>
          <p>
            Since our inception, we've worked tirelessly to curate a diverse
            selection of high-quality products that cater to every taste and
            preference. From fashion and beauty to electronics and home
            essentials, we offer an extensive collection sourced from trusted
            brands and suppliers.
          </p>
          <b className="text-brand-dark">Our Mission</b>
          <p>
            Our mission at AuraWear is to empower customers with choice,
            convenience, and confidence. We're dedicated to providing a seamless
            shopping experience that exceeds expectations, from browsing and
            ordering to delivery and beyond. We believe that shopping should be
            enjoyable, affordable, and accessible to everyone.
          </p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-brand-muted">
            We meticulously select and vet each product to ensure it meets our
            stringent quality standards. From materials to craftsmanship, every
            item in our collection undergoes rigorous inspection so you receive
            only the best. Your satisfaction and trust are our top priorities.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-brand-muted">
            With our user-friendly interface and hassle-free ordering process,
            shopping has never been easier. Browse thousands of products,
            compare prices, and place orders with just a few clicks – anytime,
            anywhere. We bring the store to your fingertips.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-brand-muted">
            Our dedicated team of professionals is here to assist you every step
            of the way. From pre-purchase inquiries to post-purchase support, we
            strive to provide timely and helpful assistance. Your satisfaction
            is our mission, and we go above and beyond to ensure it.
          </p>
        </div>
      </div>

      <NewsLetterBox />
    </div>
  );
};

export default About;
