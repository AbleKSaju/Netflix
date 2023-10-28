import React from "react";
import './Shimmer.css'
function Shimmer() {
  return (
    <>
    <div className="titleShimmer"></div>
    <div className="posters">
      {Array(9).fill('').map(e=><div className='smallPosterShimmer'> </div>)}
      </div>
    </>
  );
}

export default Shimmer;
