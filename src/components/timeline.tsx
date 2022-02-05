import React from 'react';
import '../css/timeline.css';

export default class TimeLine extends React.Component {
    render() {
        return (
            <div className='hidden md:block'>
                <h2 className="h4 font-bold mt-4">Education</h2>
                <div className="py-4 timeline justify-content-around md:flex">
                    <div className="timeline-item">
                        <div className="timeline-icon shadow-sm bg-danger">
                            High school
                        </div>
                        <div className="timeline-body">
                            <div className="pb-2 font-weight-bold" style={{ fontSize: '1.2rem' }}>2008</div>
                            <div className="mt-2">
                                Ly Thuong Kiet High school
                            </div>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-icon shadow-sm bg-primary">
                            University
                        </div>
                        <div className="timeline-body">
                            <div className="pb-2 font-weight-bold" style={{ fontSize: '1.2rem' }}>2011</div>
                            <div className="mt-2">
                                Hai Phong University
                            </div>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-icon shadow-sm bg-dark">
                            Other
                        </div>
                        <div className="timeline-body">
                            <div className="pb-2 font-weight-bold" style={{ fontSize: '1.2rem' }}>2018</div>
                            <div className="mt-2">
                                Fresher Adacemy FPT Software
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}