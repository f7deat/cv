import React, { useEffect, useState } from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";
import { HiOutlineLocationMarker, HiPencilAlt } from "react-icons/hi";
import { RiUserFollowLine } from "react-icons/ri";
import { BiGitRepoForked } from "react-icons/bi";
import { IconContext } from "react-icons";
import axios from 'axios';
import { User } from '../../interfaces/user';
import SvgMorphPlugin from 'rc-tween-one/lib/plugin/SvgMorphPlugin';
import TweenOne from 'rc-tween-one';
import Texty from 'rc-texty';
import Children from 'rc-tween-one/lib/plugin/ChildrenPlugin';

TweenOne.plugins.push(Children);

export default function LeftBar(props: any) {

    const [user, setUser] = useState<User>();
    TweenOne.plugins.push(SvgMorphPlugin);

    useEffect(() => {
        axios.get('https://api.github.com/users/f7deat').then(response => {
            setUser(response.data)
        })
    }, [])

    return (
        <div>
            <div className='mb-4 flex items-center justify-center'>
                <div className="avatar rounded-circle bg-gray-800 cursor-move">
                    <img src={user?.avatar_url} alt="avatar" className="object-fit-cover rounded-circle shadow hover:opacity-75 duration-500 transition" width="200" height="200" />
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
                <h1 className="h4 font-weight-bold"><Texty>{user?.name}</Texty></h1>
                <div className='flex justify-center gap-3'>
                    <div className='flex items-center gap-1'>
                        <span className='font-medium'>
                            <TweenOne animation={{
                                duration: 1000,
                                Children: {
                                    value: user?.followers,
                                    floatLength: 0
                                }
                            }}></TweenOne>
                        </span>
                        <RiUserFollowLine />
                    </div>
                    <div className='flex items-center gap-1'>
                        <span className='font-medium'>
                            <TweenOne animation={{
                                duration: 1000,
                                Children: {
                                    value: user?.public_repos,
                                    floatLength: 0
                                }
                            }}></TweenOne>
                        </span>
                        <BiGitRepoForked />
                    </div>
                    <div className='flex items-center gap-1'>
                        <span className='font-medium'>
                            <TweenOne animation={{
                                duration: 1000,
                                Children: {
                                    value: user?.public_gists,
                                    floatLength: 0
                                }
                            }}></TweenOne>
                        </span>
                        <HiPencilAlt />
                    </div>
                </div>
                <div className="text-gray-500 flex gap-1 items-center justify-center">
                    <HiOutlineLocationMarker />
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