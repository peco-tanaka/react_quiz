import Button from "../components/Button";
import Display from "../components/Display";
import quizData from "../data/quiz";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../const";

export default function QuizPage() {
  // 第一引数はstate関数、第２引数はset関数
  const [quizIndex, setQuizIndex] = useState(0);
  const [answerLogs, setAnswerLogs] = useState([]);
  const navigate = useNavigate();
  const MAX_QUIZ_LEN = quizData.length;

  const handleClick = (clickedIndex) => {
    if(clickedIndex === quizData[quizIndex].answerIndex){
      setAnswerLogs(prev => [...prev, true])
    } else {
      setAnswerLogs(prev => [...prev, false])
    }
    setQuizIndex(prev => prev + 1);
  };

  useEffect(() => {
    if(answerLogs.length === MAX_QUIZ_LEN) {
      const correctNum = answerLogs.filter(answer => answer === true);
      navigate(ROUTES.RESULT, {
        state: {
          maxQuizLen: MAX_QUIZ_LEN,
          correctNum: correctNum
        }
      });
    }
  }, [answerLogs, MAX_QUIZ_LEN, navigate]);

  return (
    <>
      {/* && で条件付きレンダリング */}
      {quizData[quizIndex] && <Display>{`Q.${quizIndex + 1} ${quizData[quizIndex].question}`}</Display>}
      {quizData[quizIndex] && quizData[quizIndex].options.map((option, index) =>
        <Button key={`option-${index}`} onClick={() => handleClick(index)}>{option}</Button>
      )}
    </>
  );
}
