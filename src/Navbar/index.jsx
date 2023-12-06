import React from 'react'
import './index.scss'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="navbar_container">
                <div className="logo">
                    <img src="https://preview.colorlib.com/theme/eiser/img/logo.png.webp" alt="" />
                </div>
                <div className='navmenu'>
                    <ul>
                        <li className='home'>
                            <NavLink
                                to="/"
                                style={({ isActive }) => {
                                    return {
                                        color: isActive ? "#71CD13" : "black",
                                    };
                                }}
                            >
                                HOME
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/shop"
                                style={({ isActive }) => {
                                    return {
                                        color: isActive ? "#71CD13" : "black",
                                    };
                                }}
                            >
                                SHOP
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/blog"
                                style={({ isActive }) => {
                                    return {
                                        color: isActive ? "#71CD13" : "black",
                                    };
                                }}
                            >
                                BLOG
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/pages"
                                style={({ isActive }) => {
                                    return {
                                        color: isActive ? "#71CD13" : "black",
                                    };
                                }}
                            >
                                PAGES
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contact"
                                style={({ isActive }) => {
                                    return {
                                        color: isActive ? "#71CD13" : "black",
                                    };
                                }}
                            >
                                CONTACT
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="nav_icons">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <i class="fa-solid fa-cart-shopping"></i>
                    <i class="fa-regular fa-user"></i>
                    <i class="fa-regular fa-heart"></i>
                </div>
            </div>

        </div>
    )
}

export default Navbar