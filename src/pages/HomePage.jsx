import { Link } from "react-router-dom"
import { ROUTES } from "../const.js"

export default function HomePage() {
  return (
    <>
      <h1>Quiz App</h1>
      <Link to={ROUTES.QUIZ}>Start!</Link>
    </>
  )
}