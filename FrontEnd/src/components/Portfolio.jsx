import React from 'react';
import portfolio1 from '../assets/portfolio-1.png';
import portfolio2 from '../assets/portfolio-2.png';
import heroBg from '../assets/hero-bg.png';
import brochureHero from '../assets/brochure-hero.jpg';

const Portfolio = () => {
    const projects = [
        {
            id: 1,
            image: portfolio1,
            title: 'Modern Villa Exterior',
            category: 'Architecture',
        },
        {
            id: 2,
            image: portfolio2,
            title: 'Luxury Living Room',
            category: 'Interior',
        },
        {
            id: 3,
            image: heroBg,
            title: 'Night Elevation',
            category: 'Architecture',
        },
        {
            id: 4,
            image: brochureHero,
            title: 'Contemporary Residence',
            category: 'Architecture',
        },
    ];

    return (
        <section id="portfolio" className="section-padding bg-primary">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Portfolio</h2>
                    <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
                    <p className="text-gray-400">A glimpse of our finest work</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project) => (
                        <div key={project.id} className="group relative overflow-hidden rounded-xl cursor-pointer">
                            <div className="aspect-w-16 aspect-h-9 h-[300px] md:h-[400px]">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                                <span className="text-accent text-sm font-bold uppercase tracking-wider mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    {project.category}
                                </span>
                                <h3 className="text-2xl font-bold text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                    {project.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a href="#contact" className="btn-secondary inline-block">
                        View All Projects
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
