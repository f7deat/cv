import React from 'react';
import Company from './company';

export default class Experience extends React.Component {
    render() {
        return (
            <div className="mt-4">
                <Company logo="https://upload.wikimedia.org/wikipedia/commons/2/29/FPT_Software_Logo.png"
                    name="FPT Software"
                    description="FPT Software is a global IT services and outsourcing company headquartered in Hanoi, Vietnam. It is a subsidiary of FPT Corporation, a multinational ..."
                    start="Sep 2018" end="Nov 2019"
                />
                <Company logo="https://i.pinimg.com/originals/09/5c/e5/095ce50e2e1713a50fdf12e81f8c98cd.png"
                    name="VCCorp"
                    description="Vietnam Communications Corporation (VC Corp) is a leading internet company in Vietnam, with top products in online content, e-commerce, social ..."
                    start="Nov 2019" end="Mar 2020"
                />
                <Company logo="https://novaonads.com/wp-content/uploads/2015/08/NovaAds-thay-%C4%91%E1%BB%95i-nh%E1%BA%ADn-di%E1%BB%87n-th%C6%B0%C6%A1ng-hi%E1%BB%87u-th%C3%A0nh-NOVAON-ADS-3.png"
                    name="Novaon"
                    description="NOVAON works hard in becoming and maintaining the postion of one of the leading companies in Digital Marketing, in order to creat value in return ..."
                    start="Mar 2019" end="Now"
                />
            </div>
        )
    }
}