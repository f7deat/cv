import React from 'react';

export default class Bio extends React.Component {
    render() {
        return (
            <div className="text-muted pt-3" style={{ fontSize: '0.875rem', fontWeight: 500 }}>
                Hi, I'm Tan. So happy to meet you here ♥, I have nothing to say about myself but loneliness
                <br />
                <img src="https://camo.githubusercontent.com/40dff491d4e8123af55298ef908faedb66c463e5/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f57556c706c634d704f43456d5447427442572f67697068792e676966" width="20" alt="cat coding"/> Just coding ...
                <div className="mt-2">
                    <a href="https://fb.me/tan.dct" className="text-primary font-weight-bolder" target="_blank">
                        +Need More
                    </a>
                </div>
            </div>
        )
    }
}