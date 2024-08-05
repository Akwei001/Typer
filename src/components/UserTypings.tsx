import cn from "classnames";
import Caret from "./Caret";

const UserTypings = ({
  userInput,
  words,
  className = "",
}: {
  userInput: string;
  words: string;
  className?: string;
}) => {
  return (
    <div className={className}>
      {words.split("").map((char, index) => (
        <Character
          key={`${char}_${index}`}
          actual={userInput[index]}
          expected={char}
        />
      ))}
      <Caret />
    </div>
  );
};

const Character = ({
  actual,
  expected,
}: {
  actual: string;
  expected: string;
}) => {
  const isCorrect = actual === expected;
  const isWhiteSpace = expected === " ";
  const isExtraInput = actual && !expected;

  return (
    <span
      className={cn({
        "text-red-500": !isCorrect && !isWhiteSpace && !isExtraInput,
        "text-yellow-400": isCorrect && !isWhiteSpace,
        "bg-red-500/50": !isCorrect && isWhiteSpace,
        "text-gray-400": isExtraInput,
      })}
    >
      {expected || actual}
    </span>
  );
};

export default UserTypings;