import bannerImg from "@/assets/images/banner-img.png";
import "./index.css";

import Image from "next/image";

export default function YourInvestment() {
 
  return (
    <div className="flex justify-content-center your-space">
      <div className="investment-box   invest-sm c-p ">
        <div className="linehight ">
          <div>
            <div data-aos="fade-right">
              <h1 className="text-primary bannertext font-family invest-f-size">Earn up to 13% on your investment</h1>
            </div>
          </div>
          <div className="m-yourtext">
            <div data-aos="fade-right">
              <p className="yourtext font-family">
                Arthmate Direct is a next-generation investment platform powered by RBI-approved NBFCs.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-content-center">
          <div data-aos="fade-left">
            <Image className="bannerimg" alt="Your Investment Img" src={bannerImg} />
          </div>
        </div>
      </div>
    </div>
  );
}
