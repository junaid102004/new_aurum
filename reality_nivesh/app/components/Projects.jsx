import React from 'react';

const Projects = () => {
    const projects = Array.from({ length: 20 }, (_, index) => ({
        id: index + 1,
        name: `Project ${index + 1}`,
    }));

    return (
        <div className="w-full container mx-auto">
            <div className="w-full text-center mb-8">
                <h3 className="text-[42px] font-bold uppercase font-['SuperaGothic']">Project Status</h3>
                <p className="text-[18px] font-bold uppercase font-['SuperaGothic']">The Medallion AURUM Mohali</p>
            </div>

            {/* Responsive Grid */}
            <div      className="grid grid-cols-3 xs:grid-cols-4 md:grid-cols-6 2xl:grid-cols-9 gap-y-9 lg:gap-y-14"
            >
           
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="w-[90px] h-[90px] sm:w-[100px] sm:h-[100px] bg-red-200 flex items-center justify-center"
                    >
                        <span className="text-black font-bold">{project.id}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
