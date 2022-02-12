import React from 'react';
import Experience from './experience';
import Skill from './skill';

export default class Content extends React.Component {
    render() {
        return (
            <div className="mt-3">
                <div className="title mb-4 border-b border-slate-300 py-3">
                    <div className="text-slate-400 font-bold text-lg">
                        Applicant
                    </div>
                    <h1 className="text-2xl font-bold">
                        Dinh Cong Tan Details
                    </h1>
                </div>
                <h2 className="font-bold text-2xl mt-4">Experience</h2>
                <Experience />
                <h2 className="font-bold text-2xl mt-4">Technical Skill</h2>
                <Skill />
            </div>
        )
    }
}