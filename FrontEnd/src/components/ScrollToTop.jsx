import { useLayoutEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname, hash } = useLocation();
    const navType = useNavigationType();

    useLayoutEffect(() => {
        if (hash) {
            const id = hash.replace('#', '');
            const scrollToElement = (attempt = 0) => {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'auto' });
                } else if (attempt < 10) {
                    // Try more frequently but for a shorter total time
                    setTimeout(() => scrollToElement(attempt + 1), 50);
                }
            };
            // Try immediately without timeout
            scrollToElement();
        } else if (navType !== 'POP') {
            window.scrollTo(0, 0);
        }
    }, [pathname, hash, navType]);

    return null;
};

export default ScrollToTop;
