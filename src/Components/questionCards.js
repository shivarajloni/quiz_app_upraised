import React, { useState } from "react";

function QuestionCards({question, options, }) {
    const [answer] = useState(options);
    return (
        <div className="questionCard">
            <h4 className="questions">question here</h4>
            <button className="btn-answer">options here</button>
        </div>
    )
}

export default QuestionCards;