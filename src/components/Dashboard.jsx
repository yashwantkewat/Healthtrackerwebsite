import React from 'react';
import Navbar from './Navbar'; // Adjust the import path based on your file structure
import CarouselComponent from '../pages/CarouselComponent';
import Locationshow from "../pages/Location"
import UserReviews from '../pages/UserReviews';
import SuccessStories from "../pages/SuccessStories"
import ContactSection from '../pages/ContactSection';
import Footer from './Footer';
import { Link } from 'react-router-dom';
const Dashboard = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Home Section */}
      <section id="home" className="relative bg-gray-100 min-h-screen flex items-center justify-center px-4">
        {/* Image */}
        <img
          src="https://static.wixstatic.com/media/2e2a49_394542b571a64edc9f898ae0ac877ada~mv2_d_6789_3704_s_4_2.jpg/v1/fill/w_1280,h_820,al_b,q_85,usm_0.66_1.00_0.01,enc_auto/2e2a49_394542b571a64edc9f898ae0ac877ada~mv2_d_6789_3704_s_4_2.jpg"
          alt="Scenic View"
          className="w-full h-screen object-fit"
        />


        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center   text-grey px-4">
          <h1 className="text-4xl md:text-5xl opacity-10 font-bold ">Welcome to Our Service</h1>
          <p className="mt-4 text-lg md:text-xl text-center max-w-2xl">
            Discover amazing plans and features that suit your needs. Join us to start your journey today!
          </p>
          <button
            className="mt-6 px-6 py-2 bg-yellow-400 text-black font-semibold rounded-lg shadow hover:bg-yellow-500"
          >
          <Link to="/sign-up"  >Book Now</Link>

          </button>
        </div>
      </section>
      <CarouselComponent/>
      <Locationshow/>
      <UserReviews/>
      <SuccessStories/>
      <ContactSection/>
      <Footer/>
    </div>
  );
};

export default Dashboard;
