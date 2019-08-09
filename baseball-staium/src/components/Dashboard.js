import React, {useState, useEffect} from 'react';
import Display from './Display'
const Dashboard = () => {
   
    const [strike, setStrike] = useState(0);
    const [ball, setBall] = useState(0);
    const [foul, setFoul] = useState(0);
    
   function strikes () {
        if (strike === 2){
            setStrike(0)
            setBall(0)
        }  else {
        setStrike(strike + 1)
        }
    }
    function balls(){
        if (ball === 3){
            setStrike(0)
            setBall(0)
        } else{
        setBall(ball + 1)
        }
    }
    function fouls(){
        if (strike < 2) {
            setStrike(strike+1)
            setFoul(foul+1)
        }else{
            setFoul(foul+1)
        }
    }
    function hits(){
        setStrike(0)
        setBall(0)
        setFoul(0)
    }
    return(
        <>
        <h1>Player at Bat</h1>
        <button onClick={()=>strikes()}>Strike</button>
        <button onClick={()=>balls()}>Ball</button>
        <button onClick={()=>fouls()}>Foul</button>
        <button onClick={()=>hits()}>Hit</button>
        
        
        <Display strike={strike} ball={ball} foul={foul} />
        {/* <Functions strike={strike} ball={ball} foul={foul} /> */}
        </>
    )
}
export default Dashboard;