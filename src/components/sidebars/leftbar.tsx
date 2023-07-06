import React, { useEffect, useState } from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";
import { RiUserFollowLine } from "react-icons/ri";
import { IconContext } from "react-icons";
import axios from 'axios';
import { User } from '../../interfaces/user';
import SvgMorphPlugin from 'rc-tween-one/lib/plugin/SvgMorphPlugin';
import TweenOne from 'rc-tween-one';
import Texty from 'rc-texty';
import Children from 'rc-tween-one/lib/plugin/ChildrenPlugin';
import { GoLocation, GoPencil, GoRepoForked } from 'react-icons/go';

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
                <div className="avatar rounded-full bg-gray-800">
                    <img src={user?.avatar_url} alt="avatar" className="object-fit-cover rounded-full shadow transform transition duration-500 hover:scale-110" width="200" height="200" />
                </div>
            </div>
            <div className="p-2 text-center flex justify-center gap-4">
                <a href="https://github.com/f7deat">
                    <IconContext.Provider value={{ className: "icon-2x transform transition duration-500 hover:scale-110" }}>
                        <AiFillGithub />
                    </IconContext.Provider>
                </a>
                <a href="https://www.linkedin.com/in/f7deat/">
                    <IconContext.Provider value={{ className: "icon-2x text-blue-900 transform transition duration-500 hover:scale-110" }}>
                        <AiFillLinkedin />
                    </IconContext.Provider>
                </a>
                <a href={`https://twitter.com/${user?.twitter_username}`} target="_blank" rel="noopener noreferrer">
                    <IconContext.Provider value={{ className: "icon-2x text-sky-500 transform transition duration-500 hover:scale-110" }}>
                        <AiFillTwitterCircle />
                    </IconContext.Provider>
                </a>
            </div>
            <div className="p-2 text-center">
                <h1 className="font-bold text-3xl mb-3">
                    <Texty>{user?.name}</Texty>
                </h1>
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
                        <GoRepoForked />
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
                        <GoPencil />
                    </div>
                </div>
                <div className="text-gray-500 flex gap-1 items-center justify-center">
                    <GoLocation />
                    {user?.location}
                </div>
            </div>
            <div className="p-2">
                <div className="text-muted mt-2">
                    Email
                </div>
                <div className="font-bold">
                    <a href="mailto:f7deat@gmail.com">f7deat@gmail.com</a>
                </div>
                <div className="text-muted mt-3">
                    Phone
                </div>
                <div className="font-bold">
                    <a href="telto:84762559696">(+84) 762.559.696</a>
                </div>
                <div className="text-muted mt-3">
                    Date Of Birth
                </div>
                <div className="font-bold">
                    November 20, 1996
                </div>
            </div>
        </div>
    )
}