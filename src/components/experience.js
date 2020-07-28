import React from 'react';

export default class Experience extends React.Component {
    render() {
        return (
            <div className="mt-4">
                <div className="card mb-3 border-0">
                    <div className="row no-gutters">
                        <div className="col-md-2 d-flex align-items-center">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/2/29/FPT_Software_Logo.png" className="object-fit-cover" width="auto" height="100" alt="fsoft" />
                        </div>
                        <div className="col-md-10">
                            <div className="card-body">
                                <h5 className="card-title">FPT Software</h5>
                                <p className="card-text text-muted">
                                FPT Software is a global IT services and outsourcing company headquartered in Hanoi, Vietnam. It is a subsidiary of FPT Corporation, a multinational ...
                                </p>
                                <p className="card-text">
                                    <small className="text-muted">Sep 2018 - Nov 2019</small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mb-3 border-0">
                    <div className="row no-gutters">
                        <div className="col-md-2 d-flex align-items-center">
                            <img src="https://i.pinimg.com/originals/09/5c/e5/095ce50e2e1713a50fdf12e81f8c98cd.png" className="object-fit-cover" width="100%" alt="vccorp" />
                        </div>
                        <div className="col-md-10">
                            <div className="card-body">
                                <h5 className="card-title">VCCorp</h5>
                                <p className="card-text text-muted">
                                Vietnam Communications Corporation (VC Corp) is a leading internet company in Vietnam, with top products in online content, e-commerce, social ...
                                </p>
                                <p className="card-text">
                                    <small className="text-muted">Nov 2019 - Mar 2020</small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}