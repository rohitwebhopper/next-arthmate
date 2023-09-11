import classes from "./plan.module.css";
import Image from "next/image";

interface OurPlan {
  title: string;
  post: string;
  earn: string;
  investmentamount: string;
  date: string;
  image: any;
}

const PlanCard: React.FC<OurPlan> = (props) => {
  return (
    <div className={classes.card}>
      <div className={classes.text}>
        <p>{props.title}</p>
      </div>
      <div className={classes.cardcenter}>
        <div className={classes.cardimg}>
          <Image src={props.image} alt="Image Not Found" />
        </div>
      </div>
      <div className={classes.cardwealth}>
        <p>{props.post}</p>
      </div>
      <div className={classes.cardearn}>{props.earn}</div>
      <div className={classes.cardlist}>
        <div className={classes.cardiv}>
          <div>
            <div className={classes.cardtext}>Min. Investment</div>
            <div className={classes.cardtext}>
              <div></div>₹ {props.investmentamount}
            </div>
          </div>
          <div className={classes.duration}>
            <div className={classes.cardtext}>Duration</div>
            <div className={classes.cardtext}>{props.date}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PlanCard;
