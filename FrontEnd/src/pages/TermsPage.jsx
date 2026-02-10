import React from 'react';
import Navbar from '../components/Navbar';
import SEO from '../components/SEO';

const TermsPage = () => {
    return (
        <div className="bg-primary min-h-screen text-white">
            <SEO
                title="Terms of Service | Arvayon Pro Build Studio"
                description="Terms of Service for Arvayon Pro Build Studio – Project Management Consultancy (PMC)."
            />
            <Navbar />

            <main className="pt-28 md:pt-40 pb-20">
                <div className="max-w-4xl mx-auto px-4 md:px-8">
                    <h1 className="text-4xl md:text-5xl font-serif text-[#D4B878] mb-4">Terms of Service</h1>
                    <p className="text-sm text-gray-400 mb-12">Last Updated: 2026 | Arvayon Pro Build Studio</p>

                    <div className="space-y-8 text-gray-300 leading-relaxed">
                        <section>
                            <h2 className="text-2xl text-[#D4B878] mb-4">1. Introduction</h2>
                            <p>
                                Welcome to Arvayon Pro Build Studio (“Company”, “we”, “our”, “us”).
                                We are a professional Architectural, Engineering, and Project Management Consultancy, providing client-side advisory, planning coordination, design coordination, and construction management services.
                            </p>
                            <p className="mt-2">
                                By accessing or using our website, services, consultations, or deliverables, you agree to comply with and be bound by these Terms of Service.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl text-[#D4B878] mb-4">2. Nature of Services</h2>
                            <p className="mb-2">
                                Arvayon Pro Build Studio operates as a consultancy firm. We do not function as a construction contractor or execution agency.
                            </p>
                            <p className="mb-2">Our services include, but are not limited to:</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Architectural planning and design coordination</li>
                                <li>Government approval drawing coordination</li>
                                <li>Structural design and BOQ coordination</li>
                                <li>Project Management Consultancy (PMC)</li>
                                <li>Technical advisory and construction guidance</li>
                            </ul>
                            <p className="mt-2">
                                All architectural and engineering services are provided through registered architects and qualified engineering professionals associated with or engaged by the Company.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl text-[#D4B878] mb-4">3. No Contractor Relationship</h2>
                            <p className="mb-2">We act solely in the interest of the client as an independent consultant.</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>We do not supply labor, materials, or construction execution</li>
                                <li>We do not guarantee contractor performance</li>
                                <li>Contractors remain independent entities appointed by the client</li>
                                <li>Any coordination with contractors is strictly advisory and managerial in nature.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl text-[#D4B878] mb-4">4. Client Responsibilities</h2>
                            <p className="mb-2">Clients agree to:</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Provide accurate project details, site information, and documents</li>
                                <li>Appoint contractors independently</li>
                                <li>Obtain required permissions where applicable</li>
                                <li>Follow statutory and local authority regulations</li>
                            </ul>
                            <p className="mt-2">
                                Delays or inaccuracies in client-provided information may impact timelines and outcomes.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl text-[#D4B878] mb-4">5. Fees & Payments</h2>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Consultancy fees are service-based, not square-foot based</li>
                                <li>Fees are non-refundable once services are initiated</li>
                                <li>Stage-wise or milestone-based payments may apply</li>
                                <li>Additional services beyond scope will be charged separately</li>
                            </ul>
                            <p className="mt-2">
                                All payments must be made as per agreed proposals or invoices.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl text-[#D4B878] mb-4">6. Approvals & Regulatory Authorities</h2>
                            <p className="mb-2">While we assist with approval documentation and coordination:</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Final approval decisions rest solely with government authorities</li>
                                <li>Approval timelines are subject to authority discretion</li>
                                <li>We do not guarantee approval outcomes</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl text-[#D4B878] mb-4">7. Intellectual Property</h2>
                            <p>
                                All drawings, designs, documents, reports, BOQs, and content created by Arvayon Pro Build Studio remain our intellectual property unless otherwise agreed in writing.
                            </p>
                            <p className="mt-2">
                                Unauthorized reproduction, sharing, or modification is prohibited.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl text-[#D4B878] mb-4">8. Limitation of Liability</h2>
                            <p className="mb-2">Arvayon Pro Build Studio shall not be liable for:</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Contractor execution errors</li>
                                <li>Material quality issues</li>
                                <li>Site safety incidents</li>
                                <li>Delays caused by third parties or authorities</li>
                            </ul>
                            <p className="mt-2">
                                Our liability is strictly limited to the scope of consultancy services rendered.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl text-[#D4B878] mb-4">9. Termination of Services</h2>
                            <p className="mb-2">We reserve the right to suspend or terminate services if:</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Payment terms are violated</li>
                                <li>Client breaches contractual obligations</li>
                                <li>Misuse of deliverables occurs</li>
                            </ul>
                            <p className="mt-2">
                                Termination does not entitle refunds for completed services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl text-[#D4B878] mb-4">10. Governing Law</h2>
                            <p>
                                These Terms shall be governed by and interpreted in accordance with the laws of India.
                                Any disputes shall be subject to the jurisdiction of Tamil Nadu courts.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl text-[#D4B878] mb-4">11. Contact Information</h2>
                            <p>For questions regarding these Terms:</p>
                            <p className="mt-1">📧 arvayonprobuildstudio@gmail.com</p>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default TermsPage;
