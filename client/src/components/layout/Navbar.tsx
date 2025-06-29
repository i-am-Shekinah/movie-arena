import React, { useState } from 'react';

import {
  MenuIcon,
  SearchIcon,
  TicketPlus,
  XIcon,
} from 'lucide-react';
import {
  Link,
  useNavigate,
} from 'react-router-dom';

import {
  useClerk,
  UserButton,
  useUser,
} from '@clerk/clerk-react';

import { assets } from '../../assets/assets';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { user } = useUser();
  const { openSignIn } = useClerk();
  const navigate = useNavigate();

  return (
    <div className="fixed top-0 left-0 z-50 w-full flex items-center justify-between px-6 md:px-16 lg:px-36 py-5">
      <Link to="/">
        <img
          src={assets.noBGLogo}
          alt="Movie Arena Logo — A red circle with 5 black dots in a pattern of the cross"
          className="w-36 h-full"
        />
      </Link>

      {/* nav */}
      <div
        className={`max-md:absolute max-md:top-0 max-md:left-0 max-md:font-medium max-md:text-lg z-50 flex flex-col md:flex-row items-center max-md:justify-center gap-8 min-md:px-8 py-3 max-md:h-screen min-md:rounded-full backdrop-blur-2xl bg-black/70 md:bg-white/10 md:border border-gray-300/20 overflow-hidden transition-[width] duration-300 ${
          isMenuOpen ? "max-md:w-full" : "max-md:w-0"
        }`}
      >
        <XIcon
          className="md:hidden absolute top-6 right-6 w-6 h-6 cursor-pointer"
          onClick={() => setIsMenuOpen(false)}
        />

        <Link
          to="/"
          className="hover:opacity-75 transition-opacity"
          onClick={() => {
            scrollTo(0, 0);
            setIsMenuOpen(false);
          }}
        >
          Home
        </Link>
        <Link
          to="/movies"
          className="hover:opacity-75 transition-opacity"
          onClick={() => {
            scrollTo(0, 0);
            setIsMenuOpen(false);
          }}
        >
          Movies
        </Link>
        <Link
          to="/"
          className="hover:opacity-75 transition-opacity"
          onClick={() => {
            scrollTo(0, 0);
            setIsMenuOpen(false);
          }}
        >
          Theaters
        </Link>
        <Link
          to="/"
          className="hover:opacity-75 transition-opacity"
          onClick={() => {
            scrollTo(0, 0);
            setIsMenuOpen(false);
          }}
        >
          Releases
        </Link>
        <Link
          to="/favorites"
          className="hover:opacity-75 transition-opacity"
          onClick={() => {
            scrollTo(0, 0);
            setIsMenuOpen(false);
          }}
        >
          Favorites
        </Link>
      </div>

      <div className="flex gap-8 items-center">
        <SearchIcon className="max-md:hidden w-6 h-6 cursor-pointer" />

        {!user ? (
          <button
            onClick={() => openSignIn()}
            className="px-7 py-2 bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer"
          >
            Login
          </button>
        ) : (
          <UserButton>
            <UserButton.MenuItems>
              <UserButton.Action
                label="My Bookings"
                labelIcon={<TicketPlus width={15} />}
                onClick={() => navigate("/my-bookings")}
              />
            </UserButton.MenuItems>
          </UserButton>
        )}
      </div>

      <MenuIcon
        className="max-md:ml-4 md:hidden w-6 h-6 cursor-pointer"
        onClick={() => setIsMenuOpen(true)}
      />
    </div>
  );
};

export default Navbar;
