import React from 'react';

const CircularProgressBar = ({ value, strokeWidth, sqSize,NumIndicateColor,NumIndicate,NumIndicateWeight,NumIndicateSize, progressColor }) => {
  const radius = (sqSize - strokeWidth) / 2;
  const viewBox = `0 0 ${sqSize} ${sqSize}`;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * value) / 100;

  return (
    <div style={{ position: 'relative', width: sqSize, height: sqSize }}>
      <svg width={sqSize} height={sqSize} viewBox={viewBox}>
        <circle
          className="circle-background"
          cx={sqSize / 2}
          cy={sqSize / 2}
          r={radius}
          strokeWidth={strokeWidth}
          fill="transparent"
        />

        <circle
          className="circle-progress"
          cx={sqSize / 2}
          cy={sqSize / 2}
          r={radius}
          strokeWidth={strokeWidth}
          transform={`rotate(-90 ${sqSize / 2} ${sqSize / 2})`}
          style={{
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffset,
            stroke: progressColor,
            transition: 'stroke-dashoffset 0.5s ease',
          }}
          fill="transparent"
        />
      </svg>
      {NumIndicate && (
        <span
          style={{
            display: 'block',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: NumIndicateColor,
            fontSize: NumIndicateSize,
            fontWeight: NumIndicateWeight,
          }}
        >
          {`${value}%`}
        </span>
      )}
    </div>
  );
};

export default CircularProgressBar;