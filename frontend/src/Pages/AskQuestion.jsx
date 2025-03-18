import React, { useState } from 'react';
import { useEffect } from 'react';
import axiosInstance from '../services';
import QuestionCard from '../Components/QuestionCard';
function AskQuestion() {
    const [question, setQuestion] = useState("");
    const [answers,setAnswers] = useState([]);
    useEffect(()=>{
        const fetchQuestion = async(req,res)=>{
            const response = await axiosInstance.get('/doubts');
            console.log(response.data);
            setAnswers(response.data);

        }
        fetchQuestion();
    },[])
    
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
                {answers.map((q)=>(
                    <QuestionCard key={q._id} questionData={q}/>
                ))}
                </div>
            </div>
        </div>
    );
}

export default AskQuestion;
