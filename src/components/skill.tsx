import React from 'react';
import skills from '../data/skill.json';
import { RiStarLine } from "react-icons/ri";
import { IconContext } from "react-icons";

export default class Skill extends React.Component {
    render() {
        return (
            <div className="md:flex flex-wrap mt-4">
                {
                    skills.map((value, index) => (
                        <div className="md:w-1/2" key={index}>
                            <div className='px-4 py-2 flex items-center justify-between'>
                                <div className="font-weight-bold">
                                    {value.name}
                                </div>
                                <div>
                                    <IconContext.Provider value={{ className: "text-warning mb-1" }}>
                                        {value.rate} <RiStarLine />
                                    </IconContext.Provider>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}