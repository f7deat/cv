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
                <Overall title="Bio" Component={<Bio />} icon={<RiUserHeartLine />} isShow={true} id="collapseBio" />
                <div className="mt-4">
                    <Overall title="Developer Highlights" Component={<DeveloperHighlights />} icon={<RiCodeSSlashLine />} isShow={false} id="collapseHighlights" />
                </div>
                <div className="mt-4">
                    <Overall title="Overall Thoughts" Component={<OverallThoughts />} icon={<RiChat3Line />} isShow={false} id="collapseOverallThoughts" />
                </div>
                <div className="mt-4">
                    <Overall title="Overall Experience" Component={<OverallExperience />} icon={<RiMedal2Line />} isShow={false} id="collapseOverallExperience" />
                </div>
                <div className="mt-4">
                    <Overall title="Notes" Component={<Notes />} icon={<RiStickyNote2Line />} isShow={false} id="collapseNotes" />
                </div>
                <div className="mt-4">
                    <Overall title="Favorite" Component={<Favorite/>} icon={<FaViadeo />} isShow={false} id="collapseFavorite" />
                </div>
            </div>
        )
    }
}