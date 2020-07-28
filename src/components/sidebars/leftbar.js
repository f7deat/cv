import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";
import { IconContext } from "react-icons";

export default class LeftBar extends React.Component {
    render() {
        return (
            <div className="h-100">
                <div className="p-4 text-center justify-items-center">
                    <img src="https://i.gifer.com/FSrf.gif" alt="avatar" className="object-fit-cover rounded-circle shadow" width="165" height="160" />
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
                </div>
            </div>
        )
    }
}