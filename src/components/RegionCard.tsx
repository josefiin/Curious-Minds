import { Link } from "react-router-dom";
import { motion } from "motion/react";

type RegionCardProps = {
  imgSrc: string;
  imgAlt: string;
  link: string;
  text: string;
};

const RegionCard = (props: RegionCardProps) => {
  return (
    <Link to={props.link}>
      <motion.div
        className="block bg-plum-mid drop-shadow-sm hover:bg-plum-cta transition-colors duration-300 ease-in-out overflow-hidden rounded-image-lg"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.4,
          scale: { type: "spring", visualDuration: 0.5, bounce: 0.2 },
        }}
      >
        <img
          src={props.imgSrc}
          alt=""
          className="w-full aspect-video object-cover"
        />
        <div className="px-8 py-6 flex items-center justify-between">
          <h3 className="heading-sm">{props.text}</h3>
          <img src="/arrow-right-icon.svg" alt="arrow-right-icon" />
        </div>
      </motion.div>
    </Link>
  );
};

export default RegionCard;
