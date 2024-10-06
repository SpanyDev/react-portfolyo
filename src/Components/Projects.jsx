import { IconUserScan, IconLink } from '@tabler/icons-react';
import Project from '../Data/projects.js';
import { Link } from "react-router-dom";

const Projects = () => {
    return (
        <div>
            <h2 style={{ fontFamily: "Heebo, sans-serif", fontWeight: 700 }} className='flex justify-center items-center text-4xl m-5'>Çalışmalarım</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-auto max-w-6xl px-4 mb-10">
                {Project.Projects.map((project, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md border-solid border-1 border-gray-400 p-4 flex flex-col justify-between transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl relative h-full">
                        <div>
                            <img src={project.image} alt={project.name} className="w-full h-32 object-cover mb-4" />
                            <h3 style={{ fontFamily: "Heebo, sans-serif", fontWeight: 700 }} className="text-xl font-semibold mb-2">{project.name}</h3>
                            <p style={{ fontFamily: "Heebo, sans-serif", fontWeight: 500 }} className="text-gray-600 mb-4">{project.description}</p>
                        </div>
                        <div className="flex justify-between items-end">
                            <div className="flex items-center justify-center">
                                <IconUserScan />
                                <span style={{ fontFamily: "Heebo, sans-serif", fontWeight: 700 }} className="text-sm text-black mx-1">{project.role}</span>
                            </div>
                            <div className="flex items-center justify-center">
                                <IconLink size={20} color="blue" />
                                <Link style={{ fontFamily: "Heebo, sans-serif", fontWeight: 400 }} to={`${project.link}`} className="text-blue-600 mx-1">
                                    View Project
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};
export default Projects;
