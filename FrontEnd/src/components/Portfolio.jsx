import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import portfolio1 from '../assets/portfolio-1.webp';
import portfolio2 from '../assets/portfolio-2.webp';
import heroBg from '../assets/hero-bg.webp';
import brochureHero from '../assets/brochure-hero.webp';
import projectBuilding from '../assets/project-building.webp';
import serviceInteriorNew from '../assets/service-interior-new.webp';

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
        {
            id: 5,
            image: projectBuilding,
            title: 'Commercial Complex',
            category: 'Construction',
        },
        {
            id: 6,
            image: serviceInteriorNew,
            title: 'Modern Office Space',
            category: 'Interior',
        },
    ];


    const location = useLocation();
    const isPortfolioPage = location.pathname === '/portfolio';

    return (
        <section id="portfolio" className="pt-8 pb-8 md:py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <div className="flex justify-center mb-8">
                        <div className="inline-block">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#D4B878] m-0">Our Projects</h2>
                        </div>
                    </div>
                    <p className="text-gray-600">A glimpse of our finest work</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div key={project.id} className="group relative overflow-hidden rounded-xl cursor-pointer">
                            <div className="aspect-w-16 aspect-h-9 h-[250px] md:h-[300px]">
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

                {!isPortfolioPage && (
                    <div className="text-center mt-12">
                        <Link
                            to="/portfolio"
                            className="btn-primary inline-block bg-[#D4B878] text-primary px-8 py-4 rounded-lg font-bold hover:scale-105 transform transition-all duration-300 uppercase tracking-widest shadow-lg hover:shadow-xl"
                        >
                            View All Projects
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Portfolio;
