import './App.css'
import React, { useState, useEffect } from 'react';
import ProgressBar from './components/ProgressBar';
import CircularProgressBar from './components/CircularPB';



function App() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {

    setProgress(0);


    const delay = 150; 
    const step = 1; 

   
    const updateProgress = () => {
      setProgress((prevProgress) => {
        const nextProgress = prevProgress + step;
        return nextProgress >= 100 ? 100 : nextProgress;
      });
    };


    const interval = setInterval(updateProgress, delay);

    return () => clearInterval(interval);
  }, []);
  return (


    <div className="Present--wrapper">
    
 <div style={{
  width:'400px'
 }}>
      <h1>ProgressBar</h1>
      <ProgressBar value={progress} MainBackground='grey'  ProgressBackground='green' ProgressRadius='35px'     NumIndicate={true} NumIndicateColor="#000" NumIndicateSize="18px" NumIndicateWeight="bold" />
    </div>



    <div>
      <h1>rounded ProgressBar</h1>
      <CircularProgressBar  NumIndicate={true} progressColor={'orange'}  NumIndicateSize='25px' NumIndicateColor="#000"  NumIndicateWeight="lighter"  value={progress} strokeWidth={10} sqSize={100} />
      
    </div>


    </div>
  );
}

export default App;
