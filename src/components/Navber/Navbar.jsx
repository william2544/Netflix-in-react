import React from "react"
import logo from '../../assets/logo.png'
import bell_icon from '../../assets/bell_icon.svg'
import search_icon from '../../assets/search_icon.png'
import profile_img from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'
import './Navbar.css'
export default function Navbar() {
    return(
        <div className="navbar">
            <div className="navbar-left">
                <img src={logo} alt="" />
                <ul>
                    <li>Home</li>
                    <li>TV Show</li>
                    <li>Movie</li>
                    <li>New & Popular</li>
                    <li>My List</li>
                    <li>Browse by language</li>
                </ul>
            </div>
            <div className="navbar-right">
                <img src={search_icon} alt="search icon" className="icons"/>
                <p>children</p>
                <img src={bell_icon} alt="" className="icons"/>
                <div className="navbar-profile">
                    <img src={profile_img} alt="" className="icons profile"/>
                    <img src={caret_icon} alt="" className="icons"/>
                    <div className="dropdown">
                        <p>Sign out of netflix</p>
                    </div>
                </div>
            </div>
        </div>
    )
};
