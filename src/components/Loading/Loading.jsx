import BeatLoader from "react-spinners/BeatLoader";
import { useState, useEffect } from "react";


const LoadingPage = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 10000);
  }, [])

  return (
    <div className="loading-container">
       {loading && (
         <BeatLoader size={15} color={"#ac36d6"} loading={loading} /> 
        )}
    </div>
  )
}

export default LoadingPage; 