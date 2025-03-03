import React from 'react';
import { NavLink, Link } from "react-router";
import navbarIcon from '../../../images/navbar.png'
import './Navbar.css'

import { useState, useEffect } from 'react';
// @ts-ignore
import { Collapse } from 'bootstrap';

const Navbar = ({ user: any }) => {
    let [toggle, setToggle] = useState(false);
    const collapsed = "nav navbar-nav";

    //Every render, a side effect
    useEffect(() => {
        let myCollapse = document.getElementById('collapsibleNavbar')
        let bsCollapse = new Collapse(myCollapse, { toggle: false })
        toggle ? bsCollapse.show() : bsCollapse.hide()
    })

    return (
        <nav className="navbar-bg navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <div className="navbar-header">
                    <NavLink
                        className="navbar-brand"
                        to="/">

                        <img className="navbarIcon" src={navbarIcon} alt="">
                        </img>

                        <span>DeckRefactory Alpha</span>
                    </NavLink>
                </div>

                <button className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapsibleNavbar"
                    onClick={() => setToggle(toggle => !toggle)}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse " id="collapsibleNavbar">
                    <div className="navbar-collapsible">
                        <ul className={toggle ? collapsed : collapsed + " navbar-collapsible-2"}>
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    to="/">
                                    Home
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    to="/builder">
                                    Build a Deck
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    to="/manager">
                                    Manage Decks
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to="/copyright">
                                    Copyright
                                </NavLink>
                            </li>
                        </ul>

                        <ul className={toggle ? collapsed : collapsed + " navbar-collapsible-3"}>
                            {false ?
                                (<React.Fragment>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/profile">
                                            Profile
                                        </NavLink>
                                    </li>

                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/logout">
                                            Sign Out
                                        </NavLink>
                                    </li>
                                </React.Fragment>)
                                :
                                (<React.Fragment>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/register">
                                            Register
                                        </NavLink>
                                    </li>

                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/login">
                                            Login
                                        </NavLink>
                                    </li>
                                </React.Fragment>)
                            }

                        </ul>
                    </div>

                </div>
            </div>

        </nav >
    );
}


export default Navbar;
