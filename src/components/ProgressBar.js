import React from 'react';

const ProgressBar = ({ value,NumIndicateColor,NumIndicateSize,NumIndicate,ProgressBackground,MainBackground,ProgressRadius,NumIndicateWeight }) => {
  const progressValue = Math.max(0, Math.min(value, 100));

  return (
    <div 

    style={{
       width: '100%', 
       height:'50px',
      position:'relative',
       backgroundColor:MainBackground,
       borderRadius:ProgressRadius,
       }}>

        
      <div
        className='progres-wrapper'
        style={{
          width: `${progressValue}%`,
          height: '100%',
          backgroundColor: ProgressBackground,
          borderRadius:ProgressRadius,
          transition: 'width 0.5s ease-in-out', 
        }}
      />
  {NumIndicate && (
          <span 
          
          style={{
            position:'absolute',
            left:'45%',
            top:"20%",
            color:NumIndicateColor,
            fontSize:NumIndicateSize,
            fontWeight:NumIndicateWeight,

          }}  
          
          >{progressValue}</span>
          )}

    </div>
  );
};

export default ProgressBar;
