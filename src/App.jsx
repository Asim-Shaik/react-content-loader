import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import ContentLoader from "react-content-loader";

function App() {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // setLoading(true)
    const timer = setTimeout(() => {
      console.log("This will run after 1 second!");
      setLoading(false);
          // setLoading(!loading);
    }, 2000);
    // setLoading(true);
    return () => clearTimeout(timer);
  });

  return (
    <div>
      {loading ? (
        <ContentLoader
        
          speed={2}
          width={476}
          height={124}
          viewBox="0 0 476 124"
          backgroundColor="#ababab"
          foregroundColor="#766b6b"
          // {...props}
        >
          <rect x="48" y="8" rx="3" ry="3" width="88" height="10" className="loader-animation"/>
          <rect x="48" y="26" rx="3" ry="3" width="52" height="10"className="loader-animation" />
          <rect x="0" y="56" rx="3" ry="3" width="410" height="10" className="loader-animation"/>

          <rect x="4" y="4" rx="3" ry="3" width="38" height="10" className="loader"/> 
        </ContentLoader>
       ) : (
        <div>data fetched</div>
      )} 
    </div>
  );
}

export default App;
