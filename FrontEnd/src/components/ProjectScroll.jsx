import React from 'react';
import projectPlanning from '../assets/project-planning.webp';
import projectDesigning from '../assets/project-designing.webp';
import projectBuilding from '../assets/project-building.webp';

const ProjectScroll = () => {
    const projects = [
        {
            id: 1,
            image: projectPlanning,
            title: 'Planning',
            description: 'Strategic architectural planning for optimal space utilization.'
        },
        {
            id: 2,
            image: projectDesigning,
            title: 'Designing',
            description: 'Creative interior and exterior designs that inspire.'
        },
        {
            id: 3,
            image: projectBuilding,
            title: 'Building',
            description: 'High-quality construction using premium materials and techniques.'
        },
        {
            id: 4,
            image: projectPlanning,
            title: 'Consultation',
            description: 'Expert advice to kickstart your dream project.'
        },
        {
            id: 5,
            image: projectDesigning,
            title: 'Rendering',
            description: 'Photorealistic 3D visualization of your future home.'
        },
    ];

    return (
        <section className="bg-secondary py-12 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-2">Our Recent Projects</h2>
                <div className="w-20 h-1 bg-accent"></div>
            </div>

            <div className="relative w-full">
                <div className="flex animate-scroll hover:pause gap-6 px-4">
                    {[...projects, ...projects].map((project, index) => (
                        <div
                            key={`${project.id}-${index}`}
                            className="flex-shrink-0 w-80 md:w-96 rounded-xl overflow-hidden relative group"
                        >
                            <div className="h-64 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <h3 className="text-xl font-bold text-accent mb-1">{project.title}</h3>
                                <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                    {project.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <style jsx>{`
                .animate-scroll {
                    animation: scroll 20s linear infinite;
                }
                .hover\\:pause:hover {
                    animation-play-state: paused;
                }
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(calc(-100% / 2 - 1.5rem)); } 
                }
            `}</style>
        </section>
    );
};

export default ProjectScroll;
