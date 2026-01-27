// 1. ORIGINAL USER FAQs (Exported for UI Chips)
export const faqData = [
    {
        id: 1,
        question: "What is Project Management Consultancy (PMC)?",
        answer: "PMC represents the client and manages cost, quality, timelines, and coordination throughout the construction project.",
        keywords: ['what is pmc', 'project management consultancy', 'define pmc']
    },
    {
        id: 2,
        question: "How is PMC different from a contractor?",
        answer: "A contractor executes the work, while a PMC manages and controls the project in the client’s best interest.",
        keywords: ['contractor', 'difference', 'vs', 'diff']
    },
    {
        id: 3,
        question: "Will PMC reduce my construction cost?",
        answer: "Yes. PMC optimizes cost by eliminating contractor margins, controlling wastage, and managing materials efficiently.",
        keywords: ['reduce cost', 'construction cost', 'save money', 'expensive']
    },
    {
        id: 4,
        question: "How does PMC charge its fees?",
        answer: "Fees are fixed or percentage-based and defined clearly in advance with full transparency.",
        keywords: ['fees', 'charge', 'cost', 'pricing']
    },
    {
        id: 5,
        question: "Who handles material procurement?",
        answer: "Materials are purchased directly in the client’s name with PMC support for quality and cost control.",
        keywords: ['material', 'procurement', 'buying', 'purchase']
    },
    {
        id: 6,
        question: "How do you ensure construction quality?",
        answer: "Through stage-wise inspections, checklist based monitoring, and strict drawing compliance.",
        keywords: ['quality', 'inspection', 'supervision']
    },
    {
        id: 7,
        question: "How do you control project delays?",
        answer: "By detailed scheduling, contractor coordination, and regular progress monitoring.",
        keywords: ['delay', 'schedule', 'time', 'deadline']
    },
    {
        id: 8,
        question: "Will my budget increase during construction?",
        answer: "No changes are made without prior client approval. Costs are tracked transparently.",
        keywords: ['budget increase', 'over budget', 'extra cost']
    },
    {
        id: 9,
        question: "Is PMC suitable for small residential projects?",
        answer: "Yes. PMC is suitable for houses, villas, and commercial projects of all sizes.",
        keywords: ['small project', 'residential', 'house', 'villa']
    },
    {
        id: 10,
        question: "Can PMC manage ongoing projects?",
        answer: "Yes. PMC can take over ongoing projects and implement corrective controls.",
        keywords: ['ongoing', 'existing', 'halfway']
    }
];

// 2. ADDITIONAL SCRAPED WEBSITE CONTENT
const websiteContent = [
    {
        keywords: ['location', 'address', 'where', 'situated'],
        answer: "We are located at Ramanpudur, Nagercoil. However, we deliver projects across Tamil Nadu."
    },
    {
        keywords: ['contact', 'phone', 'number', 'mobile', 'call', 'email', 'reach'],
        answer: "You can reach us at +91 93630 35048 or email us at admin@arvayonpbs.com."
    },
    {
        keywords: ['services', 'offer', 'do', 'provide'],
        answer: "We offer PMC Consulting, Architectural Design, Structural Design, and Plan Approval services. We provide end-to-end design solutions."
    },
    {
        keywords: ['architectural', 'design', 'architecture', 'plans', '2d', '3d'],
        answer: "Our Architectural Design services include conceptual design, layout planning, 2D & 3D visualization, and interior/exterior design concepts."
    },
    {
        keywords: ['structural', 'structure', 'engineering', 'safety'],
        answer: "We provide Structural Design solutions ensuring safety, stability, and longevity. This includes foundation design, framing, and seismic compliance."
    },
    {
        keywords: ['approval', 'plan approval', 'permit', 'government'],
        answer: "We assist with Government Plan Approvals, preparing documents for submission, liaising with authorities, and ensuring code compliance."
    },
    {
        keywords: ['why choose us', 'reason', 'benefit', 'advantage'],
        answer: "Choose us for our end-to-end design solutions, experienced team, transparent pricing, creative designs, and commitment to on-time delivery."
    },
    {
        keywords: ['vision', 'mission'],
        answer: "Our vision is to provide design-driven PMC that unites architecture, engineering, and execution. Our mission is to blend creativity with functionality while ensuring transparency."
    }
];

// 3. COMBINED KNOWLEDGE BASE
// Transform faqData to match knowledgeBase format (keywords + answer) if not already compatible
// In our case, chatbotLogic expects { keywords: [], answer: "" } objects. 
// We can just spread both arrays.

export const knowledgeBase = [
    ...faqData.map(item => ({ keywords: item.keywords, answer: item.answer })),
    ...websiteContent
];

export const fallbackResponses = [
    "I'm not sure about that specific detail, but I can help you with our Services, Pricing, or Contact info.",
    "Could you rephrase that? I can tell you about PMC, our location, or how to book a consultation.",
    "I'm still learning! Please contact us directly at +91 93630 35048 for specific queries."
];
