import Image from "next/image";
import "./index.css";

interface CardProps {
  heading: string;
  lines: string[];
  image: any;
  isActive: boolean;
}

const Card: React.FC<CardProps> = (props) => {
  return (
    <div className="mitigation-card ">
      <section>
        <h1 className="text-primary">{props.heading}</h1>

        <ul>
          {props.lines.map((line, index) => (
            <li key={index}>{line}</li>
          ))}
        </ul>
      </section>
      <section>
        <div>
          <Image src={props.image} width={300} alt="Image Not Found" />
        </div>
      </section>
    </div>
  );
};
export default Card;
