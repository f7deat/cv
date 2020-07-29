import React from 'react';

export default class DeveloperHighlights extends React.Component {
    render() {
        return (
            <div className="pt-3 text-muted">
                <div className="font-weight-bold">
                    - Best performance team of the year!
                </div>
                <div className="text-right mt-1 font-italic">
                    <small>FSOFT - 2018</small>
                </div>
                <div className="font-weight-bold mt-3">
                    - 3rd prize for scientific research student
                </div>
                <div className="text-right mt-1 font-italic">
                    <small>THP - 2018</small>
                </div>
            </div>
        )
    }
}