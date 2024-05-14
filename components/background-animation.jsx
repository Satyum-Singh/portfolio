"use client"

import React, { useEffect } from 'react';
const BackgroundAnimations = () => {
    useEffect(() => {
        const blob = document.getElementById("blob");
        const handleMouseMove = (event) => {
            const { clientX, clientY } = event;
            blob.animate({
                left: `${clientX}px`,
                top: `${clientY}px`
            }, { duration: 3000, fill: "forwards" });
        };

        window.addEventListener('pointermove', handleMouseMove);

        return () => window.removeEventListener('pointermove', handleMouseMove);
    }, []);

    return (
        <div className="container">
            <div id="blob" className="bg-white h-34vmax aspect-ratio-square absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-aquamarine to-mediumpurple opacity-80 animate-spin" />
            <div id="blur" className="h-full w-full absolute z-2 bg-black/50 blur-12vmax" />
        </div>
    );
};

export default BackgroundAnimations;