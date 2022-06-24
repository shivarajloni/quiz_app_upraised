import React from "react";
import './style.css';
import QuestionCards from "./Components/questionCards";
import ScoreCard from "./Components/scoreCard";


function App() {
  return (
    <div className="container">
      <div className="title">Quiz App</div>
      <QuestionCards />
      <ScoreCard />
    </div>
  );
}

export default App;
