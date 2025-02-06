import Button from "./Button";

type TextImageBlockProps = {
  heading: string;
  text: string;
  buttonText: string;
  buttonHref: string;
  imgSrc: string;
  imgAlt: string;
};

const TextImageBlock = (props: TextImageBlockProps) => {
  return (
    <div className="bg-beige-light drop-shadow-sm p-6 md:p-0 rounded-image-lg md:grid grid-cols-2 gap-10 items-center">
      <div className="h-full md:p-8 row-start-1 col-start-2 mb-8 md:mb-0">
        <img
          src={props.imgSrc}
          alt={props.imgAlt}
          className="rounded-2xl h-full w-full max-h-[300px] md:max-h-none object-cover"
        />
      </div>
      <div className="pl-2 md:pl-20 md:py-12 row-start-1 col-start-1 col-span-1 mb-8 md:mb-0">
        <h1 className="heading-lg text-left">{props.heading}</h1>
        <p className="mb-10">{props.text}</p>
        <Button text={props.buttonText} link={props.buttonHref} />
      </div>
    </div>
  );
};

export default TextImageBlock;
