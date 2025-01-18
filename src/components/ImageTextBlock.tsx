import classNames from "classnames";

type ImageTextBlockProps = {
  heading: string;
  text: string;
  imgSrc: string;
  imgAlt: string;
  // ? för optional
  className?: string;
};

const ImageTextBlock = (props: ImageTextBlockProps) => {
  // Klasses som styr komponenten. Gör det möjligt att lägga på klasser även "utanför" komponenten.
  const classes = classNames(
    "bg-lion-mid rounded-image-lg px-10 md:px-0 col-span-12 lg:col-start-2 lg:col-span-10",
    props.className
  );
  return (
    <div className={classes}>
      <div className="col-start-6 col-span-4 py-10 md:pb-0">
        <h2 className="heading-md text-center md:text-left">{props.heading}</h2>
        <p className="text-center md:text-left">{props.text}</p>
      </div>
      <img
        src={props.imgSrc}
        alt={props.imgAlt}
        className="row-start-1 md:mt-14 col-start-2 col-span-3 w-10/12 md:w-full mx-auto md:mx-0"
      />
    </div>
  );
};

export default ImageTextBlock;
