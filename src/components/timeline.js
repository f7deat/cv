import React from 'react';
import '../css/timeline.scss';
import { RiTimerLine } from 'react-icons/ri';
import { IconContext } from 'react-icons';

export default class TimeLine extends React.Component {
    render() {
        return (
            <div className="py-4 d-flex timeline justify-content-around">
                <div className="timeline-item">
                    <div className="timeline-icon shadow-sm bg-danger">
                        <IconContext.Provider value={{ className: "icon-2x" }}>
                            <RiTimerLine />
                        </IconContext.Provider>
                    </div>
                    <div className="timeline-body shadow p-4">
                        <div className="pb-2 font-weight-bold" style={{fontSize:'1.2rem'}}>2008</div>
                        <div className="mt-2">
                            Ly Thuong Kiet high school
                        </div>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-icon shadow-sm bg-primary">
                        <IconContext.Provider value={{ className: "icon-2x" }}>
                            <RiTimerLine />
                        </IconContext.Provider>
                    </div>
                    <div className="timeline-body shadow p-4">
                        <div className="pb-2 font-weight-bold" style={{fontSize:'1.2rem'}}>2011</div>
                        <div className="mt-2">
                            Hai Phong University
                        </div>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-icon shadow-sm bg-info">
                        <IconContext.Provider value={{ className: "icon-2x" }}>
                            <RiTimerLine />
                        </IconContext.Provider>
                    </div>
                    <div className="timeline-body shadow p-4">
                        <div className="pb-2 font-weight-bold" style={{fontSize:'1.2rem'}}>2018</div>
                        <div className="mt-2">
                            Fresher Adacemy FPT Software
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}