import React from 'react';

function Profile() {
    // Dummy user data (Replace with API data)
    const user = {
        name: "John Doe",
        bio: "Software Engineer | Passionate about Web Development",
        askedQuestions: [
            { id: 1, title: "How to optimize React performance?" },
            { id: 2, title: "What are the best practices for MongoDB indexing?" }
        ],
        answeredQuestions: [
            { id: 3, title: "What is the difference between useState and useEffect?" },
            { id: 4, title: "How does authentication work in MERN stack?" }
        ],
        stats: {
            questionsAsked: 2,
            answersGiven: 2,
            upvotesReceived: 34
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
            {/* User Info Section */}
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md text-center">
                <h2 className="text-3xl font-bold text-gray-800">{user.name}</h2>
                <p className="text-gray-600 mt-2">{user.bio}</p>
            </div>

            {/* User Stats */}
            <div className="flex justify-center gap-6 mt-6">
                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                    <h3 className="text-xl font-semibold">{user.stats.questionsAsked}</h3>
                    <p className="text-gray-600">Questions Asked</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                    <h3 className="text-xl font-semibold">{user.stats.answersGiven}</h3>
                    <p className="text-gray-600">Answers Given</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                    <h3 className="text-xl font-semibold">{user.stats.upvotesReceived}</h3>
                    <p className="text-gray-600">Upvotes</p>
                </div>
            </div>

            {/* Questions Asked */}
            <div className="mt-10 w-full max-w-3xl">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Questions Asked</h2>
                <div className="bg-white p-4 rounded-lg shadow-md">
                    {user.askedQuestions.map((q) => (
                        <div key={q.id} className="border-b py-2">
                            <p className="text-blue-600 font-semibold">{q.title}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Questions Answered */}
            <div className="mt-6 w-full max-w-3xl">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Questions Answered</h2>
                <div className="bg-white p-4 rounded-lg shadow-md">
                    {user.answeredQuestions.map((q) => (
                        <div key={q.id} className="border-b py-2">
                            <p className="text-green-600 font-semibold">{q.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Profile;
