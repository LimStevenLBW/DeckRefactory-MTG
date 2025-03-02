import React from 'react';
import { NavLink, Link } from "react-router";
import navbarIcon from '../../../images/navbar.png'
import './Navbar.css'

const Navbar = ({ user: any }) => {
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

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse " id="collapsibleNavbar">
                    <div className="navbar-custom-mr">
                        <ul className="nav navbar-nav navbar-custom-mr2">
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

                        <ul className="nav navbar-nav navbar-custom-mr3 ">
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

        </nav>
    );
}


export default Navbar;
