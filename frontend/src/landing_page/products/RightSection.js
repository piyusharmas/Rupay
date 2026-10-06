import React from 'react'

function RightSection({imageUrl, productName, productDescription, learnMore}) {
    return (  
        <div className="container mt-5">
        <div className="row">
            <div className="col p-5" style={{marginTop:"190px"}}>
                <h1>{productName}</h1>
                <p className="fs-5 text-muted">{productDescription}</p>
                <div className="mb-1">
                <a href={learnMore}> Learn More <i class="fa-solid fa-arrow-right-long"></i></a>
                </div>
            </div>
            <div className="col p-3">
                <img src={imageUrl} className="p-2"/>
            </div>

        </div>
    </div>
    );
}

export default RightSection;