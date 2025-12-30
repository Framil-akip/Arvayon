import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiHome, FiTag, FiImage, FiPhone } from 'react-icons/fi';

const NavItem = ({ icon, label, href, isHome }) => {
  const classes = 'flex flex-col items-center justify-center flex-1 py-2 text-[11px]';
  const IconComp = icon;
  const inner = (
    <>
      <span className="w-6 h-6 rounded-md bg-primary text-accent border border-white/10 flex items-center justify-center mb-1">
        <IconComp className="w-3.5 h-3.5" />
      </span>
      <span className="text-gray-300">{label}</span>
    </>
  );
  return isHome ? (
    <a href={`#${href}`} className={classes} aria-label={label}>
      {inner}
    </a>
  ) : (
    <Link to={`/#${href}`} className={classes} aria-label={label}>
      {inner}
    </Link>
  );
};

const BrandButton = ({ isHome }) => {
  const jsx = (
    <div className="relative">
      <div className="w-16 h-16 rounded-full border-4 border-secondary bg-transparent"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-14 h-14 rounded-full bg-white text-accent font-bold shadow-[0_10px_24px_rgba(0,0,0,0.35)] border border-white/40 flex items-center justify-center">
          ARVAYON
        </div>
      </div>
    </div>
  );
  return isHome ? (
    <a href="#home" aria-label="Go Home">
      {jsx}
    </a>
  ) : (
    <Link to="/#home" aria-label="Go Home">
      {jsx}
    </Link>
  );
};

const BottomNav = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden">
      <div className="relative">
        <div className="absolute -top-7 left-1/2 -translate-x-1/2">
          <BrandButton isHome={isHome} />
        </div>

        <nav className="bg-primary/95 backdrop-blur-sm border-t border-white/10 px-2">
          <div className="flex items-stretch justify-between">
            <NavItem icon={FiHome} label="Company" href="about" isHome={isHome} />
            <NavItem icon={FiTag} label="Offers" href="offers" isHome={isHome} />
            <NavItem icon={FiImage} label="Gallery" href="portfolio" isHome={isHome} />
            <NavItem icon={FiPhone} label="Contact" href="contact" isHome={isHome} />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default BottomNav;
