import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiVideoPlus } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiUser } from "react-icons/bi";
import logo from "../assets/YouTube-Logo.wine.svg";
import searchIcon from "../assets/search-icon.png";
import { toggleMenu } from "../utils/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { SEARCH_API } from "../utils/Constants";
import { cachedResults } from "../utils/searchSlice";

const NavBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store)=>store.search);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSearchSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);
  const getSearchSuggestions = async () => {
    const data = await fetch(SEARCH_API + searchQuery);
    const json = await data.json();
    // console.log(json[1]);
    setSearchSuggestions(json[1]);
    dispatch(cachedResults({
      [searchQuery]: json[1]
    }))
  };
  

 

  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };

  const handleSearchClick = (option) => {
    setSearchQuery(option);
    setShowSuggestions(false);
    navigate('/results')
  };

  return (
    <div className="flex justify-between pl-8 pr-10 sticky top-0 bg-white">
      <div className="flex mt-1">
        <GiHamburgerMenu
          className="text-xl mt-4 cursor-pointer"
          onClick={() => {
            handleToggleMenu()
          }}
        />
        <a href="/">
          <img className="w-32 h-12 ml-3 cursor-pointer" src={logo} alt="" />
        </a>
      </div>
      <div className="flex flex-col">
        <div className="flex">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
            placeholder="Search"
            className="mt-2 border-[1px] border-gray-200 pl-4 pr-96 rounded-l-full focus:outline-none"
          />
          <img
            src={searchIcon}
            className="w-10 mt-2 border-r-[1px] border-t-[1px] border-b-[1px] rounded-r-full cursor-pointer"
            alt="search"
          />
        </div>
        {showSuggestions && (
          <div className="flex flex-col">
            <ul className="absolute pl-2 bg-white w-[36rem]">
              {searchSuggestions.map((suggestion,i) => {
                return(
                  <Link to={"/results?search_query=" + suggestion} key={i}>
                <li
                  onClick={() => handleSearchClick(suggestion)}>{suggestion}</li>
                </Link>
                )
              })}
            </ul>
          </div>
        )}
      </div>
      <div className="flex gap-x-10 mt-4">
        <BiVideoPlus className="text-2xl cursor-pointer " />
        <IoMdNotificationsOutline className="text-2xl cursor-pointer" />
        <BiUser className="text-2xl cursor-pointer" />
      </div>
    </div>
  );
};

export default NavBar;
