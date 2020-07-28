import React from 'react';
import Bio from './rights/bio';
import DeveloperHighlights from './rights/highlights';
import OverallThoughts from './rights/thoughts';
import OverallExperience from './rights/overallexperience';
import Notes from './rights/notes';
import { RiUserHeartLine, RiArrowDownLine, RiCodeSSlashLine, RiArrowUpLine,
    RiChat3Line, RiMedal2Line, RiStickyNote2Line } from "react-icons/ri";
import { IconContext } from 'react-icons';

export default class RightBar extends React.Component {
    render() {
        return (
            <div className="collapsed">
                <div className="collapsed-item">
                    <div className="collapsed-title pt-4 pb-1 d-flex align-items-center border-bottom">
                        <h2 className="font-weight-bold h4 flex-grow-1">
                            <IconContext.Provider value={{ className: "icon-1r mr-2" }}>
                                <RiUserHeartLine />
                            </IconContext.Provider>
                            Bio
                        </h2>
                        <button className="btn btn-link p-0">
                            <IconContext.Provider value={{ className: "icon-1r" }}>
                                <RiArrowUpLine />
                            </IconContext.Provider>
                        </button>
                    </div>
                    <div className="collapsed-body">
                        <Bio />
                    </div>
                </div>
                <div className="collapsed-item mt-4">
                    <div className="collapsed-title pt-4 pb-1 d-flex align-items-center border-bottom">
                        <h2 className="font-weight-bold h4 flex-grow-1">
                            <IconContext.Provider value={{ className: "icon-1r mr-2" }}>
                                <RiCodeSSlashLine />
                            </IconContext.Provider>
                            Developer Highlights
                        </h2>
                        <button className="btn btn-link p-0">
                            <IconContext.Provider value={{ className: "icon-1r" }}>
                                <RiArrowDownLine />
                            </IconContext.Provider>
                        </button>
                    </div>
                    <div className="collapsed-body">
                        <DeveloperHighlights />
                    </div>
                </div>
                <div className="collapsed-item mt-4">
                    <div className="collapsed-title pt-4 pb-1 d-flex align-items-center border-bottom">
                        <h2 className="font-weight-bold h4 flex-grow-1">
                            <IconContext.Provider value={{ className: "icon-1r mr-2" }}>
                                <RiChat3Line />
                            </IconContext.Provider>
                            Overall Thoughts
                        </h2>
                        <button className="btn btn-link p-0">
                            <IconContext.Provider value={{ className: "icon-1r" }}>
                                <RiArrowDownLine />
                            </IconContext.Provider>
                        </button>
                    </div>
                    <div className="collapsed-body">
                        <OverallThoughts />
                    </div>
                </div>
                <div className="collapsed-item mt-4">
                    <div className="collapsed-title pt-4 pb-1 d-flex align-items-center border-bottom">
                        <h2 className="font-weight-bold h4 flex-grow-1">
                            <IconContext.Provider value={{ className: "icon-1r mr-2" }}>
                                <RiMedal2Line />
                            </IconContext.Provider>
                            Overall Experience
                        </h2>
                        <button className="btn btn-link p-0">
                            <IconContext.Provider value={{ className: "icon-1r" }}>
                                <RiArrowDownLine />
                            </IconContext.Provider>
                        </button>
                    </div>
                    <div className="collapsed-body">
                        <OverallExperience />
                    </div>
                </div>
                <div className="collapsed-item mt-4">
                    <div className="collapsed-title pt-4 pb-1 d-flex align-items-center border-bottom">
                        <h2 className="font-weight-bold h4 flex-grow-1">
                            <IconContext.Provider value={{ className: "icon-1r mr-2" }}>
                                <RiStickyNote2Line />
                            </IconContext.Provider>
                            Notes
                        </h2>
                        <button className="btn btn-link p-0">
                            <IconContext.Provider value={{ className: "icon-1r" }}>
                                <RiArrowDownLine />
                            </IconContext.Provider>
                        </button>
                    </div>
                    <div className="collapsed-body">
                        <Notes />
                    </div>
                </div>
            </div>
        )
    }
}