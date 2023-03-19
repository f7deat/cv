import React, { useEffect, useState } from 'react';
import { RiHomeLine, RiMoreLine, RiSearchLine, RiSunLine } from "react-icons/ri";
import { IconContext } from "react-icons";
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {

    const [theme, setTheme] = useState<boolean>((localStorage.getItem('theme') || false) as boolean);

    useEffect(() => {
        if (theme) {
            document.getElementsByTagName('html')[0].classList.add('dark-theme');
            localStorage.setItem('theme', 'dark')
        }
        else {
            document.getElementsByTagName('html')[0].classList.remove('dark-theme');
            localStorage.removeItem('theme')
        }
    }, [theme])

    return (
        <header className="flex border-b justify-between">
            <div>
                <button className="h-16 w-20 flex justify-center items-center">
                    <Link to="/" className=' hover:text-blue-800'>
                        <IconContext.Provider value={{ className: "icon-1r" }}>
                            <RiHomeLine />
                        </IconContext.Provider>
                    </Link>
                </button>
            </div>
            <div className='flex-grow flex justify-end'>
                <div className="hidden md:block w-full border-l border-r px-4">
                    <div className="items-center flex h-full gap-2">
                        <IconContext.Provider value={{ className: "h-100 text-muted" }}>
                            <RiSearchLine />
                        </IconContext.Provider>
                        <input type="text" className="border-0 form-control h-100 nav-search-box" placeholder="Search for any thing..." />
                    </div>
                </div>
                <button className="h-16 hover:text-blue-500 w-20 flex justify-center items-center" onClick={() => setTheme(!theme)}>
                    <IconContext.Provider value={{ className: "icon-1r" }}>
                        <RiSunLine />
                    </IconContext.Provider>
                </button>
                <button className="h-16 hover:text-blue-500 w-20 flex justify-center items-center" >
                    <IconContext.Provider value={{ className: "icon-1r" }}>
                        <RiMoreLine />
                    </IconContext.Provider>
                </button>
            </div>
        </header >
    )
}

export default Navbar