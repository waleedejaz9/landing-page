"use client";
import Image from "next/image";
import PrimaryButton from "@/Components/Button";
import PrimaryButtonSvg from "../assets/primaryButtonSvg.svg";
import footerLogo from "../../public/GIFS/logoWhite.gif";
import footerLogoStamp from "../assets/footerLogoStamp.png";
import footerStampArrow from "../assets/footerStampArrow.svg"
import { motion } from 'framer-motion';
import AnimateText from '@/Components/AnimateText'

export default function Home() {
  // Define the radius for the text path and the inner circle
  const textRadius = 120;
  const innerCircleRadius = 102;  // Smaller radius for the inner circle

  // Calculate the approximate circumference of the text path

  // Prepare the text to cover the full circumference
  const text = "Welcome to a New Era of Care * * * "; // Base text to display
  const imageUrl = "/path/to/your/image.jpg";  // Path to your image file
  const repeatedText = text.repeat(3); // Adjust repetition based on your text length and desired density

  return (
    <footer className="w-100">
      <div className="flex justify-between  m-auto items-center" style={{ backgroundColor: "#DF1780", height: "408.52px" }}>
        <div style={{ marginLeft: "68px" }}>
          <AnimateText />
          {/* <h1 className="text-white flex flex-col" style={{ fontSize: "87.51px", fontWeight: "860", lineHeight: "69.6px", fontFamily: "SFProDisplay, sans-serif" }}>LOUDER <span style={{ fontWeight: "700", fontSize: "58px", letterSpacing: "3px" }}>THE BETTER</span></h1> */}
          <PrimaryButton customClassName={`bg-white text-[#DF1780] gap-x-6 pl-4 pr-4 pt-3 pb-3 mt-5`} text="LET'S GO" />
        </div>
        <div className="flex justify-end items-center mr-10">
          <Image alt="footerLogo" src={footerLogo} className="w-2/12 -mr-10" />
          <motion.svg
            width="200"
            height="200"
            viewBox="0 0 400 400"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            style={{ originX: "50%", originY: "50%" }}
          >
            {/* Static Circle */}
            <circle
              cx="200"
              cy="200"
              r="100" // Circle radius fitting the path
              fill="none"
              stroke="white"
              strokeWidth="2"
            />
            {/* Counter-Rotated Image to Appear Static */}
            <motion.image
              id="arrow-footer-1"
              href={footerStampArrow.src}
              height="100" // Image dimensions to fit within the circle
              width="100"
              x="150" // Center image horizontally
              y="150" // Center image vertically
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              style={{
                originX: "50%", // Set the origin of rotation to the center of the image
                originY: "50%"
              }}
            />
            {/* Path for Text */}
            <path
              id="circlePath"
              fill="none"
              d={`M200,200 m-${textRadius},0 a ${textRadius},${textRadius} 0 1,0 ${textRadius * 2},0 a ${textRadius},${textRadius} 0 1,0 -${textRadius * 2},0`}
            />
            {/* Animated Text Path */}
            <text
              fill="#fff"
              fontSize="12"
              letterSpacing="3"
            >
              <motion.textPath
                xlinkHref="#circlePath"
                startOffset="0%"
                animate={{ startOffset: ["0%"] }}
                transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
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
