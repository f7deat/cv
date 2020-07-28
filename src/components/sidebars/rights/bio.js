import React from 'react';

export default class Bio extends React.Component {
    render() {
        return (
            <div className="text-muted pt-3" style={{ fontSize: '0.875rem', fontWeight: 500 }}>
                Hi, I'm Tan. So happy to meet you here, I have nothing to say about myself but loneliness
                <br />
                Just coding ...
                <div className="mt-2">
                    <a href="https://fb.me/tan.dct" className="text-primary font-weight-bolder">
                        +Need More
                    </a>
                </div>
            </div>
        )
    }
}