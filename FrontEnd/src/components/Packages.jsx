import React from 'react';

const Packages = () => {
    const packages = [
        {
            name: 'BASIC',
            price: '₹12',
            unit: '/sq.ft',
            delivery: '5 days',
            features: [
                { name: '2D Floor Plans', included: true },
                { name: 'Working Drawings', included: true },
                { name: 'Elevation (Day & Night View)', included: true },
                { name: 'Elevation Detail Drawings', included: true },
                { name: 'Structural Layout', included: false },
                { name: 'Structural Detailing', included: false },
                { name: 'MEP Layout & Details', included: false },
                { name: 'Interior 3D Views & Renderings', included: false },
                { name: 'Interior Detail Drawings', included: false },
            ],
        },
        {
            name: 'STANDARD',
            price: '₹22',
            unit: '/sq.ft',
            delivery: '15 days',
            features: [
                { name: '2D Floor Plans', included: true },
                { name: 'Working Drawings', included: true },
                { name: 'Elevation (Day & Night View)', included: true },
                { name: 'Elevation Detail Drawings', included: true },
                { name: 'Structural Layout', included: true },
                { name: 'Structural Detailing', included: true },
                { name: 'MEP Layout & Details', included: true },
                { name: 'Interior 3D Views & Renderings', included: true },
                { name: 'Interior Detail Drawings', included: false },
            ],
        },
        {
            name: 'PREMIUM',
            price: '₹32',
            unit: '/sq.ft',
            delivery: '30 days',
            isPopular: true,
            features: [
                { name: '2D Floor Plans', included: true },
                { name: 'Working Drawings', included: true },
                { name: 'Elevation (Day & Night View)', included: true },
                { name: 'Elevation Detail Drawings', included: true },
                { name: 'Structural Layout', included: true },
                { name: 'Structural Detailing', included: true },
                { name: 'MEP Layout & Details', included: true },
                { name: 'Interior 3D Views & Renderings', included: true },
                { name: 'Interior Detail Drawings', included: true },
            ],
            extras: [
                'Unlimited changes',
                '10–15% Discount',
                'Free Government Approval Plan',
                '₹25/sq.ft worth premium interior designing',
            ],
        },
    ];

    return (
        <section id="packages" className="section-padding bg-primary relative">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Packages</h2>
                    <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
                    <p className="text-gray-300">Choose the best plan for your dream project</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {packages.map((pkg, index) => (
                        <div
                            key={index}
                            className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${pkg.isPopular
                                ? 'bg-secondary border-2 border-accent transform md:-translate-y-4 shadow-[0_0_30px_rgba(255,215,0,0.15)]'
                                : 'bg-secondary/50 border border-white/10 hover:border-accent/30'
                                }`}
                        >
                            {pkg.isPopular && (
                                <div className="absolute top-0 right-0 bg-accent text-primary text-xs font-bold px-3 py-1 uppercase tracking-wide rounded-bl-lg">
                                    Most Popular
                                </div>
                            )}

                            <div className="p-8 text-center border-b border-white/10">
                                <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                                <div className="flex justify-center items-baseline mb-2">
                                    <span className="text-4xl font-bold text-accent">{pkg.price}</span>
                                    <span className="text-gray-300 ml-1">{pkg.unit}</span>
                                </div>
                                <p className="text-sm text-gray-300">Delivered within {pkg.delivery}</p>
                            </div>

                            <div className="p-8">
                                <ul className="space-y-4 mb-8">
                                    {pkg.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center text-sm">
                                            {feature.included ? (
                                                <svg className="w-5 h-5 text-accent mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                </svg>
                                            ) : (
                                                <svg className="w-5 h-5 text-gray-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            )}
                                            <span className={feature.included ? 'text-gray-300' : 'text-gray-600'}>
                                                {feature.name}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                {pkg.extras && (
                                    <div className="mt-6 pt-6 border-t border-white/10">
                                        <h4 className="text-accent font-bold mb-4 text-sm uppercase tracking-wide">Exclusive Benefits</h4>
                                        <ul className="space-y-3">
                                            {pkg.extras.map((extra, idx) => (
                                                <li key={idx} className="flex items-start text-sm text-yellow-100/80">
                                                    <span className="mr-2">★</span>
                                                    {extra}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                <div className="mt-8">
                                    <a
                                        href="#contact"
                                        className={`block w-full py-3 px-6 rounded text-center font-bold uppercase tracking-wide transition-colors duration-300 ${pkg.isPopular
                                            ? 'bg-accent text-primary hover:bg-yellow-400'
                                            : 'border border-gray-600 text-gray-300 hover:border-accent hover:text-accent'
                                            }`}
                                    >
                                        Choose Plan
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Packages;
