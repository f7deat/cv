import React from 'react';
import Bio from './rights/bio';
import Overall from './rights/overall';
import DeveloperHighlights from './rights/highlights';
import OverallThoughts from './rights/thoughts';
import OverallExperience from './rights/overallexperience';
import Notes from './rights/notes';
import {
    RiUserHeartLine, RiCodeSSlashLine,
    RiChat3Line, RiMedal2Line, RiStickyNote2Line
} from "react-icons/ri";
import {
    FaViadeo
} from "react-icons/fa"
import { Favorite } from '../favorite';

export default class RightBar extends React.Component {
    render() {
        return (
            <div className="collapsed">
                <Overall title="Bio" icon={<RiUserHeartLine />} visible={true}>
                    <Bio />
                </Overall>
                <div className="mt-4">
                    <Overall title="Developer Highlights" icon={<RiCodeSSlashLine />} visible={false}>
                        <DeveloperHighlights />
                    </Overall>
                </div>
                <div className="mt-4">
                    <Overall title="Overall Thoughts" icon={<RiChat3Line />} visible={false} >
                        <OverallThoughts />
                    </Overall>
                </div>
                <div className="mt-4">
                    <Overall title="Overall Experience" icon={<RiMedal2Line />} visible={false} >
                        <OverallExperience />
                    </Overall>
                </div>
                <div className="mt-4">
                    <Overall title="Notes" icon={<RiStickyNote2Line />} visible={false}>
                        <Notes />
                    </Overall>
                </div>
                <div className="mt-4">
                    <Overall title="Favorite" icon={<FaViadeo />} visible={false}>
                        <Favorite />
                    </Overall>
                </div>
            </div>
        )
    }
}