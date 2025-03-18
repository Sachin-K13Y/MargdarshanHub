import React, { useState } from "react";
import axiosInstance from "../services";

const QuestionCard = ({ questionData }) => {
  const [showAnswerBox, setShowAnswerBox] = useState(false);
  const [answerText, setAnswerText] = useState("");

  const toggleAnswerBox = () => {
    setShowAnswerBox(!showAnswerBox);
  };

  const handleAnswerSubmit = async (e) => {
    e.preventDefault()
    if (!answerText.trim()) return;

    try {
      const response = await axiosInstance.post(`/answer/${questionData._id}`, {
        answerText: answerText
      });

      setAnswerText("");
      questionData.answers = response.data.answers;
    } catch (error) {
      console.error("Error submitting answer:", error);
    }
  };

  return (
    <div className="bg-white p-4 shadow-lg rounded-lg max-w-2xl mx-auto my-4">
      <h2 className="text-xl font-semibold text-gray-800 cursor-pointer" onClick={toggleAnswerBox}>
        {questionData.question}
      </h2>
      <div className="mt-2 text-sm text-gray-600">Status: {questionData.status}</div>
      <div className="mt-4 border-t pt-2">
        <h3 className="text-lg font-medium text-gray-700">Answers:</h3>
        {questionData.answers.length > 0 ? (
          <ul className="mt-2 space-y-2">
            {questionData.answers.map((answer) => (
              <li key={answer._id} className="bg-gray-100 p-2 rounded-md text-gray-700">
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

      {showAnswerBox && (
        <div className="mt-4">
          <textarea
            value={answerText}
            onChange={(e) => setAnswerText(e.target.value)}
            placeholder="Write your answer..."
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button
            onClick={handleAnswerSubmit}
            className="mt-2 w-full bg-blue-500 text-white p-2 rounded-lg font-semibold hover:bg-blue-600 transition"
          >
            Submit Answer
          </button>
        </div>
      )}
    </div>
  );
};

export default QuestionCard;
