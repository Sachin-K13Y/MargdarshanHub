import React, { useState,useEffect } from 'react';
import axiosInstance from '../services';
import ExperienceCard from '../Components/ExperienceCard';
function Experience() {
    const [Experiences, setExperiences] = useState([]);
      useEffect(() => {
        const fetchExperiences = async () => {
          try {
            const response = await axiosInstance.get('/experience');
            
            setExperiences(response.data.response);
          } catch (error) {
            console.error("Error fetching experiences:", error);
          }
        };
    
        fetchExperiences();
      }, []);
    const [experience, setExperience] = useState({
        company:"",
        experienceType:"",
        description:""
    });
    const handleChange = (e) => {
        setExperience({ ...experience, [e.target.name]: e.target.value });
    };
    const [senior,setSenior] = useState(false);
    useEffect(() => {
           const verifyAuthentication = async () => {
               try {
                   const response = await axiosInstance.get("/user/auth", { withCredentials: true });
       
                   console.log(response.data);
       
                   setSenior(response.data.user.role=='senior');
               } catch (error) {
                   console.error("Error verifying authentication:", error);
                   setSenior(false);
               }
           };
       
           verifyAuthentication();
           
       }, []);
       const handleSubmit=async(e)=>{
        e.preventDefault();
        console.log(experience)
        const response = await axiosInstance.post('experience/addexperience',experience);
        console.log(response.data);
       }
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
            {/* Experience Form */}
           {senior && ( <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
                <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">Share Your Experience</h2>
                <form onSubmit={handleSubmit}  className="space-y-4">
                    <input type="text" 
                    name='company'
                    onChange={handleChange}
                    placeholder="Company Name"
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                    <input type="text" placeholder="Experience Type"
                    name = 'experienceType'
                    onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                    <textarea placeholder="Description"
                    name='description'
                    onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-24 resize-none"></textarea>
                    <button type="submit"
                        className="w-full bg-blue-500 text-white p-2 rounded-lg font-semibold hover:bg-blue-600 transition">Submit</button>
                </form>
            </div>
)}
            {/* Experience List */}
            <div className="mt-8 w-full max-w-2xl">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">List of Experiences</h2>
                <div className="space-y-4">
                    {/* Example Experience Card */}
                    
                    {Experiences.map((exp) => (
    <ExperienceCard key={exp._id} Experience={exp} />
))}

                </div>
            </div>
        </div>
    );
}

export default Experience;
