import React from "react";

const ExperienceCard = ({ Experience,key }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 border border-gray-200 w-full max-w-md">
      <h2 className="text-lg font-semibold text-gray-800">{Experience.company}</h2>
      <p className="text-sm text-gray-500">{Experience.ExperienceType}</p>
      <p className="mt-2 text-gray-700">{Experience.description}</p>
      <div className="flex justify-between items-center mt-4">
        <span className="text-gray-600 text-sm">Upvotes: {Experience.upvotes}</span>
        <button className="px-3 py-1 text-sm text-white bg-blue-500 rounded-md hover:bg-blue-600">
          Upvote
        </button>
      </div>
    </div>
  );
};

export default ExperienceCard;
