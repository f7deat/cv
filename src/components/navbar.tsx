import React from 'react';
import { RiHomeLine, RiMoreLine, RiSearchLine, RiSunLine } from "react-icons/ri";
import { IconContext } from "react-icons";
import { INavBarState } from '../interfaces/myState';
import { Link } from 'react-router-dom';

export default class Navbar extends React.Component<any, INavBarState> {
    constructor(props: any) {
        super(props)
        this.state = {
            isSwiched: false
        }
    }
    switchTheme() {
        if (this.state.isSwiched) {
            document.getElementsByTagName('html')[0].classList.add('dark-theme');
        }
        else {
            document.getElementsByTagName('html')[0].classList.remove('dark-theme');
        }
        this.setState({
            isSwiched: !this.state.isSwiched
        })
    }
    showProfile() {

    }
    render() {
        return (
            <header className="flex border-b justify-between">
                <div>
                    <button className="h-16 w-20 hover:text-blue-500 flex justify-center items-center">
                        <Link to="/">
                            <IconContext.Provider value={{ className: "icon-1r" }}>
                                <RiHomeLine />
                            </IconContext.Provider>
                        </Link>
                    </button>
                </div>
                <div className='flex-grow flex justify-end'>
                    <div className="hidden md:block w-full border-l border-r px-4">
                        <div className="d-flex h-100">
                            <IconContext.Provider value={{ className: "h-100 text-muted" }}>
                                <RiSearchLine />
                            </IconContext.Provider>
                            <input type="text" className="border-0 form-control h-100 nav-search-box" placeholder="Search for any thing..." />
                        </div>
                    </div>
                    <button className="h-16 hover:text-blue-500 w-20 flex justify-center items-center" onClick={() => this.switchTheme()}>
                        <IconContext.Provider value={{ className: "icon-1r" }}>
                            <RiSunLine />
                        </IconContext.Provider>
                    </button>
                    <button className="h-16 hover:text-blue-500 w-20 flex justify-center items-center" onClick={() => this.showProfile()}>
                        <IconContext.Provider value={{ className: "icon-1r" }}>
                            <RiMoreLine />
                        </IconContext.Provider>
                    </button>
                </div>
            </header >
        )
    }
}