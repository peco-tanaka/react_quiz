import Display from "../components/Display"

export default function QuizPage() {
  const quizIndex = 0;

  return (
    <>
      <Display>
        {`Q1. ${quizData[quizIndex].question}`}
      </Display>

    </>
  )
}