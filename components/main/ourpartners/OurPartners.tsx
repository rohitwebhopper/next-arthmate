import Wrapper from "../../wrapper";
import classes from "./ourpartners.module.css";
import Spice from "@/assets/images/download (1).png";
import TradeIndia from "@/assets/images/download.jpg";
import FinancePeer from "@/assets/images/download (3).png";
import Recur from "@/assets/images/image (1).png";
import CheqBook from "@/assets/images/image.png";
import PayMeIndia from "@/assets/images/PayMeIndia.png";

//
import RapiPay from "@/assets/images/download (4).png";
import Karbon from "@/assets/images/download (5).png";
import TrueBalance from "@/assets/images/truebalance.png";
import SaveIn from "@/assets/images/savein.png";
import KarmaLife from "@/assets/images/download (2).png";
import Bharatpay from "@/assets/images/baratpay.png";

import Image from "next/image";

export default function OurPartners() {
  return (
    <Wrapper className="ourpartner-div">
      <div>
        <div className="flex justify-content-center">
          <div data-aos="fade-up">
            <h1 className={classes.h1}>Our Partners</h1>
          </div>
        </div>
        <div data-aos="fade-right">
          <div className={classes.container}>
            <div className={classes.box}>
              <div className={classes.spice}>
                <Image src={Spice} alt="404" />
              </div>
              <div className={classes.tradeindia}>
                <Image src={TradeIndia} alt="404" />
              </div>
              <div className={classes.finance}>
                <Image src={FinancePeer} alt="404" />
              </div>
            </div>
            <div className={classes.box}>
              <div className={classes.recur}>
                <Image src={Recur} alt="404" />
              </div>
              <div className={classes.checkbook}>
                <Image src={CheqBook} alt="404" />
              </div>
              <div className={classes.payme}>
                <Image src={PayMeIndia} alt="404" />
              </div>
            </div>
          </div>
        </div>

        <div data-aos="fade-left">
          <div className={classes.boxn}>
            <div className={classes.boxi}>
              <div className={classes.rapi}>
                <Image src={RapiPay} alt="404" />
              </div>
              <div className={classes.karbon}>
                <Image src={Karbon} alt="404" />
              </div>
              <div className={classes.truebalance}>
                <Image src={TrueBalance} alt="404" />
              </div>
            </div>
            <div className={classes.boxi}>
              <div className={classes.savein}>
                <Image src={SaveIn} alt="404" />
              </div>
              <div className={classes.karmalife}>
                <Image src={KarmaLife} alt="404" />
              </div>
              <div className={classes.bpay}>
                <Image src={Bharatpay} alt="404" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
