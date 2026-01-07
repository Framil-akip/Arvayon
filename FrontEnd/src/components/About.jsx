import AboutVisuals from './AboutVisuals';
import { FiLayout, FiUsers, FiPenTool, FiTag, FiClock } from 'react-icons/fi';

const About = () => {
    return (
        <section id="about" className="py-4 px-4 md:px-12 lg:px-24 bg-white">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
                {/* Image */}
                <div className="md:col-span-5">
                    <AboutVisuals />
                </div>

                {/* Content */}
                <div className="md:col-span-7">
                    <div className="inline-block border-2 border-[#D4B878] px-6 py-2 rounded-lg mb-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#D4B878] m-0">About Us</h2>
                    </div>
                    <p className="text-gray-600 text-base leading-relaxed mb-6">
                        <span className="text-[#D4B878] font-bold">Arvayon Pro Build Studio</span> is a professional Engineering & Design Consultancy based in Nagercoil.
                    </p>
                    <p className="text-gray-600 text-base leading-relaxed mb-8">
                        We deliver end-to-end design solutions including 2D, 3D, Interior, Exterior, and Structural services across Tamil Nadu. Our team is dedicated to turning your dream spaces into reality with precision and creativity.
                    </p>

                    <div className="md:col-span-2 space-y-6">
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
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
