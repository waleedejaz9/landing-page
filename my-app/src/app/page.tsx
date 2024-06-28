"use client";
import Image from "next/image";
import PrimaryButton from "@/Components/Button";
import SecondaryButton from "@/Components/Button";

import footerLogo from "../../public/GIFS/logoWhite.gif";
// import footerLogoStamp from "../assets/footerLogoStamp.png";
import footerStampArrow from "../assets/footerStampArrow.svg"
import { motion } from 'framer-motion';
import AnimateText from '@/Components/AnimateText'
import TeamInformation from "@/Components/TeamInformation";
import ExploreTheRest from '@/Components/ExploreTheRest'
import Card from '../Components/SocialPostsCardView';
import rectangle from '../assets/bgImage.png'
import camera from '../assets/camera-black.svg'
import goVegan from "../assets/goVegan.png"
import twitterLogo from "../assets/twitterLogo.png"



const cardItems = [
  { id: 1, title: '', hashtags: ['#vegan', '#healthy'], socialAppIcon: twitterLogo.src, rectangle: rectangle.src, goVegan: goVegan.src, camera: camera.src, date: '15 Oct 2019', description: 'The Best Vegan Chocolate Cake- A quick and easy recipe! It’s super moist, rich and full of chocolate. ' },
  { id: 2, title: '', hashtags: ['#vegan', '#healthy'], socialAppIcon: twitterLogo.src, rectangle: rectangle.src, goVegan: goVegan.src, camera: camera.src, date: '15 Oct 2019', description: 'The Best Vegan Chocolate Cake- A quick and easy recipe! It’s super moist, rich and full of chocolate. ' },
  { id: 3, title: '', hashtags: ['#vegan', '#healthy'], socialAppIcon: twitterLogo.src, rectangle: rectangle.src, goVegan: goVegan.src, camera: camera.src, date: '15 Oct 2019', description: 'The Best Vegan Chocolate Cake- A quick and easy recipe! It’s super moist, rich and full of chocolate. ' },
  { id: 4, title: '', hashtags: ['#vegan', '#healthy'], socialAppIcon: twitterLogo.src, rectangle: rectangle.src, goVegan: goVegan.src, camera: camera.src, date: '15 Oct 2019', description: 'The Best Vegan Chocolate Cake- A quick and easy recipe! It’s super moist, rich and full of chocolate. ' },
  { id: 5, title: '', hashtags: ['#vegan', '#healthy'], socialAppIcon: twitterLogo.src, rectangle: rectangle.src, goVegan: goVegan.src, camera: camera.src, date: '15 Oct 2019', description: 'The Best Vegan Chocolate Cake- A quick and easy recipe! It’s super moist, rich and full of chocolate. ' },
  { id: 6, title: '', hashtags: ['#vegan', '#healthy'], socialAppIcon: twitterLogo.src, rectangle: rectangle.src, goVegan: goVegan.src, camera: camera.src, date: '15 Oct 2019', description: 'The Best Vegan Chocolate Cake- A quick and easy recipe! It’s super moist, rich and full of chocolate. ' },

  // Add more cards as per your requirement
];
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
    <div>
      <section className="bg-[#D9D9D9]">
        <h1 className="text-center text-[90px]" style={{ fontWeight: '860', fontFamily: "SFProDisplay, sans-serif" }}>ALL THAT WE DID!!!</h1>
        <h2 className="text-center -mt-7 mb-10" style={{ fontWeight: '700', lineHeight: '32.52px', fontFamily: "SFProDisplay, sans-serif", fontSize: "27.1px" }}>THAT YOU MUST HAVE SEEN</h2>


        <TeamInformation />
        <div className="mt-20 flex justify-center">
        <SecondaryButton
        outerClassName= "bg-[#DF1780] p-5 w-[15%]"
            customClassName={{
            
              backgroundColor: "#DF1780",
              border: "none",
              color: "white",
              cursor: "pointer",
              display: 'flex',
              alignItems: 'center',
              fontSize: '15.5px', lineHeight: "25.6px", fontWeight: '590', fontFamily: "SFProDisplay, sans-serif",
              width: "15%",
            
              justifyContent: "space-between"
            }}
            text="TAKE ME BACK"
          />
        </div>
      
      </section>
      <section className="flex pb-10 bg-[#D9D9D9]">

        <div className="w-4/12">
          <h3
            className="w-4/12 mt-32 ml-16"
            style={{ fontWeight: '590', fontSize: '18.28px', color: "#000000", lineHeight: "32px", fontFamily: "SFProDisplay, sans-serif", }}

          >Stay up-to-date on the
            latest Ghmza and share
            your thoughts.</h3>
          <ExploreTheRest

            topText="EXPLORE"
            bottomText="THE REST"
            topTextStyle={{ display: 'flex', justifyContent: 'start', fontWeight: '860', fontSize: '58px', color: "#000000" }}
            bottomTextStyle={{ display: 'flex', fontWeight: '400', fontSize: '58px', color: "#000000", marginLeft: '75px' }}
          />
          <SecondaryButton
            customClassName={{
              marginTop: "20px",
              backgroundColor: "#DF1780",
              border: "none",
              color: "white",
              padding: "10px 20px",
              cursor: "pointer",
              overflow: "hidden",
              position: "relative",
              display: 'flex',
              alignItems: 'center',
              fontSize: '15.5px', lineHeight: "25.6px", fontWeight: '590', fontFamily: "SFProDisplay, sans-serif",
              width: "46%",
              marginLeft: "10%",
              justifyContent: "space-between"
            }}
            text="TAKE ME BACK"
          />
        </div>
        <div className="w-7/12 mt-16">
          <div className="">
            <motion.div layout className="grid grid-cols-3">
              {cardItems.map(card => (
                <Card data={card} />
              ))}
            </motion.div>
          </div>
        </div>
      </section>
      <footer className="w-100">
        <div className="flex justify-between  m-auto items-center" style={{ backgroundColor: "#DF1780", height: "408.52px" }}>
          <div style={{ marginLeft: "68px" }}>
            <AnimateText
              topText="LOUDER"
              bottomText="THE BETTER"
              topTextStyle={{ display: 'flex', justifyContent: 'start', fontWeight: '860', fontSize: '87.51px', color: "#ffffff" }}
              bottomTextStyle={{ display: 'flex', justifyContent: 'center', fontWeight: '700', fontSize: '58px', letterSpacing: '3px', color: "#ffffff" }}
            />
            {/* <h1 className="text-white flex flex-col" style={{ fontSize: "87.51px", fontWeight: "860", lineHeight: "69.6px", fontFamily: "SFProDisplay, sans-serif" }}>LOUDER <span style={{ fontWeight: "700", fontSize: "58px", letterSpacing: "3px" }}>THE BETTER</span></h1> */}
            <PrimaryButton customClassName={{
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
              text="LET'S GO" />
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
    </div>

  );
}
