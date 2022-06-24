import React, { useState, useEffect } from "react";
import './style.css';
import QuestionCards from "./Components/questionCards";
import ScoreCard from "./Components/scoreCard";
import Questions from "./Questions/Questions";


function App() {
  const [questionBank, setQuestionBank] = useState([]);
  const [score, setScore] = useState(0);
  const [count, setCount] = useState(0);

  const computeAnswer = (value, correct) => {
    if (value === correct) {
      setScore((prevScore) => prevScore + 1);
    }
    setCount((prevCount) => prevCount + 1);
  };

  const getQuestions = () => {
    Questions().then((res) => {
      setQuestionBank(res);
    });
  };

  useEffect(() => {
    getQuestions();
  }, []);

  const restartGame = () => {
    getQuestions();
    setCount(0);
    setScore(0);
  };

  return (
    <div className="container">
      <div className="title">Quiz App</div>
      {count === 5 ? (
        <div>
          <ScoreCard score={score} restart={restartGame} />
        </div>
      ) : (
        <div>
          {questionBank.length > 0 &&
            questionBank.map(({ question, questionId, correct, answers }) => {
              return (
                <QuestionCards
                  key={questionId}
                  question={question}
                  options={answers}
                  selectedValue={(value) => computeAnswer(value, correct)}
                />
              );
            })}
        </div>
      )}
    </div>
  );
}

export default App;
