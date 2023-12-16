import { useMemo } from "react";

const QuizSteps = ({
  steps,
  active,
  selectActive,
}: {
  steps: number;
  active: number;
  selectActive: (n: number) => void;
}) => {
  const stepsArray = useMemo(
    () => Array.from({ length: steps }, (_, i) => i),
    [steps]
  );

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {stepsArray.map((step) => (
        <button
          disabled={step > active}
          onClick={() => selectActive(step)}
          className={`rounded-full ${
            active >= step ? "bg-accent" : "bg-primary"
          } w-[50px] text-center py-2.5 text-lg`}
          key={step}
        >
          {step + 1}
        </button>
      ))}
    </div>
  );
};

export default QuizSteps;
