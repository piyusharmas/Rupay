import React from 'react'

function Hero() {
    return ( 
        <div className="container">
            <div className="row text-center border-bottom p-5 mb-3 mt-5">
                <h1 className='mb-3'>Charges</h1>
                <h3 className='text-muted mb-5 fs-5'>List of all charges and taxes</h3>
            </div>
            <div className="row p-5 text-center">
                <div className="col p-4 pb">
                    <img src="media/images/pricingEquity.svg" alt="" />
                    <h1 className='fs-3'>Free equity delivery</h1>
                    <p className='text-muted mt-3'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className="col p-4 pb">
                    <img src="media/images/intradayTrades.svg" alt="" />
                    <h4 className='fs-3'>Intraday and F&O trades</h4>
                    <p className='text-muted mt-3'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className="col p-4 pb">
                    <img src="media/images/pricingEquity.svg" alt="" />
                    <h4 className='fs-3'>Free direct MF</h4>
                    <p className='text-muted mt-3'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
     );
}

export default Hero;