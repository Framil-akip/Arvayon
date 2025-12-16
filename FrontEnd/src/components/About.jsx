import React from 'react';
import aboutImg from '../assets/brochure-about.jpg';

const About = () => {
    return (
        <section id="about" className="section-padding bg-secondary">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Image */}
                <div className="relative">
                    <div className="absolute -inset-4 border-2 border-accent opacity-30 rounded-lg transform translate-x-4 translate-y-4"></div>
                    <img
                        src={aboutImg}
                        alt="About Arvayon Pro Build Studio"
                        className="relative rounded-lg shadow-2xl w-full object-cover h-[400px] md:h-[500px]"
                    />
                </div>

                {/* Content */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">About Us</h2>
                    <div className="w-20 h-1 bg-accent mb-8"></div>
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                        <span className="text-accent font-bold">Arvayon Pro Build Studio</span> is a professional Engineering & Design Consultancy based in Nagercoil.
                    </p>
                    <p className="text-gray-300 text-lg leading-relaxed">
                        We deliver end-to-end design solutions including 2D, 3D, Interior, Exterior, and Structural services across Tamil Nadu. Our team is dedicated to turning your dream spaces into reality with precision and creativity.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
