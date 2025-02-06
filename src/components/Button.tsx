import { Link } from "react-router-dom";

type ButtonProps = {
  link: string;
  text: string;
};

const Button = (props: ButtonProps) => {
  return (
    // Gör om till länk
    <Link
      to={props.link}
      className="bg-plum-dark text-xl text-white w-fit flex gap-2 items-center justify-center rounded-full px-10 py-3 t"
    >
      <span>{props.text}</span>
      <img src="/arrow-right-icon_neg.svg" alt="arrow right icon" />
    </Link>
  );
};

export default Button;
