import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, url, image }) => {
    const siteTitle = "Arvayon Pro Build Studio";
    const defaultDescription = "Arvayon Pro Build Studio - Premium Construction, Architectural Design, and Project Management Consultancy (PMC) in Nagercoil. We build your dream with precision and transparency.";
    const defaultImage = "https://arvayonpbs.com/og-image.jpg"; // Replace with actual hosted OG image URL later
    const siteUrl = "https://arvayonpbs.com"; // Replace with actual domain

    const currentUrl = url ? `${siteUrl}${url}` : siteUrl;
    const currentTitle = title ? `${title} | ${siteTitle}` : siteTitle;
    const currentDescription = description || defaultDescription;
    const currentImage = image ? `${siteUrl}${image}` : defaultImage;

    // Structured Data (JSON-LD) for Local Business
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "ConstructionBusiness",
        "name": "Arvayon Pro Build Studio",
        "image": currentImage,
        "url": siteUrl,
        "telephone": "+919363035048",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Ramanpudur",
            "addressLocality": "Nagercoil",
            "addressRegion": "TN",
            "postalCode": "629001",
            "addressCountry": "IN"
        },
        "description": currentDescription,
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
            ],
            "opens": "09:00",
            "closes": "20:00"
        }
    };

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{currentTitle}</title>
            <meta name="description" content={currentDescription} />
            {keywords && <meta name="keywords" content={keywords} />}
            <link rel="canonical" href={currentUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={currentUrl} />
            <meta property="og:title" content={currentTitle} />
            <meta property="og:description" content={currentDescription} />
            <meta property="og:image" content={currentImage} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={currentUrl} />
            <meta name="twitter:title" content={currentTitle} />
            <meta name="twitter:description" content={currentDescription} />
            <meta name="twitter:image" content={currentImage} />

            {/* Structural Data */}
            <script type="application/ld+json">
                {JSON.stringify(structuredData)}
            </script>
        </Helmet>
    );
};

export default SEO;
