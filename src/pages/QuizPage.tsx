import { useState } from "react";
import QuizSteps from "../components/QuizSteps";
import { Question } from "../lib/definiton";

import checkSuccessIcon from "../assets/Check_round_fill.svg";
import checkFailedIcon from "../assets/Close_round_fill.svg";

const QuizPage = ({
  selectedAnswerList,
  selectAnswer,
  questions,
  onCorrectAnswer,
  onLastQuestion,
}: {
  selectedAnswerList: string[];
  selectAnswer: (answer: string, questionIndex: number) => void;
  questions: Question[];
  onCorrectAnswer: () => void;
  onLastQuestion: () => void;
}) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const rightAnswer = questions[currentQuestion].rightAnswer;
  const selectedAnswer = selectedAnswerList[currentQuestion];
  const activeSteps = selectedAnswerList.filter(
    (answer) => answer !== ""
  ).length;

  const nextQuestion = () => {
    if (currentQuestion === questions.length - 1) {
      return onLastQuestion();
    }

    setCurrentQuestion(currentQuestion + 1);
  };

  const checkAnswer = (answer: string) => {
    if (answer === rightAnswer) {
      onCorrectAnswer();
    }
    selectAnswer(answer, currentQuestion);
  };

  const NextButton = () => {
    return (
      <button
        onClick={nextQuestion}
        className="w-[200px] mx-auto flex items-center gap-2 justify-center bg-accent py-4 text-lg rounded-lg"
      >
        Next
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    );
  };

  return (
    <div className="px-6 sm:px-12 py-12 flex items-center min-h-screen">
      <div className="bg-secondary mx-auto w-[900px] rounded-lg pt-12 pb-12 px-6">
        <h1 className="text-center text-[#8B8EAB] mb-4">Country Quiz</h1>
        <div className="mb-8">
          <QuizSteps
            steps={10}
            active={activeSteps}
            selectActive={setCurrentQuestion}
          />
        </div>
        {/* question */}
        <div className="text-center text-xl sm:text-3xl mb-8">
          {questions[currentQuestion].question}
        </div>
        {/* answers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center max-w-[650px] mx-auto mb-6">
          {questions[currentQuestion].answers.map((answer) => (
            <button
              disabled={!!selectedAnswer}
              onClick={() => checkAnswer(answer)}
              className={`${
                selectedAnswer === answer ? "bg-accent" : ""
              } answer-button py-4 text-lg rounded-lg w-full px-4 md:w-[300px]`}
              key={answer}
            >
              <span className="relative z-10">
                {answer}
                {selectedAnswer === answer && answer !== rightAnswer && (
                  <img className="inline ml-2" src={checkFailedIcon} />
                )}
                {selectedAnswer && answer === rightAnswer && (
                  <img className="inline ml-2" src={checkSuccessIcon} />
                )}
              </span>
            </button>
          ))}
        </div>
        {selectedAnswer && <NextButton />}
      </div>
    </div>
  );
};

export default QuizPage;
