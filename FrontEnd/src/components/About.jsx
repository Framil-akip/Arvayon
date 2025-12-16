import AboutVisuals from './AboutVisuals';

const About = () => {
    return (
        <section id="about" className="py-12 px-4 md:px-12 lg:px-24 bg-secondary">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Image */}
                <AboutVisuals />

                {/* Content */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">About Us</h2>
                    <div className="w-20 h-1 bg-accent mb-8"></div>
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                        <span className="text-accent font-bold">Arvayon Pro Build Studio</span> is a professional Engineering & Design Consultancy based in Nagercoil.
                    </p>
                    <p className="text-gray-300 text-lg leading-relaxed mb-8">
                        We deliver end-to-end design solutions including 2D, 3D, Interior, Exterior, and Structural services across Tamil Nadu. Our team is dedicated to turning your dream spaces into reality with precision and creativity.
                    </p>

                    <div className="space-y-8">
                        {/* Vision */}
                        <div>
                            <h3 className="text-2xl font-bold text-accent mb-3">Vision</h3>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                To become a leading design consultancy in Tamil Nadu delivering innovative, sustainable & cost-effective solutions.
                            </p>
                        </div>

                        {/* Mission */}
                        <div>
                            <h3 className="text-2xl font-bold text-accent mb-3">Mission</h3>
                            <ul className="space-y-2">
                                <li className="flex items-center text-gray-300">
                                    <span className="text-accent mr-3">●</span>
                                    Complete solutions under one roof
                                </li>
                                <li className="flex items-center text-gray-300">
                                    <span className="text-accent mr-3">●</span>
                                    Creativity with functionality
                                </li>
                                <li className="flex items-center text-gray-300">
                                    <span className="text-accent mr-3">●</span>
                                    Transparency, quality & timely delivery
                                </li>
                            </ul>
                        </div>

                        {/* Services */}
                        <div>
                            <h3 className="text-2xl font-bold text-accent mb-3">Our Services</h3>
                            <ul className="space-y-2">
                                <li className="flex items-center text-gray-300">
                                    <span className="text-accent mr-3">●</span>
                                    2D Plans & Drawings
                                </li>
                                <li className="flex items-center text-gray-300">
                                    <span className="text-accent mr-3">●</span>
                                    3D Modelling & Rendering
                                </li>
                                <li className="flex items-center text-gray-300">
                                    <span className="text-accent mr-3">●</span>
                                    Interior & Exterior Design
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
