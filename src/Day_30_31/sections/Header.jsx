import React from "react";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import './header.css';
import { login } from "../actions";
import { useSelector, useDispatch } from "react-redux";

const Header = () => {
  const loggedin = useSelector((state) => state.loggedin);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const JSONDATA = useSelector((state) => state.products);
  const [searchTerm, setSearchTerm] = useState("");
  const [resultList,setResultList] = useState([]);

  return (
    <div className="header">
      <Link to="/">
        <div className="title">
          <img src="/img/logo.png" alt="logo" />
          <h2>Dheet Shop</h2>
        </div>
      </Link>
      {/* <input
        type="text"
        placeholder="Search items, collections, and accounts"
      /> */}
      <div className = "search">
      <input
        className="Search2"
        type="text"
        placeholder="Search items, collections, and accounts"
        onChange={(event) => setSearchTerm(event.target.value)}
      />
 
      {useEffect(()=>{setResultList(JSONDATA.filter((val) => {
        if (searchTerm === "") {
          return [];
        } else if (
          val.Category.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
          return val;
        } else if (val.Name.toLowerCase().includes(searchTerm.toLowerCase())) {
          return val;
        }
        return "";
      })
        .slice(0, 5))},[searchTerm,JSONDATA])
        }

        {
        resultList.length?<div id = "search-results">
        { 
          
        resultList.map((val, key) => {
          console.log(searchTerm,";;;;;",resultList);
          return (
            searchTerm.length !== 0 ? (
              <a
                className="useer"
                href={val.Image}
                onChange="user"
                key={key}
                target="_blank"
                rel = "noreferrer"
              >
                {val.Name}{" "}
              </a>
            ):""
          );
        })}
          </div>:""}
            
            </div>
     
      <div className="right-nav">
        <Link to="/bids">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle fill="none" cx="12" cy="7" r="3"></circle>
            <path d="M12 2C9.243 2 7 4.243 7 7s2.243 5 5 5 5-2.243 5-5S14.757 2 12 2zM12 10c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3S13.654 10 12 10zM21 21v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h2v-1c0-2.757 2.243-5 5-5h4c2.757 0 5 2.243 5 5v1H21z"></path>
          </svg>
        </Link>
        <Link to="/wallet">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16 12H18V16H16z"></path>
            <path d="M20,7V5c0-1.103-0.897-2-2-2H5C3.346,3,2,4.346,2,6v12c0,2.201,1.794,3,3,3h15c1.103,0,2-0.897,2-2V9 C22,7.897,21.103,7,20,7z M5,5h13v2H5C4.448,7,4,6.551,4,6S4.448,5,5,5z M20,19H5.012C4.55,18.988,4,18.805,4,18V8.815 C4.314,8.928,4.647,9,5,9h15V19z"></path>
          </svg>
        </Link>
        <Link to="/login">
          {loggedin ? (
            <span
              onClick={() => {
                alert("Do you want to logout ?");
                dispatch(login());
              }}
            >
              {user.name ? user.name : "User"}
            </span>
          ) : (
            <img src="/img/enter.png" alt="login"></img>
          )}
        </Link>
      </div>
    </div>
  );
};

export default Header;
