import React from 'react';

export default class MyTask extends React.Component {
    render() {
        return (
            <div>
                <h1 className="h2">My Tasks</h1>
                <h2 className="h4 font-weight-bold mt-4">FPT Software</h2>
                <div className="py-2 border-bottom-dashed">
                    <div className="font-weight-bold">CEC-MUL</div>
                    <div>
                        Description: <span className="text-muted">Migration ERP system from VB6 to VB.NET, UT and IT</span><br/>
                        Technical: <span className="text-muted">VB6, VB.NET, SQL Server, Component One,...</span><br/>
                        Team Size: <span className="text-muted">20</span>
                    </div>
                </div>
                <div className="py-2 border-bottom-dashed">
                    <div className="font-weight-bold">THS-TIE_UP</div>
                    <div>
                        Description: <span className="text-muted">Migration Toyota system from VB6 to VB.NET, Write DD, Review DD, UT</span><br/>
                        Technical: <span className="text-muted">VB6, VB.NET, Oracle, Component One, Wonderfull report</span><br/>
                        Team Size: <span className="text-muted">60 - 70</span>
                    </div>
                </div>
                <h2 className="h4 font-weight-bold mt-4">VCCorp</h2>
                <div className="py-2 border-bottom-dashed">
                    <div className="font-weight-bold">CMS LOTUS</div>
                    <div>
                        Description: <span className="text-muted">Write API for CMS Lotus</span><br/>
                        Technical: <span className="text-muted">.NET Core, Restful API, Redis, Elasticsearch, SQL Server, Telegram API</span><br/>
                        Team Size: <span className="text-muted">4 - just backend, my co-worker very strong and power full</span>
                    </div>
                </div>
                <div className="py-2 border-bottom-dashed">
                    <div className="font-weight-bold">Crawl Data</div>
                    <div>
                        Description: <span className="text-muted">Fix bug from special data taken from existing Crawl Data tool</span><br/>
                        Technical: <span className="text-muted">NodeJs, cheerio</span><br/>
                        Team Size: <span className="text-muted">just me</span>
                    </div>
                </div>
                <div className="py-2 border-bottom-dashed">
                    <div className="font-weight-bold">Monitoring Server</div>
                    <div>
                        Description: <span className="text-muted">Create Monitoring server for CMS Lotus</span><br/>
                        Technical: <span className="text-muted">AppMetrics, Prometheus, Grafana</span><br/>
                        Team Size: <span className="text-muted">just me and a lot of helper from my leader</span>
                    </div>
                </div>
                <h2 className="h4 font-weight-bold mt-4">Novaon</h2>
                <div className="py-2 border-bottom-dashed">
                    <div className="font-weight-bold">Facebook Ads</div>
                    <div>
                        Description: <span className="text-muted">Create Facebook Ads tool for advance user</span><br/>
                        Technical: <span className="text-muted">Facebook API, ASP.NET MVC5, HightChartJs, JQuyery, JavaScript, Bootstrap, SQL Server,...</span><br/>
                        Team Size: <span className="text-muted">3</span>
                    </div>
                </div>
                <div className="py-2 border-bottom-dashed">
                    <div className="font-weight-bold">Google Shopping</div>
                    <div>
                        Description: <span className="text-muted">Create Google Shopping Tool for any user</span><br/>
                        Technical: <span className="text-muted">Google API, ASP.NET MVC5, JQuyery, JavaScript, AngularJs, Bootstrap, SQL Server,...</span><br/>
                        Team Size: <span className="text-muted">6 - colleague very fun, i'm so happy in here</span>
                    </div>
                </div>
            </div>
        )
    }
}