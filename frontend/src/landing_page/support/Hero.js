import React from 'react'

function Hero() {
    return ( 
        <section className="container-fluid" id='supportHero'>
            <div className="p-4" id='supportWrapper'>
                    <h4>Support Portal</h4>
                    <a href="" >Track Tickets</a>
            </div>
            <div className="row p-5 m-5">
                <div className="col p-5">
                    <h1 className='fs-3'>Search for an answer or browse help topics to create a ticket</h1>
                    <input type="text" 
                    className='mt-2 mb-2'
                    placeholder='eg. how do i activate F&O '/>
                    <p ><a href="" >Track account opening</a>&nbsp;
                    <a href="" >Track segment activation</a>&nbsp;
                    <a href="" > Intraday margins </a>&nbsp;
                    <a href="" >Kite user manual</a>
                    </p>
                </div>
                <div className="col p-5 lema">
                    <h1>Featured</h1>
                    <ol style={{lineHeight:"2.3"}}>
                        <li><a href="" >Current TakeOvers and Delisting</a></li>
                        <li><a href="" >Latest Intraday Leverages</a></li>
                    </ol>
                </div>
            </div>
        </section>
     );
}

export default Hero;