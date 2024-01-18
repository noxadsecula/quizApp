import { useRef } from "react";

export default function Answers({answers, selectedAnswer, answerState, onSelectAnswer}) {

    const shuffledAnswersRef = useRef()

    if(!shuffledAnswersRef.current) {
        shuffledAnswersRef.current = [...answers];
        shuffledAnswersRef.current.sort(() => Math.random() - 0.5);
    }
    return (
        <ul id="answers">
                    {shuffledAnswersRef.current.map(answer => {
                        const isSelected = selectedAnswer === answer;
                        let cssClasses = '';
                        

                        if(answerState === 'answered' && isSelected) {
                            cssClasses = 'selected';
                        }

                        if((answerState === 'correct' || answerState === 'wrong') && isSelected) {
                            cssClasses = answerState;
                        }

                        return (<li key={answer} className="answer">
                            <button onClick={() => onSelectAnswer(answer)} className={cssClasses} disabled={answerState !== ''}>{answer}</button>
                        </li>)
                        }
                    )
                    }
        </ul>
    )
}