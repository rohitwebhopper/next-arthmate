import { useState } from "react";

import leaderimg from "@/assets/images/leader/person.jpg";
import ceo from "@/assets/images/leader/ceo2.jpeg";

import Image from "next/image";

import classes from "./leader.module.css";

function Leaders() {
  const [state, setState] = useState({
    active: 0,
  });

  const toggleImage = (item: number) =>
    setState((prev) => ({ ...prev, active: item }));

  return (
    <div className={classes.margin}>
      <div className={classes.container}>
        <div>
          <div className={classes.meet}>
            <div data-aos="fade-right">
              <p>Meet our Leaders</p>
            </div>
          </div>
          <div className={classes.center}>
            <div className={classes.coursel}>
              {state.active === 0 ? (
                <div className={classes.box}>
                  <div className={classes.text}>
                    <div className={classes.color}>
                      <div className={classes.p}>
                        <p>Ranjan Kant, Co-Founder & President</p>
                      </div>
                      <div className={classes.p1}>
                        <p>
                          Ranjan Kant is the Co-founder & President of
                          Arthmate Direct. He brings over 16 years of experience
                          across management consulting at Boston Consulting
                          Group and in CXO positions in 3 Indian unicorns -
                          Snapdeal, Flipkart and OfBusiness.
                          <br /> An alumnus of IIT-Kharagpur and IIM-Ahmedabad,
                          Ranjan started his career at Boston Consulting Group
                          (BCG), where he advised India's top banks, insurance
                          companies and asset managers on transformative
                          projects across domains.
                          <br /> With his rich expertise in successfully scaling
                          startups, Ranjan is a respected mentor and angel
                          investor in the Indian startup ecosystem.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={classes.lead}>
                    <Image src={leaderimg} alt="Ranjan-kant" />
                  </div>
                </div>
              ) : null}

              {state.active === 1 ? (
                <div className={classes.box}>
                  <div className={classes.text}>
                    <div className={classes.color}>
                      <div className={classes.p}>
                        <p>Madhusudhan ML, CEO</p>
                      </div>
                      <div className={classes.p1}>
                        <p>
                          Madhusudhan ML is the CEO of Arthmate Direct.
                          <br /> An experienced leader in the financial services
                          industry, Madhu has successfully established and run
                          businesses across diverse domains within financial
                          services over the course of his 21 year career.
                          <br /> Prior to Arthmate Direct, Madhu led a business
                          of national importance as the Managing Director and
                          CEO of NSDL Database Management.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={classes.lead}>
                    <Image src={ceo} alt="Madhusudhan" />
                  </div>
                </div>
              ) : null}

              <div className={classes.dot_container}>
                {[0, 1].map((s, idx) => (
                  <span
                    key={idx}
                    onClick={() => toggleImage(s)}
                    className={state.active === s ? classes.active : ""}
                  ></span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leaders;
