import React from 'react';
import { Title } from '../../components/typography';
import Technologies from '../../components/technologies';
import ScrollAnim from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';

const ScrollOverPack = ScrollAnim.OverPack;

export default class MyTask extends React.Component {

    render() {
        return (
            <div>
                <Title>My Tasks</Title>
                <ScrollOverPack>
                    <QueueAnim key='queueAnim1' delay={300}>
                        <h2 className="h4 font-bold mt-4">FPT Software</h2>
                        <div className="py-2 border-bottom-dashed">
                            <div className="font-bold">CEC-MUL</div>
                            <div>
                                Description: <span className="text-muted">Migration ERP system from VB6 to VB.NET, UT and IT</span><br />
                                <Technologies data={['VB6', 'VB.NET', 'SQL Server', 'Winform', 'Component One']} />
                                Team Size: <span className="text-muted">20</span>
                            </div>
                        </div>
                    </QueueAnim>
                    <div className="py-2 border-bottom-dashed">
                        <div className="font-bold">THS-TIE_UP</div>
                        <div>
                            Description: <span className="text-muted">Migration Toyota system from VB6 to VB.NET, Write DD, Review DD, UT</span><br />
                            <Technologies data={['VB6', 'VB.NET', 'Oracle', 'Winform', 'Component One']} />
                            Team Size: <span className="text-muted">60 - 70</span>
                        </div>
                    </div>
                    <h2 className="h4 font-bold mt-4">VCCorp</h2>
                    <div className="py-2 border-bottom-dashed">
                        <div className="font-bold">CMS LOTUS</div>
                        <div>
                            Description: <span className="text-muted">Write API for CMS Lotus</span><br />
                            <Technologies data={['.NET Core', 'C#', 'Elasticsearch', 'SQL Server', 'Redis']} />
                            Team Size: <span className="text-muted">4</span>
                        </div>
                    </div>
                    <div className="py-2 border-bottom-dashed">
                        <div className="font-bold">Crawl Data</div>
                        <div>
                            Description: <span className="text-muted">Fix bug from special data taken from existing Crawl Data tool</span><br />
                            <Technologies data={['NodeJs', 'cheerio']} />
                            Team Size: <span className="text-muted">1</span>
                        </div>
                    </div>
                    <div className="py-2 border-bottom-dashed">
                        <div className="font-bold">Monitoring Server</div>
                        <div>
                            Description: <span className="text-muted">Create Monitoring server for CMS Lotus</span><br />
                            Technical: <span className="text-muted">AppMetrics, Prometheus, Grafana</span><br />
                            <Technologies data={['AppMetrics', 'Prometheus', 'Grafana']} />
                            Team Size: <span className="text-muted">1</span>
                        </div>
                    </div>
                    <h2 className="h4 font-bold mt-4">Novaon</h2>
                    <div className="py-2 border-bottom-dashed">
                        <div className="font-bold">Facebook Ads</div>
                        <div>
                            Description: <span className="text-muted">Create Facebook Ads tool for advance user</span><br />
                            <Technologies data={['Facebook API', 'ASP.NET MVC5', 'JQuyery', 'JavaScript', 'AngularJs', 'Bootstrap', 'SQL Server']} />
                            Team Size: <span className="text-muted">3</span>
                        </div>
                    </div>
                    <div className="py-2 border-bottom-dashed">
                        <div className="font-bold">OnMarketer</div>
                        <div>
                            Description: <span className="text-muted"><a href='https://www.onmarketer.net/' target="_blank" rel="noreferrer" className='text-blue-800 font-medium'>OnMarketer</a> - The leading Marketing Automation platform - is a personalized customer journey building solution that helps optimize website conversions automatically with an intuitive drag and drop tool.</span><br />
                            <Technologies data={['Google API', 'ASP.NET MVC5', 'JQuyery', 'JavaScript', 'AngularJs', 'Bootstrap', 'SQL Server']} />
                            Team Size: <span className="text-muted">6</span>
                        </div>
                    </div>
                    <h2 className="h4 font-bold mt-4">VNPT-IT</h2>
                    <div className="py-2 border-bottom-dashed">
                        <div className="font-bold">eZoZo</div>
                        <div>
                            Description: <span className="text-muted"><a href='https://ezozo.vn' target="_blank" rel="noreferrer" className='text-blue-800 font-medium'>eZoZo</a> is professional restaurant management software</span><br />
                            <Technologies data={['Angular']} />
                            Besponsile for: <span className="text-muted">Front-end Developer</span><br />
                            Team Size: <span className="text-muted">6</span>
                        </div>
                    </div>
                    <div className="py-2 border-bottom-dashed">
                        <div className="font-bold">VNPT Portal</div>
                        <div>
                            Description: <span className="text-muted"><a href='https://vnptweb.vn' target="_blank" rel="noreferrer" className='text-blue-800 font-medium'>VNPT Portal</a> is a solution that allows Government agencies to create a single online focal point for all subjects</span><br />
                            <Technologies data={['Webform', 'Javascript', 'Jquery', 'SqlServer', 'Selelium', 'Telerik']} />
                            Besponsile for: <span className="text-muted">Fullstack Developer</span><br />
                            Team Size: <span className="text-muted">5</span>
                        </div>
                    </div>

                    <QueueAnim key='queueAnim'>
                        <div className="py-2 border-bottom-dashed">
                            <div className="font-bold">Levande</div>
                            <div>
                                Description: Build web appliance subscription service<br />
                                <Technologies data={['EPI Server', '.NET Framework', 'C#', 'VueJs', 'Gigya']} />
                                Besponsile for: <span className="text-muted">Fullstack Developer</span><br />
                                Team Size: <span className="text-muted">5</span>
                            </div>
                        </div>
                    </QueueAnim>
                </ScrollOverPack>
            </div>
        )
    }
}