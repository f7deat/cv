import React from 'react';
import { RiReactjsLine, RiAppsLine, RiTaskLine, RiMore2Line } from "react-icons/ri";
import { IconContext } from "react-icons";
import { Link } from 'react-router-dom';

export default class Menu extends React.Component {
    render() {
        return (
            <nav className="nav flex-column h-100 text-center">
                <Link className="nav-link py-4 active" to="/">
                    <IconContext.Provider value={{ className: "icon-2x" }}>
                        <RiReactjsLine className="icon-2x" />
                    </IconContext.Provider>
                </Link>
                <Link className="nav-link py-4" to="/app">
                    <IconContext.Provider value={{ className: "icon-2x" }}>
                        <RiAppsLine />
                    </IconContext.Provider>
                </Link>
                <Link className="nav-link py-4" to="/task">
                    <IconContext.Provider value={{ className: "icon-2x" }}>
                        <RiTaskLine />
                    </IconContext.Provider>
                </Link>
                <Link className="nav-link py-4 disabled" to="/" tabIndex={-1} aria-disabled="true">
                    <IconContext.Provider value={{ className: "icon-2x" }}>
                        <RiMore2Line />
                    </IconContext.Provider>
                </Link>
            </nav>
        )
    }
}