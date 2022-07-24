import React from "react";
import { Link } from "react-router-dom";

export default class PublicHeader extends React.Component{
    render() {
        return(
            <div className="base-container">
                <nav>
                    <ul className="main-menu">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/service">Services</Link>
                            <ul className="sub-menu">
                                <li>
                                <Link to="/oldpatients">Oldpatients</Link>
                                </li>
                                <li>
                                <Link to="/currentpatients">Currentpatients</Link>
                                </li>
                            </ul>
                        </li>
                        <Link to="/setting">Settings</Link>
                    </ul>
                </nav>
            </div>
        )
    }
}