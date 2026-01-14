import React, { useState, useEffect } from 'react';
import heroBg from '../assets/hero-bg.png';
import projectPlanning from '../assets/project-planning.png';
import projectDesigning from '../assets/project-designing.png';
import projectBuilding from '../assets/project-building.png';

import OfferAd from './OfferAd';

const Hero = () => {
    const images = [projectPlanning, projectDesigning, projectBuilding];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, [images.length]);
    return (
        <section id="home" className="relative h-[80vh] md:h-screen flex items-center justify-center overflow-hidden bg-primary">
            {/* Offer Bar - Positioned absolute at top */}
            {/* <div className="absolute top-0 left-0 w-full z-40 hidden md:block">
                <OfferAd />
            </div> */}

            {/* Background Image Carousel */}
            {images.map((img, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <img
                        src={img}
                        alt={`Hero Background ${index + 1}`}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60"></div>
                </div>
            ))}

            {/* Navigation Arrows */}
            <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 text-white/50 hover:text-accent transition-colors duration-300 pointer-events-auto"
                aria-label="Previous Slide"
            >
                <svg className="w-12 h-12 md:w-16 md:h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 text-white/50 hover:text-accent transition-colors duration-300 pointer-events-auto"
                aria-label="Next Slide"
            >
                <svg className="w-12 h-12 md:w-16 md:h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
            </button>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                <h1 className="text-2xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up uppercase whitespace-nowrap">
                    DESIGN BEYOND IMAGINATION
                </h1>
                <p className="text-gray-250 text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in-up delay-200">
                    From concept planning to project execution we deliver quality-driven and cost effective building services
                </p>
                <div className="text-[#D4B878] text-base md:text-xl font-bold uppercase tracking-wider animate-fade-in-up delay-400">
                    Architectural Design <span className="mx-2">||</span> Structural Design <span className="mx-2">||</span> PMC - Consulting
                </div>
            </div>
        </section >
    );
};

export default Hero;
