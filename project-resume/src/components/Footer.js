import React from 'react';

export default function Footer() {
    return (
        <>
            <footer className="main text-center mt-5 text-white">
                <div className="container p-2 pb-2">
                    <div className="text-center text-white">
                        <p>Resources</p>
                        {/* <a className="text-warning"
                            href="https://apexcharts.com/react-chart-demos/candlestick-charts/basic/"
                            alt="Apex charts reference">Apex Charts </a> |
                        <a className="text-warning"
                            href="https://datahub.io/core/s-and-p-500-companies"
                            alt="S&P 500 Companies with Financial Information">companylist</a> |
                        <a className="text-warning"
                            href="https://codepen.io/antibland/pen/ypagZd"
                            alt="slot machine reference"> slotmachine </a> */}
                        &copy; 2022 Copyright: <a className="text-primary"
                            href="https://github.com/jcaole?tab=repositories"
                            alt="jcaole repository">My Repository</a>
                    </div>
                </div>
            </footer>
        </>
    );
}