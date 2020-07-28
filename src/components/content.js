import React from 'react';
import TimeLine from './timeline';
import Experience from './experience';

export default class Content extends React.Component {
    render() {
        return (
            <div className="mt-3">
                <div className="title mb-4">
                    <div className="text-muted" style={{ fontSize: '1.2rem', fontWeight: 500 }}>
                        Appliant
                </div>
                    <h1 className="h2">
                        Dinh Cong Tan Details
                </h1>
                </div>
                <h2 className="h4 font-weight-bold mt-4">Education</h2>
                <TimeLine/>
                <h2 className="h4 font-weight-bold mt-4">Experience</h2>
                <Experience/>
            </div>
        )
    }
}