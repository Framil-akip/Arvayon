import { useEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname, hash } = useLocation();
    const navType = useNavigationType();

    useEffect(() => {
        if (hash) {
            const id = hash.replace('#', '');
            const scrollToElement = (attempt = 0) => {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'auto' });
                } else if (attempt < 5) {
                    setTimeout(() => scrollToElement(attempt + 1), 200);
                }
            };
            setTimeout(() => scrollToElement(), 100);
        } else if (navType !== 'POP') {
            window.scrollTo(0, 0);
        }
    }, [pathname, hash, navType]);

    return null;
};

export default ScrollToTop;
