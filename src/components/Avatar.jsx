// AvatarDropdown.js
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Avatar = ({ setIsAuthenticated, Name }) => {
  const [isOpen, setIsOpen] = useState(false);
  //ddcdcddddcf
  const [name, setName] = useState("Rahul");
  const toggleDropdown = () => setIsOpen(!isOpen);

  const logout = () => {

    sessionStorage.removeItem('isLoggedIn')
    sessionStorage.removeItem('User')
    setIsAuthenticated(false)
  };

  const removeProfile = async () => {
    try {
        const confirmation = window.confirm("Are you sure you want to delete your account?");
        if (!confirmation) return;

        const email = JSON.parse(sessionStorage.getItem('User')).email;
        console.log(email);
        
        const res = await axios.delete(`http://localhost:3000/remove`, { params: { email } });
        
        if (res.status === 200) {
            logout();
        }
    } catch (err) {
        console.log(err);
    }
};


  useEffect(() => {
    setName(Name)
  }, [])


  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center bg-n-8 border border-n-6"
      >
        {/* Replace with your avatar image */}
        <img
          src="https://via.placeholder.com/40"
          alt="Avatar"
          className="w-full h-full object-cover"
        />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-n-8 border border-n-6 rounded-md shadow-lg">
          <div className="p-4 border-b border-n-6 text-n-1 text-center">
            {/* Replace with actual user's name */}
            <div className="font-semibold">{name}</div>
          </div>
          <a
            href="#update-profile"
            className="block px-4 py-2 text-n-1 hover:bg-n-7 transition-colors"
          >
            Update Profile
          </a>
          <a
            href=""
            className="block px-4 py-2 text-n-1 hover:bg-n-7 transition-colors"
            onClick={removeProfile}
          >
            Remove Profile
          </a>
          <a
            href="#all-bookings"
            className="block px-4 py-2 text-n-1 hover:bg-n-7 transition-colors"
          >
            All Bookings
          </a>
          <Link
            to="/"
            onClick={logout}
            className="block px-4 py-2 cursor-pointer text-n-1 hover:bg-n-7 rounded-b-md transition-colors"
          >
            Logout
          </Link>
        </div>
      )}
    </div>
  );
};

export default Avatar;
