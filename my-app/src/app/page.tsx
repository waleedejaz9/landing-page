"use client";
import Image from "next/image";
import PrimaryButton from "@/Components/Button";
import PrimaryButtonSvg from "../assets/primaryButtonSvg.svg";
import footerLogo from "../assets/footerLogo.svg";
import footerLogoStamp from "../assets/footerLogoStamp.png";
import footerStampArrow from  "../assets/footerStampArrow.svg"
import { motion } from 'framer-motion';

export default function Home() {
  // Define the radius for the text path and the inner circle
  const textRadius = 120;
  const innerCircleRadius = 100;  // Smaller radius for the inner circle

  // Calculate the approximate circumference of the text path
  const circumference = 2 * Math.PI * textRadius;

  // Prepare the text to cover the full circumference
  const text = "Welcome to a New Era of Care * * * ";
  const repeatedText = text.repeat(Math.ceil(circumference / (text.length * 8)));
  return (
    <footer className="w-100">
      <div className="flex justify-between  m-auto items-center" style={{ backgroundColor: "#DF1780", height: "408.52px" }}>
        <div style={{ marginLeft: "68px" }}>
          <h2 className="text-white flex flex-col" style={{ fontSize: "87.51px", fontWeight: "860", lineHeight: "69.6px", fontFamily: "SFProDisplay, sans-serif" }}>LOUDER <span style={{ fontWeight: "700", fontSize: "58px" }}>THE BETTER</span></h2>
          <PrimaryButton customClassName={`bg-white text-[#DF1780] gap-x-6 pl-4 pr-4 pt-3 pb-3 mt-5`} text="LET'S GO" />
        </div>
        <div className="flex gap-x-10 mr-12">
          <Image alt="footerLogo" src={footerLogo} />
          <motion.svg
            width="400" // SVG dimensions adjusted for inner content
            height="400"
            viewBox="0 0 400 400"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            style={{ originX: "50%", originY: "50%" }}
          >
            <circle
              cx="200"
              cy="200"
              r={innerCircleRadius}
              fill="none"
              stroke="white"
              strokeWidth="2"
            />
            <path
              id="circlePath"
              fill="none"
              d={`M200,200 m-${textRadius},0 a ${textRadius},${textRadius} 0 1,0 ${textRadius * 2},0 a ${textRadius},${textRadius} 0 1,0 -${textRadius * 2},0`}
            />
            <text fill="#fff" fontSize="12" letterSpacing="3">
              <motion.textPath
                xlinkHref="#circlePath"
                startOffset="0%"
                animate={{ startOffset: ["0%"] }}
                transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
              >
                {repeatedText}
              </motion.textPath>
            </text>
          </motion.svg>

        </div>
      </div>
    </footer>
  );
}
