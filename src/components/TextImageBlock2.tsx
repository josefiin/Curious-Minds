import classNames from "classnames";

type TextImageBlock2Props = {
  heading: string;
  text: string;
  imgSrc: string;
  imgAlt: string;
  // ? för optional
  className?: string;
};

const TextImageBlock2 = (props: TextImageBlock2Props) => {
  // Klasses som styr komponenten. Gör det möjligt att lägga på klasser även "utanför" komponenten.
  const classes = classNames(
    "bg-plum-mid drop-shadow-sm rounded-image-lg md:grid grid-cols-2 gap-10 items-center",
    props.className
  );
  return (
    <div className={classes}>
      <div className="md:pl-8 md:pr-20 py-10 md:py-0 px-8 md:px-0 col-start-2 col-span-1 row-start-1 md:pb-0">
        <h2 className="heading-lg text-left">{props.heading}</h2>
        <p className="text-left">{props.text}</p>
      </div>
      <div className="px-6">
        <img
          src={props.imgSrc}
          alt={props.imgAlt}
          className="row-start-1 max-h-[400px] mx-auto md:mt-14 col-start-1 col-span-1"
        />
      </div>
    </div>
  );
};

export default TextImageBlock2;
