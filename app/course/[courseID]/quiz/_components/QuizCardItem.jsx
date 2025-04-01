import React, { useState } from 'react';

function QuizCardItem({ quiz, userSelectedOption }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const handleOptionClick = (option) => {
    if (selectedOption === option) {
      // If the same option is clicked again, reset the selection
      setSelectedOption(null);
      setIsCorrect(null);
      return;
    }

    setSelectedOption(option);
    const correct = option === quiz.correctAnswer;
    setIsCorrect(correct);
    userSelectedOption(option);
  };

  return (
    quiz && (
      <div className="mt-10 p-5">
        <h2 className="font-medium text-2xl text-center text-white"> {quiz.question} </h2>

        <div className="grid grid-cols-2 gap-5 mt-4">
          {quiz.options.map((option, index) => (
            <h2
              key={index}
              onClick={() => handleOptionClick(option)}
              className={`w-full border rounded-full p-3 px-4 text-center text-lg cursor-pointer transition-all
                ${
                  selectedOption === option
                    ? isCorrect
                      ? 'bg-green-600 text-white' // Correct: Green
                      : 'bg-red-600 text-white' // Incorrect: Red
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700' // Default: Dark theme
                }
                ${
                  selectedOption === null && 'hover:bg-gray-700' // Allow retry
                }
              `}
            >
              {option}
            </h2>
          ))}
        </div>
      </div>
    )
  );
}

export default QuizCardItem;
