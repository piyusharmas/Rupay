import React from "react";

function LeftSection({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
        <div className="row">
            <div className="col p-3">
                <img src={imageUrl} alt="Rupay" className="p-2"/>
            </div>
            <div className="col p-5 mt-4">
                <h1>{productName}</h1>
                <p className="fs-5 text-muted">{productDescription}</p>
                <div className="mb-1">
                <a href={tryDemo}>Try Demo <i class="fa-solid fa-arrow-right-long"></i></a>
                <a href={learnMore} style={{marginLeft:"50px"}}> Learn More <i class="fa-solid fa-arrow-right-long"></i></a>
                </div>
                <div className="mb-2 mt-4">
                <a href={googlePlay}> <img src="media/images/googlePlayBadge.svg" alt="Rupay"/> </a>
                <a href={appStore} style={{marginLeft:"50px"}}> <img src="media/images/appstoreBadge.svg" alt="Rupay"/> </a>
                </div>
            </div>
        </div>
    </div>
  );
}

export default LeftSection;