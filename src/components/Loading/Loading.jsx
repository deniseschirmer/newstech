import BeatLoader from "react-spinners/BeatLoader";
// import { useState, useEffect } from "react";
import "./Loading.css"


const LoadingPage = () => {
  
  return (
    <div className="loading-container">
       
         <BeatLoader size={15} color={"#ac36d6"} loading={true} /> 
        
    </div>
  )
}

export default LoadingPage; 