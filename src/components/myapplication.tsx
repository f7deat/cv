import React from 'react';
import {RiExternalLinkLine} from 'react-icons/ri';

export default class MyApplication extends React.Component {
    render() {
        return (
            <div>
                <h1 className="h2">My Application</h1>
                <div>
                    You can see my all project created by me on <a href="https://github.com/f7deat">GITHUB <RiExternalLinkLine/></a> <i>(exclude private :D)</i>
                </div>
                <div className="font-weight-bold mt-3">Live project</div>
                <div className="mt-2">
                    <ul>
                        <li><b><a href="https://defzone.net">DefZone.Net</a></b>: <span className="text-muted">My Primary Blog. Source: .Net core</span></li>
                        <li><b><a href="https://f7deat.blogger.com">Blogger template</a></b>: <span className="text-muted">Over ten star on <a href="https://github.com/f7deat/F7Deat-Blogger"><RiExternalLinkLine/> Github</a> :D</span></li>
                        <li><b><a href="https://f7deat.github.io/cv">My CV</a></b>: <span className="text-muted">Current page :lol: <a href="https://github.com/f7deat/cv"><RiExternalLinkLine/> Github</a></span></li>
                        <li><b><a href="https://defsrc.xyz">DefSrc.Xyz</a></b>: <span className="text-muted">A software to save documents for political</span></li>
                        <li className="text-muted">... I will update in free time :lovely:</li>
                    </ul>
                </div>
                <h1 className="h2">My Portfolio</h1>
            </div>
        )
    }
}