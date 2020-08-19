import React from 'react';
import MySkill from './skills/myskill';

export default class Skill extends React.Component {
    render() {
        return (
            <div className="row mt-4">
                <div className="col-md-6">
                    <table className="table table-borderless">
                        <thead className="border-bottom text-muted text-uppercase">
                            <tr>
                                <th className="font-weight-normal">
                                    Name
                            </th>
                                <th className="font-weight-normal">
                                    Rate
                            </th>
                            </tr>
                        </thead>
                        <tbody>
                            <MySkill name="ReactJs" rate="4"/>
                            <MySkill name="VueJs" rate="3"/>
                            <MySkill name="CSS, CSS3, SASS" rate="5"/>
                            <MySkill name="HTML, HTML5" rate="5"/>
                            <MySkill name="AngularJs" rate="4"/>
                            <MySkill name="Angular" rate="2"/>
                            <MySkill name="React Native" rate="2"/>
                            <MySkill name="Vuex, Redux" rate="2"/>
                            <MySkill name="Elastic Search" rate="3"/>
                        </tbody>
                    </table>
                </div>
                <div className="col-md-6">
                    <table className="table table-borderless">
                        <thead className="border-bottom text-muted text-uppercase">
                            <tr>
                                <th className="font-weight-normal">
                                    Name
                            </th>
                                <th className="font-weight-normal">
                                    Rate
                            </th>
                            </tr>
                        </thead>
                        <tbody>
                            <MySkill name="C#" rate="5"/>
                            <MySkill name="TypeScript" rate="5"/>
                            <MySkill name="SQL Server, MySQL, Oracle" rate="4"/>
                            <MySkill name=".NET, .NET Core" rate="5"/>
                            <MySkill name="ASP.NET, ASP.NET Core" rate="5"/>
                            <MySkill name="VB6, VB.NET" rate="5"/>
                            <MySkill name="Javascript, JQuery" rate="5"/>
                            <MySkill name="UI/UX" rate="5"/>
                            <MySkill name="Redis" rate="3"/>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}