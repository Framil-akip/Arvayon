import React from 'react';
import { Link } from 'react-router-dom';
import portfolio1 from '../assets/portfolio-1.png';
import portfolio2 from '../assets/portfolio-2.png';
import brochureHero from '../assets/brochure-hero.jpg';
import projectPlanning from '../assets/project-planning.png';
import projectDesigning from '../assets/project-designing.png';

export const servicesData = [
    {
        id: 'architectural',
        title: 'Architectural Services',
        image: portfolio1,
        description: 'Concept-to-completion architectural planning and design.',
        details: ['Floor plans', 'Elevations', 'Working drawings'],
        className: 'col-span-1 lg:col-span-2 row-span-1',
    },
    {
        id: 'quantity-surveying',
        title: 'Quantity Surveying',
        image: portfolio2,
        description: 'Accurate BOQs, cost estimation and budgeting.',
        details: ['Material takeoffs', 'Rate analysis', 'Budget planning'],
        className: 'col-span-1 lg:col-span-2 row-span-1',
    },
    {
        id: 'plan-approvals',
        title: 'Plan Approvals',
        image: projectPlanning,
        description: 'End-to-end guidance for statutory plan approvals.',
        details: ['Documentation', 'Submissions', 'Compliance checks'],
        className: 'col-span-1 lg:col-span-1 row-span-1',
    },
    {
        id: 'structural-drawing',
        title: 'Structural Drawing',
        image: brochureHero,
        description: 'Safe, code-compliant structural layouts and detailing.',
        details: ['Structural layout', 'Rebar detailing', 'Load analysis'],
        className: 'col-span-1 lg:col-span-1 row-span-1',
    },
    {
        id: 'hire-engineer',
        title: 'Hire Your Engineer',
        image: projectDesigning,
        description: 'On-demand engineering support for your project.',
        details: ['Site visits', 'Consultation', 'Quality checks'],
        className: 'col-span-1 lg:col-span-2 row-span-1',
    },
];

const Services = () => {
    return (
        <section id="services" className="section-padding bg-[#FDFBF7]">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 uppercase tracking-tight text-primary">
                        Our <span className="text-accent">Services</span>
                    </h2>
                    <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Comprehensive architectural and engineering solutions for your projects.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-4 h-auto lg:h-[700px]">
                    {servicesData.map((service, index) => (
                        <Link
                            key={index}
                            to={`/services/${service.id}`}
                            className={`group relative overflow-hidden rounded-2xl border border-white/20 hover:border-white transition-all duration-500 cursor-pointer ${service.className} min-h-[220px] md:min-h-[280px] lg:min-h-[320px] bg-center bg-cover shadow-lg hover:shadow-2xl`}
                            style={{ backgroundImage: `url(${service.image})` }}
                            aria-label={service.title}
                        >
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/60"></div>
                            <div className="relative h-full p-6 flex items-center justify-center">
                                <span className="text-white text-2xl md:text-3xl font-extrabold uppercase tracking-widest drop-shadow-[0_2px_3px_rgba(0,0,0,0.6)] group-hover:text-white transition-colors duration-300 text-center">
                                    {service.title}
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
