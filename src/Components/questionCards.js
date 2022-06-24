import React, { useState } from "react";

function QuestionCards({question, options, selectedValue }) {
    const [answer, setAnswers] = useState(options);
    return (
        <div className="questionCards">
            <h3 className="questions">{question}</h3>
                {answer.map((item, index) => (
            <button
                key={index}
                className="btn-answer"
                onClick={() => {
                setAnswers([item]);
                selectedValue(item);
                }}
            >
            {item}
            </button>
        ))}
    </div>
    )
}

export default QuestionCards;