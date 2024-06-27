import Image from "next/image";
import primaryButtonSvg from '../assets/primaryButtonSvg.svg'
import { motion, Variants } from 'framer-motion';
import { useState } from "react";

interface primaryButtonProps {
    text: string;
    customClassName?: string;
}
const PrimaryButton = (props: primaryButtonProps) => {
    const [isHovered, setIsHovered] = useState(false);

    const text = "LET'S GO";
    const characters = [];

    let currentWord = '';

    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        if (char === ' ' || char === "'") {
            if (currentWord.length > 0) {
                characters.push(currentWord);
                currentWord = '';
            }
            characters.push(char);
        } else {
            currentWord += char;
        }
    }

    if (currentWord.length > 0) {
        characters.push(currentWord);
    }


    const containerVariants: Variants = {
        initial: {},
        hover: {
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1
            }
        }
    };

    const characterVariants: Variants = {
        initial: { y: '0%', opacity: 1 },
        hover: {
            y: ['0%', '-100%', '-100%', '0%'],
            opacity: [1, 0, 0, 1],
            transition: { duration: 1.0, times: [0, 0.3, 0.3, 0.7] }
        }
    };

    const arrowVariants: Variants = {
        initial: { rotate: -30 },
        hover: { rotate: 0, transition: { duration: 0.7 } }
    };
    const spanStyle = {
        display: 'inline-block',
        minWidth: '0.6em', // Adjust this value as needed for the desired space width
    };
    return (
        <div>
            <motion.button
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{
                    marginTop: "20px",
                    backgroundColor: "white",
                    border: "none",
                    color: "#DF1780",
                    padding: "10px 20px",
                    cursor: "pointer",
                    overflow: "hidden",
                    position: "relative",
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: '15.25px', lineHeight: "25.6px", fontWeight: '590', fontFamily: "SFProDisplay, sans-serif"
                }}
            >
                <motion.div
                    variants={containerVariants}
                    initial="initial"
                    animate={isHovered ? 'hover' : 'initial'}
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontFamily: "SFProDisplay, sans-serif"
                    }}
                >
                    {characters.map((char, index) => (
                        <motion.span key={index} variants={characterVariants} style={spanStyle}>
                            {char}
                        </motion.span>
                    ))}
                </motion.div>
                <motion.div
                    variants={arrowVariants}
                    initial="initial"
                    animate={isHovered ? 'hover' : 'initial'}
                    style={{ marginLeft: '10px', display: 'flex', alignItems: 'center' }}
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L22 12L12 22" stroke="#DF1780" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M2 12H22" stroke="#DF1780" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </motion.div>
            </motion.button>
        </div>

    )
}
export default PrimaryButton;