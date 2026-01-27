export const getBotResponse = (input, knowledgeBase, fallbackResponses) => {
    if (!input) return { text: "Hello! How can I help you today?", cta: null };

    const lowerInput = input.toLowerCase();

    // 1. Basic Greetings
    if (['hi', 'hello', 'hey', 'greetings', 'morning'].some(word => lowerInput.includes(word))) {
        return {
            text: "Hello! Welcome to Arvayon Pro Build Studio. How can I assist you with your construction or design needs?",
            cta: null
        };
    }

    if (['bye', 'goodbye', 'thanks', 'thank you'].some(word => lowerInput.includes(word))) {
        return {
            text: "You're welcome! Feel free to reach out anytime via our Contact page.",
            cta: null
        };
    }

    // 2. Keyword Matching
    let bestMatch = null;
    let maxScore = 0;

    knowledgeBase.forEach(entry => {
        let score = 0;
        entry.keywords.forEach(keyword => {
            if (lowerInput.includes(keyword)) {
                score += 1;
                // Boost for exact word matches vs substring matches if needed, 
                // but simple inclusion is often enough for small sets.
                if (lowerInput.split(' ').includes(keyword)) {
                    score += 0.5;
                }
            }
        });

        if (score > maxScore) {
            maxScore = score;
            bestMatch = entry;
        }
    });

    // Threshold for a "good" match
    if (bestMatch && maxScore > 0) {
        return {
            text: bestMatch.answer,
            cta: "Contact Us" // Generic CTA, could be customized per entry
        };
    }

    // 3. Fallback
    const randomFallback = fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
    return {
        text: randomFallback,
        cta: "Contact Pages"
    };
};
