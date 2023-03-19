import React, { ReactElement } from 'react';
import { RiReactjsLine, RiAppsLine, RiTaskLine, RiMore2Line } from "react-icons/ri";
import { IconContext } from "react-icons";
import { Link } from 'react-router-dom';

export default class Menu extends React.Component {
    render() {
        return (
            <nav className="text-center justify-around md:justify-start flex md:flex-col">
                <Link className="nav-link active text-blue-800" to="/">
                    <IconContext.Provider value={{ className: "icon-2x App-logo" }}>
                        <RiReactjsLine className="icon-2x" />
                    </IconContext.Provider>
                </Link>
                <MenuItem url='/repositories' icon={<RiAppsLine />} />
                <MenuItem url='/task' icon={<RiTaskLine />} />
                <MenuItem url='/' icon={<RiMore2Line />} />
            </nav>
        )
    }
}

type MenuItemProps = {
    url: string;
    icon: ReactElement
}

const MenuItem: React.FC<MenuItemProps> = (props) => (
    <Link className="nav-link hover:text-blue-800" to={props.url}>
        <IconContext.Provider value={{ className: "icon-2x" }}>
            {props.icon}
        </IconContext.Provider>
    </Link>
)