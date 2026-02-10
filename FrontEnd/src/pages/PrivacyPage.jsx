import React from 'react';
import Navbar from '../components/Navbar';
import SEO from '../components/SEO';

const PrivacyPage = () => {
    return (
        <div className="bg-primary min-h-screen text-white">
            <SEO
                title="Privacy Policy | Arvayon Pro Build Studio"
                description="Privacy Policy for Arvayon Pro Build Studio – Project Management Consultancy (PMC)."
            />
            <Navbar />

            <main className="pt-28 md:pt-40 pb-20">
                <div className="max-w-4xl mx-auto px-4 md:px-8">
                    <h1 className="text-4xl md:text-5xl font-serif text-[#D4B878] mb-4">Privacy Policy</h1>
                    <p className="text-sm text-gray-400 mb-12">Last Updated: 2026 | Arvayon Pro Build Studio</p>

                    <div className="space-y-8 text-gray-300 leading-relaxed">
                        <section>
                            <h2 className="text-2xl text-[#D4B878] mb-4">1. Overview</h2>
                            <p>
                                Arvayon Pro Build Studio respects your privacy and is committed to protecting personal and business information shared with us.
                            </p>
                            <p className="mt-2">
                                This Privacy Policy explains how we collect, use, store, and safeguard your data.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl text-[#D4B878] mb-4">2. Information We Collect</h2>
                            <p className="mb-2">We may collect:</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Name, phone number, email address</li>
                                <li>Project location and requirements</li>
                                <li>Budget range and planning details</li>
                                <li>Consultation records and communications</li>
                            </ul>
                            <p className="mt-2 mb-2">Information is collected via:</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Website forms</li>
                                <li>Consultation calls</li>
                                <li>Email, WhatsApp, or CRM systems</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl text-[#D4B878] mb-4">3. Use of Information</h2>
                            <p className="mb-2">Collected information is used to:</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Provide consultancy services</li>
                                <li>Schedule consultations</li>
                                <li>Prepare proposals and deliverables</li>
                                <li>Improve service quality</li>
                                <li>Maintain internal records</li>
                            </ul>
                            <p className="mt-2">
                                We do not sell, rent, or trade personal data.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl text-[#D4B878] mb-4">4. Data Sharing</h2>
                            <p className="mb-2">Information may be shared only with:</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Registered architects associated with the firm</li>
                                <li>Engineering professionals involved in the project</li>
                                <li>Government authorities (for approval coordination)</li>
                            </ul>
                            <p className="mt-2">
                                All sharing is strictly limited to project requirements.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl text-[#D4B878] mb-4">5. Data Security</h2>
                            <p className="mb-2">We implement appropriate technical and organizational measures to protect data against:</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Unauthorized access</li>
                                <li>Data loss</li>
                                <li>Misuse or disclosure</li>
                            </ul>
                            <p className="mt-2">
                                However, no digital system is 100% secure.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl text-[#D4B878] mb-4">6. Cookies & Website Analytics</h2>
                            <p className="mb-2">Our website may use cookies to:</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Improve user experience</li>
                                <li>Analyze traffic and engagement</li>
                                <li>Optimize website performance</li>
                            </ul>
                            <p className="mt-2">
                                Users may disable cookies via browser settings.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl text-[#D4B878] mb-4">7. Third-Party Links</h2>
                            <p>
                                Our website may contain links to third-party platforms.
                                We are not responsible for their privacy practices or content.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl text-[#D4B878] mb-4">8. User Rights</h2>
                            <p className="mb-2">Users may request:</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Access to their personal data</li>
                                <li>Correction of inaccurate data</li>
                                <li>Deletion of stored information (subject to legal obligations)</li>
                            </ul>
                            <p className="mt-2">
                                Requests can be made via email.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl text-[#D4B878] mb-4">9. Policy Updates</h2>
                            <p>
                                We reserve the right to update this Privacy Policy at any time.
                                Changes will be reflected on this page.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl text-[#D4B878] mb-4">10. Contact Us</h2>
                            <p>For privacy-related concerns:</p>
                            <p className="mt-1">📧 arvayonprobuildstudio@gmail.com</p>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default PrivacyPage;
