import React from 'react';

export default class Company extends React.Component<any> {
    render() {
        return (
            <div className="card mb-3 border-0">
                <div className="md:flex gap-4">
                    <div className="md:w-1/5 d-flex align-items-center p-4">
                        <img src={this.props.logo} className="object-fit-cover transition duration-700 hover:scale-125 w-full" alt={this.props.name} />
                    </div>
                    <div className="md:w-4/5">
                        <div className="card-body">
                            <h5 className="font-bold text-lg">{this.props.name}</h5>
                            <p className="text-gray-400">
                                {this.props.description}
                            </p>
                            <p className="text-gray-400">
                                <small className="text-muted">{this.props.start} - {this.props.end}</small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}