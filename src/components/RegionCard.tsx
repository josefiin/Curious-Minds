import { Link } from "react-router-dom";

type RegionCardProps = {
  imgSrc: string;
  imgAlt: string;
  link: string;
  text: string;
};

const RegionCard = (props: RegionCardProps) => {
  return (
    <Link
      className="block bg-lion-mid hover:bg-lion-dark rounded-image-lg p-5"
      to={props.link}
    >
      <img src={props.imgSrc} alt="" className="rounded-image-md w-full mb-5" />
      <div className="flex items-center justify-between">
        <h3 className="heading-sm">{props.text}</h3>
        <img src="/arrow-right-icon.svg" alt="arrow-right-icon" />
      </div>
    </Link>
  );
};

export default RegionCard;
