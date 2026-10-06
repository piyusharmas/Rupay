import React from 'react'

function Team() {
    return ( 
        <div className="container p-5">
            <div className="row mb-2 mt-2 p-5 border-top">
                <h1 className='text-center mt-5'>People</h1>
            </div>
            <div className="row p-5 mb-2 mt-1">
                <div className="col text-center p-5">
                    <img src="media/images/nithinKamath.jpg" alt="" 
                    style={{borderRadius:"100%", width:"60%"}}/>
                    <h4 className='mt-5 text-muted'>Nithin Kamath</h4>
                    <h6 className='text-muted'>Founder, CEO</h6>
                </div>
                <div className="col text-muted p-5" 
                    style={{lineHeight:"1.8", fontSize:"1.2em"}}>
                    <p>
                        Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
                        </p><p>
                        He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
                        </p><p>
                        Playing basketball is his zen. 
                    </p>
                    <p>Connect on <a href="">Homepage</a> / <a href="">TradingQ&A</a> / <a href="">Twitter</a> </p>
                </div>
            </div>
        </div>
     );
}

export default Team;