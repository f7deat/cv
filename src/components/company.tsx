import React from 'react';

export default class Company extends React.Component<any> {
    render() {
        return (
            <div className="card mb-3 border-0" data-aos="fade-up">
                <div className="row no-gutters">
                    <div className="col-md-2 d-flex align-items-center">
                        <img src={this.props.logo} className="object-fit-cover" width="100%" alt={this.props.name} />
                    </div>
                    <div className="col-md-10">
                        <div className="card-body">
                            <h5 className="card-title">{this.props.name}</h5>
                            <p className="card-text text-muted">
                                {this.props.description}
                            </p>
                            <p className="card-text">
                                <small className="text-muted">{this.props.start} - {this.props.end}</small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}