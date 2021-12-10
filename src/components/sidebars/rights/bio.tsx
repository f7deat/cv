import React from 'react';

export default class Bio extends React.Component {
    render() {
        return (
            <div className="pt-3 text-gray-400">
                Hi, I'm Tan. So happy to meet you here ♥
                <div className='flex gap-2 items-center'>
                    <img src="https://camo.githubusercontent.com/40dff491d4e8123af55298ef908faedb66c463e5/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f57556c706c634d704f43456d5447427442572f67697068792e676966" className='h-5' alt="Cat Coding" /> Just coding ...
                </div>
            </div>
        )
    }
}