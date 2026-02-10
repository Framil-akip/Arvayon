import React from 'react';
import { Link } from 'react-router-dom';
import pmcImg from '../assets/service-pmc-consulting.webp';
import archImg from '../assets/service-3d-new.webp';
import structImg from '../assets/service-structural.webp';
import approvalImg from '../assets/service-approval.webp';

export const servicesData = [
    {
        id: 'pmc-consulting',
        title: 'PMC Consulting',
        image: pmcImg,
        shortDesc: 'Expert Project Management Consultancy to control cost, quality, and execution from start to finish.',
        overview: 'Arvayon Pro Build Studio’s PMC services integrate architecture, engineering, and execution to deliver projects efficiently. We ensure complete transparency, disciplined project management, and risk-free construction.',
        offerings: [
            'Budget and cost management',
            'Schedule and timeline supervision',
            'Quality control at every stage',
            'Vendor and contractor coordination'
        ],
        benefits: [
            'Reduced cost overruns',
            'On-time project delivery',
            'High-quality construction',
            'Peace of mind for clients'
        ],
        className: 'col-span-1 md:col-span-2 lg:col-span-2 lg:row-span-2',
        isMain: true
    },
    {
        id: 'architectural-design',
        title: 'Architectural Design',
        image: archImg,
        shortDesc: 'Creative and functional architectural designs tailored to your vision and site requirements.',
        overview: 'Our architectural design services focus on creating spaces that balance aesthetics, functionality, and compliance with local regulations. Each design is developed with client collaboration and professional insight.',
        offerings: [
            'Conceptual design and layout planning',
            '2D & 3D design visualization',
            'Interior and exterior design concepts',
            'Government-approved plan submission',

        ],
        benefits: [
            'Unique, functional spaces',
            'Regulatory-compliant designs',
            'Visual clarity before construction',
            'Efficient project handover'
        ],
        className: 'col-span-1 md:col-span-1 lg:col-span-2 lg:row-span-1',
    },
    {
        id: 'structural-design',
        title: 'Structural Design',
        image: structImg,
        shortDesc: 'Reliable structural design solutions ensuring safety, stability, and longevity of your project.',
        overview: 'We provide structural design services that focus on safety, durability, and efficiency. Our engineers use advanced analysis techniques to deliver strong, code-compliant structures.',
        offerings: [
            'Structural analysis and planning',
            'Foundation and framing design',
            'Seismic and load compliance',
            'Material specification and calculation',

        ],
        benefits: [
            'Safe and durable structures',
            'Cost-efficient structural solutions',
            'Peace of mind during construction',
            'Reduced risk of structural issues'
        ],
        className: 'col-span-1 md:col-span-1 lg:col-span-1 lg:row-span-1',
    },
    {
        id: 'plan-approval',
        title: 'Plan Approval',
        image: approvalImg,
        shortDesc: 'Hassle-free government plan approval ensuring compliance and timely project initiation.',
        overview: 'We assist clients with the entire plan approval process, ensuring that all designs meet local regulations and approvals are obtained efficiently.',
        offerings: [
            'Preparation of documents for submission',
            'Liaising with municipal authorities',
            'Compliance checks for regulations and codes',
            'Fast-track approval assistance',

        ],
        benefits: [
            'Avoid delays due to legal or regulatory issues',
            'Clear understanding of approval requirements',
            'Smooth project start without hurdles',
            'Professional handling of documentation'
        ],
        className: 'col-span-1 md:col-span-2 lg:col-span-1 lg:row-span-1',
    },
];

const Services = () => {
    return (
        <section id="services" className="pt-8 pb-16 md:py-16 bg-[#FDFBF7]">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <div className="flex justify-center mb-8">
                        <div className="inline-block">
                            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-[#D4B878] m-0">
                                Specialized Services
                            </h2>
                        </div>
                    </div>
                    <p className="text-gray-600 max-w-2xl mx-auto font-medium">
                        Arvayon Pro Build Studio provides expert engineering and architectural consultancy tailored to modern construction standards.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-6 h-auto lg:h-[750px]">
                    {servicesData.map((service, index) => (
                        <Link
                            key={index}
                            to={`/services/${service.id}`}
                            className={`group relative overflow-hidden rounded-3xl border border-black/5 hover:border-[#D4B878]/50 transition-all duration-700 cursor-pointer ${service.className} min-h-[300px] shadow-xl hover:shadow-2xl flex flex-col`}
                            aria-label={service.title}
                        >
                            {/* Background Image with Overlay */}
                            <div
                                className="absolute inset-0 bg-center bg-cover transform group-hover:scale-110 transition-transform duration-1000"
                                style={{ backgroundImage: `url(${service.image})` }}
                            ></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent group-hover:via-gray-900/20 transition-all duration-500"></div>

                            {/* Content */}
                            <div className="relative mt-auto p-8 z-10">
                                {service.isMain && (
                                    <div className="inline-block px-3 py-1 bg-[#D4B878] text-primary text-[10px] font-black uppercase tracking-widest rounded-full mb-3 shadow-lg">
                                        Primary Service
                                    </div>
                                )}
                                <h3 className={`text-white font-black uppercase tracking-tight leading-none mb-3 transform group-hover:-translate-y-1 transition-transform duration-500 ${service.isMain ? 'text-4xl' : 'text-2xl'}`}>
                                    {service.title}
                                </h3>
                                <p className="text-gray-300 text-sm font-medium line-clamp-2 group-hover:text-white transition-colors duration-300">
                                    {service.shortDesc}
                                </p>
                                <div className="mt-6 flex items-center gap-2 text-[#D4B878] font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-500">
                                    Explore Service
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
