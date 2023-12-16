import congratsImage from "../assets/congrats.svg";

const CongratsPage = ({
  questionLength,
  correctAnswersCount,
  onPlayAgain,
}: {
  correctAnswersCount: number;
  questionLength: number;
  onPlayAgain: () => void;
}) => {
  return (
    <div className="px-6 sm:px-12 flex items-center h-screen ">
      <div className="bg-secondary mx-auto w-[400px] rounded-lg pt-6 pb-12 px-6">
        <img className="mb-6" src={congratsImage} />
        <h1 className="text-center text-2xl mb-4">
          Congrats! You completed the quiz
        </h1>
        <p className="text-center font-medium mb-12">
          You answer {correctAnswersCount}/{questionLength} correctly.
        </p>
        <button
          onClick={onPlayAgain}
          className="w-[200px] mx-auto block bg-accent py-4 text-lg rounded-lg"
        >
          Play again
        </button>
      </div>
    </div>
  );
};

export default CongratsPage;
