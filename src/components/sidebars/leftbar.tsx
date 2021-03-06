import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle, AiOutlineRetweet } from "react-icons/ai";
import { IconContext } from "react-icons";
import {ILeftBarState} from '../../interfaces/myState';

export default class LeftBar extends React.Component<any, ILeftBarState> {
    constructor(props: any) {
        super(props);
        this.state = {
            isRealAvatar: false,
            isToggle: false
        }
    }

    changeAvatar = () => {
        this.setState(
            {
                isRealAvatar: !this.state.isRealAvatar
            }
        )
    }

    toggleBar = () => {
        this.setState(
            {
                isToggle: !this.state.isToggle
            }
        )
    }

    render() {
        return (
            <div>
                <div className="p-4 text-center justify-items-center position-relative avatar">
                    <img src={this.state.isRealAvatar? "https://github.com/f7deat.png" : "https://i.gifer.com/FSrf.gif"} alt="avatar" className="hoverable object-fit-cover rounded-circle shadow" width="200" height="200" onClick={this.changeAvatar} />
                    <div className="swich-avatar text-danger">
                        <AiOutlineRetweet />
                    </div>
                </div>
                <div className="p-2 text-center justify-items-center">
                    <a href="https://github.com/f7deat" className="mr-2">
                        <IconContext.Provider value={{ className: "icon-2x" }}>
                            <AiFillGithub />
                        </IconContext.Provider>
                    </a>
                    <a href="https://www.linkedin.com/in/f7deat/" className="mr-2">
                        <IconContext.Provider value={{ className: "icon-2x" }}>
                            <AiFillLinkedin />
                        </IconContext.Provider>
                    </a>
                    <a href="https://twitter.com/f7deat">
                        <IconContext.Provider value={{ className: "icon-2x twitter-color" }}>
                            <AiFillTwitterCircle />
                        </IconContext.Provider>
                    </a>
                </div>
                <div className="p-2 text-center">
                    <h1 className="h4 font-weight-bold">Đinh Công Tân</h1>
                    <div className="text-muted">
                        Hai Phong, Viet Nam
          </div>
                </div>
                <div className="p-2">
                    <div className="text-muted mt-2">
                        Email
          </div>
                    <div className="font-weight-bold">
                        <a href="mailto:f7deat@gmail.com">f7deat@gmail.com</a>
                    </div>
                    <div className="text-muted mt-3">
                        Phone
                    </div>
                    <div className="font-weight-bold">
                        <a href="telto:84762559696">(+84) 762.559.696</a>
                    </div>
                    <div className="text-muted mt-3">
                        Date Of Birth
                    </div>
                    <div className="font-weight-bold">
                        November 20, 1996
                    </div>
                </div>
            </div>
        )
    }
}