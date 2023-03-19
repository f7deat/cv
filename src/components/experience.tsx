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
                    start="Mar 2019" end="Mar 2021"
                />
                <Company logo="https://i.imgur.com/fg778IR.png"
                    name="VNPT-IT"
                    description="VNPT is a Vietnamese major mobile network operator headquartered in Hanoi, Vietnam. Founded on 26 June 1996, as a GSM launcher, VNPT is the second network..."
                    start="Mar 2021" end="Mar 2022"
                />
                <Company logo="https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBNTdIR3c9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--96de2f5c76fd9b21f20828e6e273eeb902a2a250/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RkhKbGMybDZaVjkwYjE5c2FXMXBkRnNIYVFJc0FXa0NMQUU9IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--492f60b9aac6e8159e50e72bb289c5feb47a79d4/Niteco_logo-07.png"
                    name="Niteco"
                    description="Niteco builds and delivers Website Development, eCommerce, Mobile Solutions as well as Digital Marketing projects that serve business needs."
                    start="Mar 2022" end="Mar 2023"
                />
            </div>
        )
    }
}