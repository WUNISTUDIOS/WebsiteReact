"use client"
// components/AnimatedText.js
import React from 'react';
import { motion } from 'framer-motion';

export default function AnimatedText(){
    const texts = ['I love Graphix ', 
        'I love Graphix ', 
        'I love Graphix ', 
        'I love Graphix ',
        'I love Graphix ',
        'I love Graphix ',
    ];
    return (
        <div className='text-6xl bold shadow-xl w-screen text-black h-20 relative overflow-hidden whitespace-nowrap rounded-sm'>
        <motion.div
            animate={{x: ["-100%", "100%"]}} // Moves the text from 0 to 100 pixels on the x-axis, then back to 0
            transition={{
                repeat: Infinity, // Repeat the animation infinitely
                ease: 'linear',
                duration: 10,
            }}
        >
        {texts.map((text, index) => (
            <span key={index} className="text-2xl font-bold whitespace-nowrap">
                {text}
            </span>
        ))}
        </motion.div>
        </div>
        )}

