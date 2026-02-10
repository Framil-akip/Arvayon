import AboutVisuals from './AboutVisuals';
import { FiLayout, FiUsers, FiPenTool, FiTag, FiClock } from 'react-icons/fi';

const About = () => {
    return (
        <section id="about" className="pt-6 pb-16 md:py-16 px-4 md:px-12 lg:px-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
                {/* Image - Hidden on mobile to avoid empty space */}
                <div className="md:col-span-5 hidden md:block">
                    <AboutVisuals />
                </div>

                {/* Content */}
                <div className="md:col-span-7">
                    <div className="inline-block mb-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#D4B878] m-0">About Us</h2>
                    </div>
                    {/* 
                    <p className="text-gray-600 text-base leading-relaxed mb-6">
                        <span className="text-[#D4B878] font-bold">Arvayon Pro Build Studio</span> is a professional Engineering & Design Consultancy based in Nagercoil.
                    </p>
                    <p className="text-gray-600 text-base leading-relaxed mb-8">
                        We deliver end-to-end design solutions including 2D, 3D, Interior, Exterior, and Structural services across Tamil Nadu. Our team is dedicated to turning your dream spaces into reality with precision and creativity.
                    </p> 
                    */}
                    {/* Premium PMC Tone (Chennai Villas / High-End Homes) */}

                    <p className="text-gray-600 text-base leading-relaxed mb-6">
                        <span className="text-[#9A7B3C] font-bold">Arvayon Pro Build Studio</span> is a design-driven Project Management Consultancy delivering refined residential and commercial projects across Tamil Nadu.
                    </p>
                    <p className="text-gray-600 text-base leading-relaxed mb-6">
                        Our practice is built around the belief that architecture, engineering, and execution must operate as a single, well-controlled system. Through structured PMC processes, we provide clients with complete visibility over cost, quality, and progress—at every stage of construction.
                    </p>
                    <p className="text-gray-600 text-base leading-relaxed mb-8">
                        With an experienced multidisciplinary team and a transparent working methodology, we ensure that each project is executed with precision, accountability, and long-term value.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        {/* Vision */}
                        <div className="bg-[#FDFBF7] p-6 rounded-lg border border-[#D4B878]/20 hover:border-[#D4B878] transition-all duration-300">
                            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                                <span className="w-8 h-8 rounded-full bg-[#D4B878]/10 flex items-center justify-center mr-3 text-[#D4B878]">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                </span>
                                Our Vision
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                To provide design-driven Project Management Consultancy that unites architecture, engineering, and execution into a single, structured system.
                            </p>
                        </div>

                        {/* Mission */}
                        <div className="bg-[#FDFBF7] p-6 rounded-lg border border-[#D4B878]/20 hover:border-[#D4B878] transition-all duration-300">
                            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                                <span className="w-8 h-8 rounded-full bg-[#D4B878]/10 flex items-center justify-center mr-3 text-[#D4B878]">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </span>
                                Our Mission
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Delivering complete solutions under one roof, blending creativity with functionality, while ensuring transparency, quality, and timely delivery.
                            </p>
                        </div>
                    </div>

                    {/* <div className="md:col-span-2 space-y-6">
                        {[
                            {
                                title: 'End-to-End Design Solutions',
                                description: 'From concept to completion, we handle every aspect of your project.',
                                icon: FiLayout,
                            },
                            {
                                title: 'Experienced & Qualified Team',
                                description: 'Our team of experts brings years of industry experience to your project.',
                                icon: FiUsers,
                            },
                            {
                                title: 'Creative & Functional Designs',
                                description: 'We balance aesthetics with practicality to create spaces that work for you.',
                                icon: FiPenTool,
                            },
                            {
                                title: 'Transparent & Affordable Pricing',
                                description: 'No hidden costs. We offer clear pricing structures to fit your budget.',
                                icon: FiTag,
                            },
                            {
                                title: 'On-Time Delivery',
                                description: 'We value your time and are committed to delivering projects on schedule.',
                                icon: FiClock,
                            },
                        ].map((benefit, index) => (
                            <div key={index} className="flex items-start group">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary border border-[#D4B878]/20 flex items-center justify-center mt-1 group-hover:bg-[#D4B878] group-hover:text-primary transition-colors duration-300">
                                    <benefit.icon className="w-5 h-5 text-[#D4B878] group-hover:text-primary transition-colors duration-300" />
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-bold text-primary mb-1 group-hover:text-[#D4B878] transition-colors duration-300">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">
                                        {benefit.description}
                                    </p>
                                </div>
                            </div>   
                        ))}
                    </div> */}
                </div>
            </div>

        </section>
    );
};

export default About;
