import React from 'react'

function Universe() {
    return ( 
        <div className="container text-center" style={{marginTop:"150px", marginBottom:"150px"}}>
            <div className="row text-center">
                <h1 className='mb-3'>The Credon Universe</h1>
                <h4 className='mb-5 text-muted'>Extend your trading and investment experience even further with our partner platforms</h4>
                <div className="col p-3">
                    <img src="media/images/smallcaseLogo.png"/>
                    <p className="text-muted text-small p-3">Thematic investing platform
                    that helps you invest in diversified
                    baskets of stocks on ETFs.</p>
                </div>
                <div className="col p-3">
                    <img src="media/images/streakLogo.png" 
                    style={{width:"40%"}}/>
                    <p className="text-muted text-small p-3">Systematic trading platform
                    that allows you to create and backtest
                    strategies without coding.</p>
                </div>
                <div className="col p-3">
                    <img src="media/images/sensibullLogo.svg" 
                    style={{width:"60%"}}/>
                    <p className="text-muted text-small p-3">Options trading platform that lets you
                    create strategies, analyze positions, and examine
                    data points like open interest, FII/DII, and more.
                    </p>
                </div>
            </div>
            <div className="row text-center">
                <div className="col-2"></div>
                <div className="col-4 p-3">
                    <img src="media/images/goldenpiLogo.png" className=''
                    style={{width:"30%"}}/>
                    <p className='text-muted text-small p-5'>
                        Investment research platform
                        that offers detailed insights on stocks,
                        sectors, supply chains, and more.
                    </p>
                </div>
                <div className="col-4 p-3">
                    <img src="media/images/dittoLogo.png" className=''
                    style={{width:"20%"}}/>
                    <p className='text-muted text-small p-5'>Personalized advice on life
                    and health insurance. No spam
                    and no mis-selling.</p>
                </div>
                <div className="col-2"></div>
            </div>
            <button className="p-3 btn btn-primary fs-5" style={{width:"30%", margin:"0 auto"}}>Sign up for free</button>
        </div>
     );
}

export default Universe;