
// src/components/Navbar.js
import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [stats, setStats] = useState({
        poder: 0,
        plata: 0,
        trigo: 0,
        soldados: 0,
        oro: 0,
    });

    useEffect(() => {
        const savedStats = {
            poder: parseInt(localStorage.getItem('poder'), 10) || 0,
            plata: parseInt(localStorage.getItem('plata'), 10) || 0,
            trigo: parseInt(localStorage.getItem('trigo'), 10) || 0,
            soldados: parseInt(localStorage.getItem('soldados'), 10) || 0,
            oro: parseInt(localStorage.getItem('oro'), 10) || 0,
        };
        setStats(savedStats);
    }, []);

    const updateStat = (stat, value) => {
        const newStats = { ...stats, [stat]: value };
        setStats(newStats);
        localStorage.setItem(stat, value);
    };

    return (
        <nav className="h-14 w-2/4 rounded-r-lg bg-gradient-to-r from-[#ededec] via-[#97979a] to-[#dededb] flex items-center fixed z-10">
            <div className="flex">
                <img src="../img/avatar1.jpeg" alt="Profile" 
                className="rounded-full h-12 ml-2" />
            <h2 className='font-bold pl-3 flex items-center'>Noble0000001</h2>
            </div>
            <div className='flex gap-2 ml-10'>
                <div className="">Power: {stats.poder}</div>
                <div className="navbar-item">Silver: {stats.plata}</div>
                <div className="navbar-item">Grain: {stats.trigo}</div>
                <div className="navbar-item">Soldiers: {stats.soldados}</div>
                <div className="navbar-item">Gold: {stats.oro}</div>
            </div>
        </nav>
    );
};

export default Navbar;
