// import Wrapper from "../wrapper";

import footerImg from "@/assets/images/PNG/Logo_footer_white.png";
import "./layout.css";

import Image from "next/image";

export default function Footer() {
  return (
    <div className="container-fluid bg-primary flex justify-content-center">
      <div className="">
        <div className="flex sm-fbox pt-3 pb-3">
          <div className="m-fi-box">
            <div className="f-box time">
              <Image src={footerImg} alt="Not Found" />
            </div>
          </div>
          <div className="f-box">
            <div>
              <div className="footer-f4">
                <h4 className="f4-text">Registered Office: </h4>
              </div>
              <div>
                <h5 className="f5-text">
                  EM 03, Bengal Eco Intelligent Park, 11th Floor,
                  <br /> Unit 11 D1&D2, Salt Lake, Kolkata, 700091
                </h5>
              </div>
            </div>
          </div>
          <div className="f-box">
            <div>
              <div className="footer-f4">
                <h4 className="f4-text">Corporate Office: </h4>
              </div>
              <h5 className="f5-text">
                The Circle, 3rd Floor, Huda City Centre Metro Station, Sector
                29, Gurugram, Haryana 122002{" "}
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
