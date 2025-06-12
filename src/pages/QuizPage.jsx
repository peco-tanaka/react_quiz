import Button from "../components/Button";
import Display from "../components/Display"
import quizData from "../data/quiz";

export default function QuizPage() {
  const quizIndex = 0;

  return (
    <>
      <Display>
        {`Q1. ${quizData[quizIndex].question}`}
      </Display>
      <Button>{quizData[quizIndex].options[0]}</Button>
      <Button>{quizData[quizIndex].options[1]}</Button>
      <Button>{quizData[quizIndex].options[2]}</Button>
      <Button>{quizData[quizIndex].options[3]}</Button>
    </>
  )
}
