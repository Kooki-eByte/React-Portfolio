import React from "react"
import { Link } from "react-router-dom"
import "./styles.css"

export default function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">
                Cristian Portfolio
            </Link>
            <div>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link
                        to="/project"
                        className={
                            window.location.pathname === "/project" || window.location.pathname === "/home"
                            ? "nav-link active"
                            : "nav-link"
                        }
                        >
                        Projects
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                        to="/form"
                        className={
                            window.location.pathname === "/form" || window.location.pathname === "/home"
                            ? "nav-link active"
                            : "nav-link"
                        }
                        >
                        Form
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}