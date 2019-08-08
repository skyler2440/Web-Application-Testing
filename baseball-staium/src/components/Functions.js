import Dashboard from './Dashboard'
export const strikes = () => {
    if (strike === 3){
        setStrike(0)
        setBall(0)
    }  else {
    setStrike(strike + 1)
    }
}
export const balls = () => {
    if (ball ===4){
        setStrike(0)
        setBall(0)
    } else{
    setBall(ball + 1)
    }
}
export const fouls = () => {
    if (strike < 2) {
        setStrike(strike+1)
        setFoul(foul+1)
    }else{
        setFoul(foul+1)
    }
}
export const hits = () => {
    setStrike(0)
    setBall(0)
    setFoul(0)
}