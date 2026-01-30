import React, { useState, useEffect, useRef } from 'react';

import pmcCostLeakage from '../assets/pmc-cost-leakage.webp';
import pmcContractorControl from '../assets/pmc-contractor-control.webp';
import pmcQualityInspection from '../assets/pmc-quality-inspection.webp';
import pmcTimelineSchedule from '../assets/pmc-timeline-schedule.webp';
import {
    ShieldCheck,
    Compass,
    BarChart3,
    CheckCircle2,
    Building2,
    Globe,
    Home,
    ArrowRight,
    Search,
    UserCheck,
    CheckCircle
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import Workprocess from './Workprocess';

const PMCServices = () => {
    const sectionRef = useRef(null);
    const [isButtonVisible, setIsButtonVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsButtonVisible(entry.isIntersecting);
            },
            {
                threshold: 0.05,
                rootMargin: "-5% 0px -5% 0px"
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const handleWhatsApp = () => {
        const message = encodeURIComponent("Hello Arvayon, I am interested in your PMC services. I'd like to book a consultation.");
        window.open(`https://wa.me/919363035048?text=${message}`, '_blank');
    };

    const failures = [
        {
            title: 'Hidden Project Costs',
            desc: 'Poor planning and uncontrolled decisions inflate budgets.',
            image: pmcCostLeakage
        },
        {
            title: 'Restricted Material Choices',
            desc: 'Clients lose control when contractors manage everything.',
            image: pmcContractorControl
        },
        {
            title: 'Quality Issues',
            desc: 'Material substitutions and weak supervision reduce quality.',
            image: pmcQualityInspection
        },
        {
            title: 'Timeline Delays',
            desc: 'Lack of coordination causes unnecessary project delays.',
            image: pmcTimelineSchedule
        }
    ];

    const valueProps = [
        {
            title: 'Design-Led PMC',
            desc: 'Architecture and engineering guide every decision.',
            icon: <Compass className="w-6 h-6" />
        },
        {
            title: 'Transparent Costing',
            desc: 'No hidden margins or material manipulation.',
            icon: <Search className="w-6 h-6" />
        },
        {
            title: 'Execution Discipline',
            desc: 'Regular site inspections and technical checks.',
            icon: <ShieldCheck className="w-6 h-6" />
        },
        {
            title: 'Clear Reporting',
            desc: 'Written reports instead of verbal promises.',
            icon: <BarChart3 className="w-6 h-6" />
        }
    ];

    const scopes = [
        {
            title: 'Pre-Construction',
            items: ['Feasibility', 'Budgeting', 'BOQ Review', 'Contractor Evaluation']
        },
        {
            title: 'Execution',
            items: ['Site Supervision', 'Coordination', 'Quality Monitoring']
        },
        {
            title: 'Monitoring',
            items: ['Progress Tracking', 'Cost Control', 'Reporting']
        },
        {
            title: 'Closure',
            items: ['Final Inspections', 'Snag List', 'Handover Support']
        }
    ];

    const targetAudience = [
        { title: 'Home Owners', category: '₹40L+', icon: <Home className="w-5 h-5" /> },
        { title: 'Professionals', category: 'Busy Lives', icon: <UserCheck className="w-5 h-5" /> },
        { title: 'NRI Clients', category: 'Remote Control', icon: <Globe className="w-5 h-5" /> },
        { title: 'Commercial', category: 'Large Projects', icon: <Building2 className="w-5 h-5" /> }
    ];

    return (
        <section ref={sectionRef} className="pt-8 pb-16 md:py-16 bg-white relative overflow-hidden" id="pmc">
            {/* Background elements - reduced top gap for section-padding sync */}
            <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-[#FDFBF7] to-transparent"></div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                {/* Hero Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-gray-900 leading-[0.9] mb-6">
                            Project Management <br />
                            <span className="text-[#D4B878]">Consultancy (PMC)</span>
                        </h2>
                        <p className="text-xl text-gray-600 font-medium">
                            Build with clarity. Control every stage of your construction project with structured planning, transparent monitoring, and disciplined execution.
                        </p>
                    </div>
                </div>

                {/* Fixed Button - Positioned at top for mobile, bottom for desktop */}
                <div className={`fixed bottom-24 md:bottom-8 left-1/2 transform -translate-x-1/2 z-[100] transition-all duration-300 ${isButtonVisible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-10 pointer-events-none'} w-max`}>
                    <a
                        href="/#book-consultation"
                        className="px-6 py-2 md:px-10 md:py-4 bg-gray-900 text-white text-[10px] md:text-sm font-black uppercase tracking-[0.2em] hover:bg-[#D4B878] transition-all duration-300 hover:-translate-y-1 shadow-2xl border border-white/20 rounded-full flex items-center justify-center text-center whitespace-nowrap"
                    >
                        Book PMC Consultation
                    </a>
                </div>

                {/* Problem Awareness Section - Reverted to Card + Image Style */}
                <div className="mb-24">
                    <div className="text-center mb-12">
                        <p className="text-3xl md:text-5xl font-bold text-gray-900 uppercase">The Reality of Construction Project Risks</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {failures.map((item, idx) => (
                            <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-lg border border-black/5 hover:border-[#D4B878] transition-all duration-300 group h-full flex flex-col">
                                <div className="h-48 overflow-hidden relative">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300"></div>
                                </div>
                                <div className="p-6 flex-grow flex flex-col">
                                    <h4 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-[#D4B878] transition-colors duration-300">
                                        {item.title}
                                    </h4>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Definition & Control Flow Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
                    <div className="relative">
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#D4B878]/5 rounded-full blur-3xl"></div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-6">What is Project Management Consultancy?</h3>
                        <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                            <p>
                                <span className="font-bold text-[#9A7B3C]">PMC</span> is a professional system where your project is planned, monitored, and controlled from design finalization to handover.
                            </p>
                            <p>
                                PMC works in the <span className="italic font-medium">client’s best interest</span>, ensuring cost control, quality assurance, and timeline discipline.
                            </p>
                        </div>

                        {/* Control Flow Visual */}
                        <div className="mt-10 p-8 bg-gray-900 rounded-2xl text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <ShieldCheck className="w-24 h-24" />
                            </div>
                            <p className="text-[#D4B878] font-bold uppercase tracking-wider text-sm mb-6">PMC Control Flow</p>
                            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                                <div className="px-4 py-2 border border-white/20 rounded bg-white/5 font-bold">Client</div>
                                <ArrowRight className="hidden md:block text-[#D4B878]" />
                                <div className="px-6 py-3 bg-[#D4B878] text-gray-900 rounded font-black shadow-lg shadow-[#D4B878]/20">PMC</div>
                                <ArrowRight className="hidden md:block text-[#D4B878]" />
                                <div className="px-4 py-2 border border-white/20 rounded bg-white/5 font-bold text-center">Contractors & Vendors</div>
                            </div>
                            <p className="mt-6 text-sm text-gray-300 text-center md:text-left">All decisions are validated, documented, and monitored.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {valueProps.map((item, idx) => (
                            <div key={idx} className="p-6 bg-white border-l-4 border-[#D4B878] shadow-sm hover:shadow-md transition-all">
                                <div className="text-[#D4B878] mb-4">{item.icon}</div>
                                <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                                <p className="text-gray-600 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Scope of Services */}
                <div className="mb-24 p-1 rounded-3xl bg-gradient-to-br from-[#D4B878]/10 via-transparent to-[#D4B878]/5">
                    <div className="bg-[#FDFBF7] p-8 md:p-16 rounded-[calc(1.5rem-4px)]">
                        <div className="mb-12">
                            <h3 className="text-3xl font-bold text-gray-900 mb-4 text-center md:text-left">PMC Scope of Services</h3>
                            <div className="w-20 h-1.5 bg-[#D4B878] mx-auto md:mx-0"></div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                            {scopes.map((scope, idx) => (
                                <div key={idx}>
                                    <h4 className="font-black text-black uppercase tracking-tighter text-xl mb-6">{scope.title}</h4>
                                    <ul className="space-y-4">
                                        {scope.items.map((item, i) => (
                                            <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                                                <CheckCircle2 className="w-4 h-4 text-[#D4B878]" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Our Working Progress Integrated */}
                <div className="mb-24 rounded-3xl overflow-hidden shadow-2xl">
                    <Workprocess light={true} />
                </div>

                {/* Target Audience & Footer CTA */}
                {/* Target Audience */}
                <div className="w-full">
                    <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-8 uppercase tracking-tighter text-center md:text-left">Who Should Take PMC?</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {targetAudience.map((item, idx) => (
                            <div key={idx} className="p-8 bg-gray-900 text-white border border-gray-800 flex items-center gap-6 shadow-xl">
                                <div className="text-[#D4B878]">
                                    {React.cloneElement(item.icon, { className: "w-8 h-8" })}
                                </div>
                                <div>
                                    <div className="font-black text-lg md:text-xl leading-tight uppercase tracking-tight">{item.title}</div>
                                    <div className="text-xs md:text-sm uppercase font-bold tracking-[0.2em] text-[#D4B878]">
                                        {item.category}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Horizontal divider/end of section */}
            <div className="mt-24 border-t border-gray-100"></div>
        </section >
    );
};

export default PMCServices;
