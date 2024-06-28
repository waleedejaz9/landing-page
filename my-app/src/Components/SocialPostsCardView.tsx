// components/Card.tsx
import { motion } from 'framer-motion';

// Define a type for the card props
type CardProps = {
    card: {
        rectangle: string;
        goVegan: string;
        camera: string;
        title: string;
        date: string;
        description: string;
    };
};

const SocialPostsCardView: React.FC<CardProps> = ({ card }) => {
    return (
        <motion.div
            layout
            initial={{ y: 0 }}
            whileHover={{ y: 20 }}
            transition={{ stiffness: 200 }}
            className="card"
        >
            <img src={card.rectangle} alt={card.title} className="card-image" />
            <div className="card-content">
                <div className='ml-3'>
                    <div className='flex gap-x-3'>
                        <img
                            className='-mt-9 -ml-4'
                            src={card.goVegan} alt="" />
                        <div className='flex flex-col'>
                            <h4 className='-mt-2' style={{ fontSize: "18px", fontWeight: " 700", lineHeight: "21.09px", fontFamily: "Roboto, sans-serif" }}>GoVegan</h4>
                            <p className='text-[#9CA0AC]'
                                style={{ 
                                    fontFamily: " Roboto, sans-serif",
                                    fontSize: "12px",
                                    fontWeight: "400",
                                    lineHeight: "14.06px",
                                    textAlign: "left",
                                    }}

                                 

                            >on 15 Oct 2019 </p>
                        </div>
                    </div>

                    <h3>{card.title}</h3>
                    <p>{card.date}</p>
                    <p>{card.description}</p>
                </div>

            </div>
        </motion.div>
    );
};

export default SocialPostsCardView;
