import React from 'react';
import { RiArrowUpLine, RiArrowDownLine } from "react-icons/ri";
import { IconContext } from 'react-icons';

export default class Overall extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: this.props.isShow
        };
    }
    toggleBody() {
        this.setState({
            show: !this.state.show
          });
    }
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
                        <button className="btn btn-link p-0" data-toggle="collapse"  data-target={`#${this.props.id}`} aria-expanded="false" onClick={() => this.toggleBody()}>
                            <IconContext.Provider value={{ className: "icon-1r" }}>
                                {this.state.show ? <RiArrowUpLine /> : <RiArrowDownLine />}
                            </IconContext.Provider>
                        </button>
                    </div>
                    <div className={showCollapse} id={this.props.id}>
                        {this.props.Component}
                    </div>
                </div>
        )
    }
}