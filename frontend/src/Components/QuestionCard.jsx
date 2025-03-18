import React from "react";

const QuestionCard = ({ questionData }) => {
  console.log(questionData)
  return (
    <div className="bg-white p-4 shadow-lg rounded-lg max-w-2xl mx-auto my-4">
      <h2 className="text-xl font-semibold text-gray-800">{questionData.question}</h2>
      <div className="mt-2 text-sm text-gray-600">Status: {questionData.status}</div>
      <div className="mt-4 border-t pt-2">
        <h3 className="text-lg font-medium text-gray-700">Answers:</h3>
        {questionData.answers.length > 0 ? (
          <ul className="mt-2 space-y-2">
            {questionData.answers.map((answer) => (
              <li
                key={answer._id}
                className="bg-gray-100 p-2 rounded-md text-gray-700"
              >
                {answer.answerText ? (
                  <p>{answer.answerText}</p>
                ) : (
                  <p className="italic">No answer text provided</p>
                )}
                <p className="text-xs text-gray-500 mt-1">
                  Answered at: {new Date(answer.createdAt).toLocaleString()}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No answers yet.</p>
        )}
      </div>
    </div>
  );
};

export default QuestionCard;
