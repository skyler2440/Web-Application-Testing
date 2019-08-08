import React from 'react';

const Display = ({strike, ball, foul}) => {
    return(
        <>
        <h1>Display Works</h1>
        <p>Player has {strike} strikes</p>
        <p>Player has {ball} balls</p>
        <p>Player has {foul} fouls</p>
 

        </>
    )
}
export default Display;