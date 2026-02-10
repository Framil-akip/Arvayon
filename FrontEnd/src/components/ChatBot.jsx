import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { knowledgeBase, fallbackResponses, faqData } from '../data/chatbotContent';
import { getBotResponse } from '../utils/chatbotLogic';

const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { type: 'bot', text: 'Hello! How can I assist you with your project today?', cta: null }
    ]);
    const [inputValue, setInputValue] = useState("");
    const messagesEndRef = useRef(null);
    const navigate = useNavigate();

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    // Use the original FAQs for the chips
    const suggestedQuestions = faqData;

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        // Add User Message
        const userMsg = { type: 'user', text: inputValue };
        setMessages(prev => [...prev, userMsg]);
        const currentInput = inputValue;
        setInputValue("");

        // Generate and Add Bot Response
        setTimeout(() => {
            const response = getBotResponse(currentInput, knowledgeBase, fallbackResponses);
            const botMsg = {
                type: 'bot',
                text: response.text,
                cta: response.cta,
                link: '/contact'
            };
            setMessages(prev => [...prev, botMsg]);
        }, 600);
    };

    const handleQuestionClick = (question) => {
        // Add User Message
        const userMsg = { type: 'user', text: question.question };
        setMessages(prev => [...prev, userMsg]);

        // Simulate typing delay then add Bot Message
        setTimeout(() => {
            // We can treat the question text itself as input to our bot logic
            // or we could map it directly if we had the answer in the suggestedQuestions array.
            // Using the bot logic ensures consistency.
            const response = getBotResponse(question.question, knowledgeBase, fallbackResponses);

            const botMsg = {
                type: 'bot',
                text: response.text,
                cta: response.cta,
                link: '/contact'
            };
            setMessages(prev => [...prev, botMsg]);
        }, 500);
    };

    const handleCTAClick = () => {
        setIsOpen(false);
        navigate('/contact');
    };

    return (
        <div className="fixed bottom-20 md:bottom-1 right-0 md:right-0 z-50 flex flex-col items-end pointer-events-none">
            <div className="fixed top-[50%] md:top-1/2 -translate-y-1/2 right-0 md:right-0 flex flex-col items-end gap-2 md:gap-3 px-0 py-1.5 md:px-2 md:py-2 pointer-events-auto">
                <a
                    href="https://wa.me/919363035048?text=Hi%20Arvayon%2C%20I%27d%20like%20a%20free%20estimate."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center group mr-1 md:mr-0"
                    aria-label="WhatsApp"
                >
                    <div className="w-7 h-7 md:w-10 md:h-10 rounded-full bg-white/90 backdrop-blur-xl flex items-center justify-center shadow-[0_2px_12px_rgba(0,0,0,0.45)] ring-1 ring-white group-hover:scale-105 transition-transform">
                        <svg className="w-5 h-5 md:w-6 md:h-6 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.219 1.592 5.448 0 9.886-4.434 9.889-9.882.003-5.462-4.415-9.89-9.879-9.892-5.452 0-9.887 4.434-9.89 9.882-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.914-1.982zm11.386-6.603c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.867-2.031-.966-.272-.099-.47-.149-.669.149-.198.297-.768.966-.941 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.477-.883-.788-1.48-1.761-1.653-2.058-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.149-.173.198-.297.297-.495.099-.198.05-.372-.025-.521-.074-.149-.669-1.612-.916-2.208-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.521.074-.793.372-.272.297-1.04 1.016-1.04 2.479s1.065 2.876 1.213 3.074c.149.198 2.099 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.226 1.361.194 1.875.118.572-.085 1.758-.718 2.006-1.413.248-.695.248-1.29.173-1.413z" />
                        </svg>
                    </div>
                </a>
                <a
                    href="mailto:admin@arvayonpbs.com?subject=Free%20Estimate&body=Hi%2C%20please%20contact%20me%20with%20details."
                    className="flex flex-col items-center group mr-1 md:mr-0"
                    aria-label="Send Mail"
                >
                    <div className="fixed right-1 md:static md:right-auto w-7 h-7 md:w-10 md:h-10 rounded-full bg-white/90 backdrop-blur-xl flex items-center justify-center shadow-[0_2px_12px_rgba(0,0,0,0.45)] ring-1 ring-white group-hover:scale-105 transition-transform">
                        <svg className="w-5 h-5 md:w-6 md:h-6 text-purple-700" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 13.5l-10-7V18a2 2 0 002 2h16a2 2 0 002-2V6.5l-10 7zm10-9h-20l10 7 10-7z" />
                        </svg>
                    </div>
                </a>

                {/* Free Estimate Button - Vertical on all screens */}
                <div className="mt-20 md:mt-0 mr-1 md:mr-0 origin-center transform -rotate-90 md:rotate-0 translate-x-[40%] md:translate-x-0">
                    <Link
                        to="/#book-consultation"
                        className="block bg-[#D4B878] text-primary font-bold rounded-md shadow-lg border border-primary/20 px-3 py-1.5 text-[10px] text-center hover:scale-105 transform transition-all duration-300 whitespace-nowrap uppercase tracking-wider"
                    >
                        Free Estimate
                    </Link>
                </div>
            </div>



            {/* Pop-up Message Bubble */}
            {!isOpen && (
                <div className="mb-2 bg-white text-primary px-1 py-2 rounded-xl rounded-br-none shadow-xl transform transition-all duration-300 animate-bounce mr-2 pointer-events-auto">
                    <p className="font-bold text-sm whitespace-nowrap">May I help you !!!!</p>
                </div>
            )}

            {/* Chat Window */}
            {isOpen && (
                <div className="mb-4 mr-2 w-80 md:w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden transform transition-all duration-300 origin-bottom-right pointer-events-auto flex flex-col max-h-[500px]">
                    <div className="bg-primary p-4 flex justify-between items-center shrink-0">
                        <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-primary font-bold text-xs">
                                AI
                            </div>
                            <div>
                                <h3 className="text-white font-bold text-sm">Assistant</h3>
                                <p className="text-accent text-xs">Online</p>
                            </div>
                        </div>
                        <button onClick={() => setIsOpen(false)} aria-label="Close chat" className="text-gray-400 hover:text-white">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Messages Area */}
                    <div className="flex-1 bg-gray-50 p-4 overflow-y-auto min-h-[300px]">
                        {messages.map((msg, index) => (
                            <div key={index} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'} mb-4`}>
                                <div
                                    className={`rounded-lg py-2 px-3 text-sm max-w-[85%] ${msg.type === 'user'
                                        ? 'bg-[#D4B878] text-white rounded-tr-none'
                                        : 'bg-gray-200 text-gray-800 rounded-tl-none'
                                        }`}
                                >
                                    <p>{msg.text}</p>
                                    {msg.cta && (
                                        <button
                                            onClick={handleCTAClick}
                                            className="mt-2 text-xs font-bold uppercase tracking-wider text-primary border-b border-primary/20 pb-0.5 hover:text-[#D4B878] transition-colors"
                                        >
                                            {msg.cta} →
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* FAQ Chips Area */}
                    <div className="p-3 border-t border-gray-100 bg-white">
                        <p className="text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider text-left">Suggested Questions</p>
                        <div className="flex flex-wrap gap-2 max-h-32 overflow-y-auto mb-3">
                            {suggestedQuestions.map((q) => (
                                <button
                                    key={q.id}
                                    onClick={() => handleQuestionClick(q)}
                                    className="text-left bg-gray-100 hover:bg-[#D4B878] hover:text-white text-gray-700 text-xs py-1.5 px-3 rounded-full transition-all duration-200 border border-gray-200"
                                >
                                    {q.question}
                                </button>
                            ))}
                        </div>

                        {/* Input Area */}
                        <form onSubmit={handleSendMessage} className="flex items-center bg-gray-100 rounded-full px-4 py-2">
                            <input
                                type="text"
                                placeholder="Type a message..."
                                className="bg-transparent flex-1 text-sm outline-none text-gray-700"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                            />
                            <button type="submit" aria-label="Send message" className={`text-primary ${!inputValue.trim() ? 'opacity-50 cursor-not-allowed' : 'hover:text-[#D4B878]'}`}>
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
            )}

            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle chatbot"
                className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary flex items-center justify-center shadow-[0_2px_12px_rgba(0,0,0,0.45)] transform transition-transform duration-300 hover:scale-110 focus:outline-none pointer-events-auto mr-2 md:mr-0"
            >
                {isOpen ? (
                    <svg className="w-6 h-6 text-[#D4B878]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                ) : (
                    <svg className="w-6 h-6 md:w-7 md:h-7 text-[#D4B878]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                )}
            </button>
        </div>
    );
};

export default ChatBot;
