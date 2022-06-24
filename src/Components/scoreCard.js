import React from "react";

function ScoreCard({score}) {
    return (
        <div className="score-card">
            <h2 className="your-score">Your Score: </h2>
            <button className="btn-play">Play</button>
        </div>
    )
}

export default ScoreCard;