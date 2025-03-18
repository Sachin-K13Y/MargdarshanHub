import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="min-h-screen bg-gray-100">
            {/* Hero Section */}
            <header className="bg-blue-600 text-white text-center py-16">
                <h1 className="text-4xl font-bold">Welcome to MargdarshanHub</h1>
                <p className="mt-2 text-lg">A platform to ask questions, share experiences, and upvote valuable insights.</p>
                <div className="mt-6">
                    <Link to="/ask" className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold shadow-md hover:bg-gray-200 transition">Ask a Question</Link>
                    <Link to="/experience" className="ml-4 bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold shadow-md hover:bg-gray-200 transition">Share Experience</Link>
                </div>
            </header>

            {/* Features Section */}
            <section className="py-12 px-6 max-w-5xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">What We Offer</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold">Ask & Answer</h3>
                        <p className="text-gray-600 mt-2">Ask technical or career-related questions and get responses from peers.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold">Share Experience</h3>
                        <p className="text-gray-600 mt-2">Seniors can share their industry experiences to guide juniors.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold">Upvote System</h3>
                        <p className="text-gray-600 mt-2">Upvote answers and experiences that you find helpful.</p>
                    </div>
                </div>
            </section>

            {/* Recent Activities */}
            <section className="py-12 px-6 bg-white">
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Recent Activity</h2>
                <div className="max-w-3xl mx-auto space-y-4">
                    <div className="bg-gray-100 p-4 rounded-lg shadow">
                        <h3 className="text-lg font-semibold">"How to optimize React performance?"</h3>
                        <p className="text-gray-600">Asked by: John Doe</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg shadow">
                        <h3 className="text-lg font-semibold">"My experience as a Data Analyst at Microsoft"</h3>
                        <p className="text-gray-600">Shared by: Jane Smith</p>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Home;
