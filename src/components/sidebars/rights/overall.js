import React from 'react';
import { RiArrowUpLine } from "react-icons/ri";
import { IconContext } from 'react-icons';

export default class Overall extends React.Component {
    render() {
        let showCollapse = this.props.isShow ? "collapse show" : "collapse";
        return (
            <div className="collapsed-item">
                    <div className="collapsed-title pt-4 pb-1 d-flex align-items-center border-bottom">
                        <h2 className="font-weight-bold h4 flex-grow-1">
                            <IconContext.Provider value={{ className: "icon-1r mr-2" }}>
                                {this.props.icon}
                            </IconContext.Provider>
                            {this.props.title}
                        </h2>
                        <button className="btn btn-link p-0" data-toggle="collapse"  data-target="#collapseExample" aria-expanded="false">
                            <IconContext.Provider value={{ className: "icon-1r" }}>
                                <RiArrowUpLine />
                            </IconContext.Provider>
                        </button>
                    </div>
                    <div className={showCollapse} id="collapseExample">
                        {this.props.Component}
                    </div>
                </div>
        )
    }
}