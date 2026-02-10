import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { servicesData } from '../components/Services';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { CheckCircle2, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

const ServiceDetail = () => {
    const { id } = useParams();
    const service = servicesData.find(s => s.id === id);

    if (!service) {
        return (
            <div className="bg-primary min-h-screen text-white flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-4xl font-bold mb-4">Service Not Found</h2>
                    <Link to="/" className="text-[#D4B878] underline">Return Home</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-primary min-h-screen text-white pb-20 md:pb-0">
            <Navbar />

            {/* Hero Section */}
            <div className="relative h-[70vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover scale-105 animate-slow-zoom"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
                    <div className="max-w-3xl">
                        <div className="inline-block px-4 py-1 bg-[#D4B878]/20 text-[#D4B878] text-xs font-black uppercase tracking-[0.3em] rounded-full mb-6">
                            Arvayon Solutions
                        </div>
                        <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-[0.8] mb-8">
                            {service.title.split(' ').map((word, i) => (
                                <span key={i} className={i === 0 ? "block" : "block text-[#D4B878]"}>{word} </span>
                            ))}
                        </h1>
                        <p className="text-xl text-gray-300 font-medium leading-relaxed max-w-xl">
                            {service.shortDesc}
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <section className="py-12 bg-white text-gray-900 border-t-8 border-[#D4B878]">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                        {/* Sidebar/Quick Info - stretched to align top and bottom with right column */}
                        <div className="lg:col-span-4 flex flex-col justify-between h-full lg:pt-[90px]">
                            {/* Top - Service Overview (pt-[76px] aligns with offering boxes after h2) */}
                            <div className="p-8 bg-gray-50 border-l-4 border-[#D4B878] rounded-r-2xl">
                                <h3 className="text-sm font-black uppercase tracking-widest text-gray-400 mb-6">Service Overview</h3>
                                <p className="text-gray-700 font-medium text-lg leading-relaxed">
                                    {service.overview}
                                </p>
                            </div>

                            {/* Bottom - Why Choose Us */}
                            <div className="p-8 bg-gray-900 text-white rounded-3xl shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <ShieldCheck className="w-20 h-20" />
                                </div>
                                <h3 className="text-[#D4B878] text-xl font-black uppercase mb-6 tracking-tighter">Why Choose Us?</h3>
                                <ul className="space-y-4">
                                    {service.benefits.map((benefit, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <Zap className="w-5 h-5 text-[#D4B878] mt-1 shrink-0" />
                                            <span className="font-bold text-sm tracking-tight">{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Detailed Offerings */}
                        <div className="lg:col-span-8">
                            <h2 className="text-3xl md:text-4xl font-bold font-sans text-gray-900 mb-12 flex items-center gap-4 tracking-tight">
                                What We Offer
                                <div className="h-px bg-gray-200 flex-grow"></div>
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {service.offerings.map((offering, idx) => (
                                    <div key={idx} className="p-8 border border-gray-100 rounded-2xl hover:bg-[#FDFBF7] hover:border-[#D4B878]/30 transition-all duration-300 group min-h-[160px] flex flex-col justify-start">
                                        <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center mb-6 group-hover:bg-[#D4B878] group-hover:text-white transition-colors">
                                            <CheckCircle2 className="w-6 h-6" />
                                        </div>
                                        <h4 className="text-lg md:text-xl font-semibold font-sans text-gray-800 mb-2 leading-snug">{offering}</h4>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-16 p-10 bg-[#D4B878] rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8">
                                <div>
                                    <h3 className="text-3xl font-black uppercase tracking-tighter text-gray-900 leading-tight">Ready to build <br /> your vision?</h3>
                                    <p className="text-gray-900/70 font-bold mt-2 font-medium">Get a professional consultation today.</p>
                                </div>
                                <Link to="/#book-consultation" className="px-10 py-5 bg-gray-900 text-white font-black uppercase tracking-widest hover:bg-white hover:text-gray-900 transition-all shadow-xl flex items-center gap-3">
                                    Get a Quote
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ServiceDetail;
