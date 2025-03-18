import React, { useState } from 'react';
import { useEffect } from 'react';
import axiosInstance from '../services';
function AskQuestion() {
    const [question, setQuestion] = useState("");
   
    
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
            {/* Ask Question Form */}
            
         <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
                <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">Ask a Question</h2>
                <form action="" className="space-y-4">
                    <input 
                        type="text" 
                        placeholder="Enter your question" 
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <textarea 
                        placeholder="Describe your question in detail" 
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-24 resize-none"
                    ></textarea>
                    <button 
                        type="submit" 
                        className="w-full bg-blue-500 text-white p-2 rounded-lg font-semibold hover:bg-blue-600 transition"
                    >
                        Submit Question
                    </button>
                </form>
            </div>


            {/* Questions List */}
            <div className="mt-8 w-full max-w-2xl">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Recent Questions</h2>
                <div className="space-y-4">
                    {/* Example Question Card */}
                    <div className="bg-white p-4 rounded-lg shadow-md border">
                        <h3 className="text-lg font-semibold text-gray-900">How to implement authentication in MERN?</h3>
                        <p className="mt-2 text-gray-600 text-sm">Asked by: John Doe</p>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-md border">
                        <h3 className="text-lg font-semibold text-gray-900">What is the best way to optimize React apps?</h3>
                        <p className="mt-2 text-gray-600 text-sm">Asked by: Jane Smith</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AskQuestion;
