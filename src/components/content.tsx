import React from 'react';
import TimeLine from './timeline';
import Experience from './experience';
import Skill from './skill';

export default class Content extends React.Component {
    render() {
        return (
            <div className="mt-3">
                <div className="title mb-4">
                    <div className="text-muted" style={{ fontSize: '1.2rem', fontWeight: 500 }}>
                        Applicant
                    </div>
                    <h1 className="h2">
                        Dinh Cong Tan Details
                    </h1>
                </div>
                <TimeLine />
                <h2 className="h4 font-bold mt-4">Experience</h2>
                <Experience />
                <h2 className="h4 font-bold mt-4" data-aos="fade-up">Technical Skill</h2>
                <Skill />
            </div>
        )
    }
}