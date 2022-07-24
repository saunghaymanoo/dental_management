import React from "react";
import { Link } from "react-router-dom";

export default class Header extends React.Component{
    render() {
        return(
            <div className="base-container">
                <nav>
                    <ul className="main-menu">
                        <li>
                            <Link to="/dashboard">Dashboard</Link>
                        </li>
                        <li>
                            <Link to="/patients">Patients</Link>
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