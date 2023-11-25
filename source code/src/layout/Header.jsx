import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex fixed top-0 left-0 w-full  bg-[#BB29FF] py-[23px] px-[34px] items-center gap-[235px] ">
      <img src="/logo.png" className="w-[35px] h-[35px]" alt="" />
      <div className="flex items-center gap-[17px]">
        <h1 className="text-[35px] font-[700] text-white">¥</h1>
        <NavLink
          to="/upload"
          className={({ isActive, isPending }) =>
            isActive ? "text-white font-[700]" : "text-white"
          }
        >
          Upload
        </NavLink>
        <NavLink
          to="/model"
          className={({ isActive, isPending }) =>
          isActive ? "text-white font-[700]" : "text-white"
        }
        >
          Model
        </NavLink>
        <NavLink
          to="/"
          end
          className={({ isActive, isPending }) =>
          isActive ? "text-white font-[700]" : "text-white"
        }
        >
          Commands
        </NavLink>
        <NavLink
          to="/help"
          className={({ isActive, isPending }) =>
          isActive ? "text-white font-[700]" : "text-white"
        }
        >
          Help
        </NavLink>
        <NavLink
          to="/donation"
          className={({ isActive, isPending }) =>
            isActive ? "text-white font-[700]" : "text-white"
          }
        >
          Donation
        </NavLink>
        <NavLink
          to="/sign-in"
          className={({ isActive, isPending }) =>
          isActive ? "text-white font-[700]" : "text-white"
        }
        >
          Sign In
        </NavLink>
        <NavLink
          to="/gallery"
          className={({ isActive, isPending }) =>
            isActive ? "text-white font-[700]" : "text-white"
          }
        >
          Gallery
        </NavLink>
      </div>
      <img src="/git.png" className="w-[35px] h-[35px]" alt="" />
    </div>
  );
};

export default Header;
