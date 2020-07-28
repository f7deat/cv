import React from 'react';
import { RiReactjsLine, RiAppsLine, RiTaskLine, RiMore2Line } from "react-icons/ri";
import { IconContext } from "react-icons";

export default class Menu extends React.Component {
    render() {
        return (
            <nav className="nav flex-column h-100 text-center">
                <a className="nav-link py-4 active" href="#/a">
                    <IconContext.Provider value={{ className: "icon-2x" }}>
                        <RiReactjsLine className="icon-2x" />
                    </IconContext.Provider>
                </a>
                <a className="nav-link py-4" href="#/a">
                    <IconContext.Provider value={{ className: "icon-2x" }}>
                        <RiAppsLine />
                    </IconContext.Provider>
                </a>
                <a className="nav-link py-4" href="#/a">
                    <IconContext.Provider value={{ className: "icon-2x" }}>
                        <RiTaskLine />
                    </IconContext.Provider>
                </a>
                <a className="nav-link py-4 disabled" href="#/a" tabIndex={-1} aria-disabled="true">
                    <IconContext.Provider value={{ className: "icon-2x" }}>
                        <RiMore2Line />
                    </IconContext.Provider>
                </a>
            </nav>
        )
    }
}