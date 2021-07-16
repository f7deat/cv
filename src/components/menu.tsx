import React from 'react';
import { RiReactjsLine, RiAppsLine, RiTaskLine, RiMore2Line } from "react-icons/ri";
import { IconContext } from "react-icons";
import { Link } from 'react-router-dom';

export default class Menu extends React.Component {
    render() {
        return (
            <nav className="nav text-center">
                <Link className="nav-link active" to="/">
                    <IconContext.Provider value={{ className: "icon-2x App-logo" }}>
                        <RiReactjsLine className="icon-2x" />
                    </IconContext.Provider>
                </Link>
                <Link className="nav-link" to="/app">
                    <IconContext.Provider value={{ className: "icon-2x" }}>
                        <RiAppsLine />
                    </IconContext.Provider>
                </Link>
                <Link className="nav-link" to="/task">
                    <IconContext.Provider value={{ className: "icon-2x" }}>
                        <RiTaskLine />
                    </IconContext.Provider>
                </Link>
                <Link className="nav-link disabled" to="/" tabIndex={-1} aria-disabled="true">
                    <IconContext.Provider value={{ className: "icon-2x" }}>
                        <RiMore2Line />
                    </IconContext.Provider>
                </Link>
            </nav>
        )
    }
}