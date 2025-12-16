import React from 'react';
import heroBg from '../assets/hero-bg.png';

const Hero = () => {
    return (
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={heroBg}
                    alt="Modern Luxury Villa"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up">
                    Design Beyond <span className="text-accent">Imagination</span>
                </h1>
                <p className="text-lg md:text-2xl text-gray-200 mb-10 font-light tracking-wide animate-fade-in-up delay-200">
                    End-to-End Engineering & Design Solutions
                </p>
                <div className="flex flex-col md:flex-row gap-4 justify-center animate-fade-in-up delay-400">
                    <a href="#contact" className="btn-primary">
                        Get Free Consultation
                    </a>
                    <a href="#packages" className="btn-secondary">
                        View Packages
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
