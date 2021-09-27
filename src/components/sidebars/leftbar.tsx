import React, { useEffect, useState } from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle, AiOutlineRetweet } from "react-icons/ai";
import { IconContext } from "react-icons";
import axios from 'axios';
import { User } from '../../interfaces/user';

export default function LeftBar(props: any) {

    const [user, setUser] = useState<User>();

    useEffect(() => {
        axios.get('https://api.github.com/users/f7deat').then(response => {
            setUser(response.data)
        })
    }, [])

    return (
        <div>
            <div className="p-4 text-center justify-items-center position-relative avatar">
                <img src={props.isRealAvatar ? "https://github.com/f7deat.png" : "https://i.gifer.com/FSrf.gif"} alt="avatar" className="hoverable object-fit-cover rounded-circle shadow" width="200" height="200" />
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
                <a href={`https://twitter.com/${user?.twitter_username}`} target="_blank" rel="noopener noreferrer">
                    <IconContext.Provider value={{ className: "icon-2x twitter-color" }}>
                        <AiFillTwitterCircle />
                    </IconContext.Provider>
                </a>
            </div>
            <div className="p-2 text-center">
                <h1 className="h4 font-weight-bold">{user?.name}</h1>
                <div className="text-muted">
                    {user?.location}
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