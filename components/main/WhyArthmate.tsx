import Image from "next/image";
import "./index.css";
// import Wrapper from "../wrapper";

import checkImg from "@/assets/images/Check.svg";

export default function WhyArthmate() {
  return (
    <div className="container-fluid m-b  c-m-t">
      <div className="flex justify-content-center">
        <div data-aos="fade-right" data-aos-offset="50" data-aos-easing="ease-in-sine">
          <h2 className="text-center whyfont font-family text-primary"> Why Arthmate Direct</h2>
        </div>
      </div>
      <div className="flex justify-content-center">
        <div data-aos="fade-right" data-aos-offset="50" data-aos-easing="ease-in-sine">
          <p className="text-center font-family  why-w-p whyp-font">
          With Arthmate Direct, earn higher returns than FDs and savings accounts with lesser risk than equity investments.
          </p>
        </div>
      </div>
      <div className="flex check-box-center justify-content-center">
        <div className="container check-box-container flex">
          <div className="check-box-div flex">
            <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
              <div className="flex  align-item-center ">
                <h2 className="check-box-h2 font-family  left-one ">Higher Returns </h2>
                <Image alt="CheckBox-IMG-1" className="check-box-img" src={checkImg} />
              </div>
            </div>
            <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
              <div className="flex align-item-center">
                <h2 className="check-box-h2 font-family  right-one ">Lower Risk</h2>
                <Image alt="CheckBox-IMG-2" className="check-box-img" src={checkImg} />
              </div>
            </div>
          </div>

          <div className="check-box-div flex">
            <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
              <div className="flex  align-item-center">
                <h2 className="check-box-h2 font-family  left-two">Diversification</h2>
                <Image alt="CheckBox-IMG-3" className="check-box-img" src={checkImg} />
              </div>
            </div>
            <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
              <div className="flex align-item-center">
                <h2 className="check-box-h2 font-family  right-two mr">Ease of Use</h2>
                <Image alt="CheckBox-IMG-4" className="check-box-img" src={checkImg} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
