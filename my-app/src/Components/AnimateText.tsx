import { motion } from 'framer-motion';

// Define character animation variants for the motion components
const characterVariants = {
  initial: { y: 30, opacity: 0 },
  animate: (i:any) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.05, // Stagger the animation of each character
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

const TextAnimationComponent = () => {
  const topText = "LOUDER";
  const bottomText = "THE BETTER";

  // Convert strings into arrays of characters
  const topCharacters = Array.from(topText);
  const bottomCharacters = Array.from(bottomText);

  return (
    <div className='flex flex-col items-center' style={{ fontFamily: 'SFProDisplay, sans-serif', width: '100%', maxWidth: '300px'}}>
      <motion.div
        initial="initial"
        animate="animate"
        style={{ display: 'flex', justifyContent: 'start', fontWeight: '860', fontSize: '87.51px', color: "#ffffff"}}
        className='ml-20'
      >
        {topCharacters.map((char, index) => (
          <motion.span
            key={`top-${index}`}
            custom={index}
            variants={characterVariants}
            style={{ display: 'inline', minWidth: "0.5em"}}  // Using inline-flex for each character
          >
            {char}
          </motion.span>
        ))}
      </motion.div>
      <motion.div
        initial="initial"
        animate="animate"
        style={{ display: 'flex', justifyContent: 'center', fontWeight: '700', fontSize: '58px', letterSpacing: '3px', color: "#ffffff" }}
         className='ml-20'
      >
        {bottomCharacters.map((char, index) => (
          <motion.span
            key={`bottom-${index}`}
            custom={index + topCharacters.length}
            variants={characterVariants}
            style={{ display: 'inline-block', minWidth: '0.34em'}}
            className='-mt-8'  // Using inline-flex for each character
          >
            {char}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};

export default TextAnimationComponent;
