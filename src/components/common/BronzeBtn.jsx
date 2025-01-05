import React from 'react';
import { Link as RouterLink } from 'react-router-dom';


import { Link as ScrollLink } from 'react-scroll'; 

const BronzeBtn = ({ to, text, className = "" }) => {
  const isRoute = to && to.startsWith('/');
    return (
      <button className={`hover:border-white shadow-none  duration-500 font-koulen text-base md:text-xl tracking-[0.2em] uppercase border border-bronze bg-bronze text-white px-3 md:px-10 py-2 ${className}`}>
        {isRoute ? (
        <RouterLink to={to}>{text}</RouterLink>  // React Router navigation
      ) : (
        <ScrollLink to={to} smooth={true} duration={500}>{text}</ScrollLink>  // Scroll to section
      )}
      </button>
    );
  };

export default BronzeBtn;