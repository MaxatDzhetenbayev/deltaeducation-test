import React from 'react';

export const ProgressBar = ({ current, total }) => {
    const percentage = (current / total) * 100;

    return (
        <div style={{ position: 'relative', width: '100%', backgroundColor: '#e0e0e0', height: '20px' }}>
            <div style={{ width: `${percentage}%`, backgroundColor: 'green', height: '20px' }}></div>
            <img src="./gifs/cat.gif" style={{ position: 'absolute', left: `calc(${percentage}% - 110px)`, top: '-113px' }} alt="Running Cat" />
        </div>
    );
};


