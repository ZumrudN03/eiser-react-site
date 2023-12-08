import React, { useContext } from 'react'
import './index.scss'
import { NavLink } from 'react-router-dom'
import { BasketContext } from '../Context/basket'
import { WishlistContext } from '../Context/wishlist'
import { SearchContext } from '../Context/search'

const Navbar = () => {
    const { basket } = useContext(BasketContext)
    const {wishlist} =useContext(WishlistContext)
    const {handleSearch} = useContext(SearchContext)
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
                    <input className='input' type="text" onChange={(e)=>handleSearch(e)} />
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <NavLink
                        to="/basket"
                        style={({ isActive }) => {
                            return {
                                color: isActive ? "#71CD13" : "black",
                            };
                        }}
                    >
                        <i class="fa-solid fa-cart-shopping"></i>
                        <sup>{basket.length ? basket.length : ""}</sup>
                    </NavLink>
                    <i class="fa-regular fa-user"></i>
                    <NavLink
                        to="/wishlist"
                        style={({ isActive }) => {
                            return {
                                color: isActive ? "#71CD13" : "black",
                            };
                        }}
                    >
                        <i class="fa-regular fa-heart"></i>
                        <sup>{wishlist.length ? wishlist.length : ""}</sup>
                    </NavLink>
                    
                </div>
            </div>

        </div>
    )
}

export default Navbar