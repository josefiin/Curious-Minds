import { Link } from "react-router-dom";

type PillButtonProps = {
  link: string;
  text: string;
};

const PillButton = (props: PillButtonProps) => {
  return (
    <Link
      to={props.link}
      className="bg-jelly-light hover:bg-jelly-mid py-1 px-5 md:py-2 md:px-8 rounded-full"
    >
      {props.text}
    </Link>
  );
};

export default PillButton;
