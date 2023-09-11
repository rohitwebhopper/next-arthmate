import classes from "./plan.module.css";
import PlanCard from "./PlanCard";
import flexibility from "@/assets/images/SVG/flexibility.png";
import growthplan from "@/assets/images/SVG/get returns.png";
import mearnings from "@/assets/images/SVG/long term.png";

const OurPlan: React.FC = () => {
  return (
    <div className="container-fluid m-t m-b flex justify-content-center">
      <div className="container">
        <div className={classes.ourdiv}>
          <div data-aos="fade-up">
            <h1>
              Our investment plans have been designed to help you achieve your
              financial goals
            </h1>
          </div>
        </div>
        <div className={classes.ourpcard}>
          <div>
            <PlanCard
              title="Growth Plan"
              image={mearnings}
              post="Invest for long-term wealth creation!"
              earn="Earn up to 13%"
              investmentamount="10,000"
              date="12/24/36 months"
            />
          </div>
          <div>
            <PlanCard
              image={growthplan}
              title="Growth Plan with Monthly Earnings"
              post="Invest once, get returns every month!"
              earn="Earn up to 12.25%"
              investmentamount="1,00,000"
              date="12/24/36 months"
            />
          </div>
          <div>
            <PlanCard
              image={flexibility}
              title="Freedom Plan"
              post="Invest with flexibility!"
              earn="Earn up to 10%"
              investmentamount="10,000"
              date="Flexible"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default OurPlan;
