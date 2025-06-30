import React from 'react';

import { Link } from 'react-router-dom';

import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <footer
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-delay="350"
      className="px-6 pt-8 md:px-16 lg:px-36 mt-40 w-full text-gray-300"
    >
      <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500 pb-14">
        <div className="md:max-w-96">
          <img className="w-36 h-auto" src={assets.logo} alt="logo" />
          <p className="mt-2 text-sm text-justify">
            Movie Arena brings the magic of cinema straight to your screen. From
            heart-pounding blockbusters to hidden indie gems, we celebrate every
            genre and every story. Stay in the know with the latest releases,
            fan favorites, and must-see trailers—all in one place. Your next
            movie night starts here.
          </p>

          {/* app stores download */}
          <div className="flex items-center gap-2 mt-4">
            <img
              src={assets.googlePlay}
              alt="google play"
              className="h-9 w-auto rounded"
            />
            <img
              src={assets.appStore}
              alt="app store"
              className="h-9 w-auto rounded"
            />
          </div>
        </div>
        <div className="flex-1 flex items-start md:justify-end gap-20 md:gap-40">
          <div>
            <h2 className="font-semibold mb-5">Company</h2>
            <div className="text-sm space-y-4 flex flex-col">
              <Link
                to="/"
                className="hover:opacity-75 transition-opacity duration-300 ease-in-out"
              >
                Home
              </Link>
              <Link
                to="/"
                className="hover:opacity-75 transition-opacity duration-300 ease-in-out"
              >
                About us
              </Link>
              <Link
                to="/"
                className="hover:opacity-75 transition-opacity duration-300 ease-in-out"
              >
                Contact us
              </Link>
              <Link
                to="/"
                className="hover:opacity-75 transition-opacity duration-300 ease-in-out"
              >
                Privacy policy
              </Link>
            </div>
          </div>
          <div>
            <h2 className="font-semibold mb-5">Get in touch</h2>
            <div className="text-sm space-y-4 flex flex-col">
              <a
                href="tel:+2347072120465"
                className="hover:opacity-75 transition-opacity duration-300 ease-in-out"
              >
                +234 707 212 0465
              </a>
              <a
                href="mailto:michaeloluwayemi11@gmail.com"
                className="hover:opacity-75"
                transition-opacity
                duration-100
                ease-in-ou3
              >
                michaeloluwayemi11@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
      <p className="pt-4 text-center text-sm pb-5">
        Copyright {new Date().getFullYear()} © ShekinahCodes. All Right
        Reserved.
      </p>
    </footer>
  );
};

export default Footer;
