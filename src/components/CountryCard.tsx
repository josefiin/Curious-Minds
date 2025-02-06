import { motion } from "motion/react";

type CountryCardProps = {
  // key: string;
  name: string;
  officialName: string;
  region: string;
  capital: string;
  money: string;
  area: number;
  population: number;
  carSide: string;
  imgUrl: string;
  imgAlt: string;
};

const CountryCard = (props: CountryCardProps) => {
  return (
    <motion.div
      className="bg-beige-light drop-shadow-sm rounded-image-lg p-5 md:p-8"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.4,
        scale: { type: "spring", visualDuration: 0.5, bounce: 0.2 },
      }}
    >
      <img
        src={props.imgUrl}
        alt={props.imgAlt}
        className="rounded-2xl w-full mb-6"
      />
      <h2 className="heading-sm mb-2">{props.name}</h2>
      <table className="text-left w-full border-separate border-spacing-y-1">
        <tbody>
          <tr className="pb-10">
            <th className="font-semibold">Official name:</th>
            <td>{props.officialName}</td>
          </tr>
          <tr>
            <th className="font-semibold">Region:</th>
            <td>{props.region}</td>
          </tr>
          <tr>
            <th className="font-semibold">Capital:</th>
            <td>{props.capital}</td>
          </tr>
          <tr>
            <th className="font-semibold">Money:</th>
            <td>{props.money}</td>
          </tr>
          <tr>
            <th className="font-semibold">Area:</th>
            <td>{props.area} km²</td>
          </tr>
          <tr>
            <th className="font-semibold">Population:</th>
            <td>{props.population}</td>
          </tr>
          <tr>
            <th className="font-semibold">Car side:</th>
            <td>{props.carSide}</td>
          </tr>
        </tbody>
      </table>
    </motion.div>
  );
};

export default CountryCard;
