import React, { useState } from 'react';
import { RiArrowUpLine, RiArrowDownLine } from "react-icons/ri";
import { IconContext } from 'react-icons';

type OverallProps = {
    icon: any;
    title: string;
    visible: boolean
}

const Overall: React.FC<OverallProps> = (props) => {
    const [visible, setVisible] = useState<boolean>(!props.visible)

        return (
            <div className="collapsed-item">
                <div className="collapsed-title pt-4 pb-1 flex align-items-center border-bottom">
                    <h2 className="font-bold flex-grow flex items-center">
                        <IconContext.Provider value={{ className: "icon-1r mr-2" }}>
                            {props.icon}
                        </IconContext.Provider>
                        {props.title}
                    </h2>
                    <button className="btn btn-link p-0" onClick={() => setVisible(!visible)}>
                        <IconContext.Provider value={{ className: "icon-1r" }}>
                            {visible ? <RiArrowUpLine /> : <RiArrowDownLine />}
                        </IconContext.Provider>
                    </button>
                </div>
                <div hidden={visible}>
                    {props.children}
                </div>
            </div>
        )
}

export default Overall