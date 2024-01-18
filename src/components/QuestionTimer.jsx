import { useState, useEffect } from "react";


export default function QuestionTimer({ timeout, onTimeout, mode }) {

    const [ remainingTime, setRemainingTime] = useState(timeout)

    useEffect(() => {

        console.log('Setting timeout')
        const plantedTimeout = setTimeout(onTimeout, timeout)

        return () => {clearTimeout(plantedTimeout);}
    }, [timeout, onTimeout])

    useEffect(() => {
        console.log('Setting interval')
        const plantedInterval = setInterval(() => {
            setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
        }, 100)

        return () => {clearInterval(plantedInterval);}
        
    }, [])

    return(
        <>
        <progress max={timeout} value={remainingTime} id="question-time" className={mode}></progress>
        </>
    )
}