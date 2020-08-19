import React from 'react';
import { RiHomeLine, RiMoreLine, RiSearchLine, RiSunLine } from "react-icons/ri";
import { IconContext } from "react-icons";
import {INavBarState} from '../interfaces/myState';

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
    render() {
        return (
            <header>
                <div className="row border-bottom">
                    <div className="col-md-1 border-right text-center hoverable">
                        <div className="p-3">
                            <IconContext.Provider value={{ className: "icon-1r" }}>
                                <RiHomeLine />
                            </IconContext.Provider>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="d-flex h-100">
                            <IconContext.Provider value={{ className: "h-100 text-muted" }}>
                                <RiSearchLine />
                            </IconContext.Provider>
                            <input type="text" className="border-0 form-control h-100 nav-search-box" placeholder="search for any thing..." />
                        </div>
                    </div>
                    <div className="col-md-2 border-left text-center hoverable" onClick={() => this.switchTheme()}>
                        <div className="p-3">
                            <IconContext.Provider value={{ className: "icon-1r" }}>
                                <RiSunLine />
                            </IconContext.Provider>
                        </div>
                    </div>
                    <div className="col-md-1 border-left text-center hoverable">
                        <div className="p-3">
                            <IconContext.Provider value={{ className: "icon-1r" }}>
                                <RiMoreLine />
                            </IconContext.Provider>
                        </div>
                    </div>
                </div>
            </header >
        )
    }
}