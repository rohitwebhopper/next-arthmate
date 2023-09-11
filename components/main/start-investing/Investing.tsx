import classes from "./investing.module.css";
import Mobile from "@/assets/images/mobile gif/AD Website Gif v3.gif";

import Image from "next/image";

export default function Investing() {
  return (
    <div className={classes.classfluid}>
      <div className={classes.nvest}>
        <div className={classes.box}>
          <h1>How to Invest</h1>
          <h2>
            It's easy! You can start investing securely in 3 simple steps.
          </h2>

          <div
            className={classes.investingmobilebox}
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <div>
              <div className={classes.investingbox}>
                <div className={classes.circle}>1</div>
                <p className={classes.aertx}>
                  Download the Arthmate Direct app, complete your KYC, and add
                  bank details
                </p>
              </div>
              <div className={classes.investingbox}>
                <div className={classes.circle}>2</div>
                <p className={classes.aert}>
                  Choose an investment plan that suits your needs
                </p>
              </div>
              <div className={classes.investingbox}>
                <div className={classes.circle}>3</div>
                <p className={classes.aert}>Start earning!</p>
              </div>
            </div>
          </div>
        </div>

        <div className={classes.mobile}>
          <div>
            <div data-aos="fade-left">
              <div className={classes.box2}>
                <Image src={Mobile} alt="404" height={500} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
