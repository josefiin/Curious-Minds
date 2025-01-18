import Button from "./Button";

type TextBlockProps = {
  heading: string;
  text: string;
  buttonText: string;
  buttonHref: string;
  imgSrc: string;
  imgAlt: string;
};

const TextBlock = (props: TextBlockProps) => {
  return (
    <div className="md:grid grid-cols-12 gap-5 items-center">
      <img
        src={props.imgSrc}
        alt={props.imgAlt}
        className="row-start-1 col-start-8 col-span-4 mb-10 md:mb-0"
      />
      <div className="row-start-1 col-start-2 col-span-5">
        <h1 className="heading-lg text-left">{props.heading}</h1>
        <p className="mb-10">{props.text}</p>
        <Button text={props.buttonText} link={props.buttonHref} />
      </div>
    </div>
  );
};

export default TextBlock;
