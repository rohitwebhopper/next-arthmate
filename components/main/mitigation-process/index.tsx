import React, { useState } from "react";
// import Image from "next/image";
import Wrapper from "../../wrapper";
import "./index.css";

// card images

import cardImgone from "@/assets/images/Vector File.png";
import borrow from "@/assets/images/card/Borrower-Identification (1).png";
import institute from "@/assets/images/card/Institutional-Underwriting.png";
import algo from "@/assets/images/card/Algorithmic-Diversification.png";
// images
import cooperationImg from "@/assets/white-icon/Cooperation.svg";
import borrowImg from "@/assets/images/SVG/icon2.png";
import intitutionalImg from "@/assets/blue-icon/Institutional-Underwriting-icon.png";
import neuralImg from "@/assets/images/SVG/neural .svg";
import Card from "./Card";
// import blue svg
import bluecooperation from "@/assets/blue-icon/cooperation.svg";
//
// import white svg
import whiteborrowImg from "@/assets/white-icon/borrow.svg";
import whiteintitution from "@/assets/white-icon/Institutional-Underwriting-icon.png";
import whiteneuralimg from "@/assets/white-icon/neural.svg";

import Image from "next/image";

const MitigationProcess: React.FC = () => {
  const cardData = [
    {
      heading: "Collaboration with trusted partners for sourcing borrowers",
      image: cardImgone,
      lines: [
        "Sourcing partners selected basis a robust 12-criteria selection framework",
        "70+ sourcing partners that evaluate and source quality borrowers",
        "Borrowers sourced across fintech, edtech, MSME, small ticket loans, supply chain finance & more",
      ],
    },
    {
      heading:
        "Diversified lending portfolio across India's creditworthy MSMEs and individuals",
      image: borrow,
      lines: [
        "Our partners source from key anchors having high quality borrowers",
        "To mitigate the credit risk, we also ensure a diverse borrower profile by sourcing borrowers across tenure, industry, and more",
      ],
    },
    {
      heading: "Powered by in-house NBFC",
      image: institute,
      lines: [
        "Our proven institutional-grade underwriting methodology has powered disbursals of INR 2000+ Cr.  across 2 million+ borrowers",
        "With Arthmate Direct, you invest only in the most creditworthy borrowers because you lend only if our in-house NBFC approves",
      ],
    },
    {
      heading: "Powered by proprietary lending technology",
      image: algo,
      lines: [
        "Your portfolio is further risk protected as you lend to borrower pools rather than individuals",
        "Your portfolio exposure per borrower could be as low as Rs 1, further reducing your exposure to portfolio defaults",
        "The diversification strategy helps minimize potential losses",
      ],
    },
  ];

  const [activeDivIndex, setActiveDivIndex] = useState<number | null>(0);

  const handleDivClick = (index: number) => {
    setActiveDivIndex(activeDivIndex === index ? index : index);
  };

  return (
    <Wrapper className="main-padding">
      <div className="mitigation-process  flex justify-content-center ">
      <div className="container ">
        <div className="the-heading ">
          <h1>
            We deliver safe, high returns with an advanced 4-stage risk
            mitigation process
          </h1>
        </div>

        <div className="flex-mobile">
          <div className="steps">
            <section>
              <div
                onClick={() => handleDivClick(0)}
                className={` ${
                  activeDivIndex === 0 ? "back-color" : "update-color"
                }`}
              >
                <div>
                  <Image
                    src={
                      activeDivIndex === 0 ? cooperationImg : bluecooperation
                    }
                    alt="Partner Identification"
                    width={200}
                    height={200}
                  />
                </div>
                <h3
                  className={activeDivIndex === 0 ? "text-white" : "text-blue"}
                >
                  Partner <br /> Identification
                </h3>
              </div>
            </section>
            <section>
              <div
                onClick={() => handleDivClick(1)}
                className={` ${
                  activeDivIndex === 1 ? "back-color" : "update-color "
                }`}
              >
                <div>
                  <Image
                    src={activeDivIndex === 1 ? whiteborrowImg : borrowImg}
                    alt="Partner Identification"
                  />
                </div>
                <h3
                  className={activeDivIndex === 1 ? "text-white" : "text-blue"}
                >
                  Borrower <br /> Identification
                </h3>
              </div>
            </section>
            <section>
              <div
                onClick={() => handleDivClick(2)}
                className={activeDivIndex === 2 ? "back-color" : "update-color"}
              >
                <div>
                  <Image
                    className="align-top"
                    src={
                      activeDivIndex === 2 ? whiteintitution : intitutionalImg
                    }
                    alt="Partner Identification"
                  />
                </div>
                <h3
                  className={activeDivIndex === 2 ? "text-white" : "text-blue"}
                >
                  Institutional <br /> Underwriting
                </h3>
              </div>
            </section>
            <section>
              <div
                onClick={() => handleDivClick(3)}
                className={activeDivIndex === 3 ? "back-color" : "update-color"}
              >
                <div>
                  <Image
                    className="align-top"
                    src={activeDivIndex === 3 ? whiteneuralimg : neuralImg}
                    alt="Partner Identification"
                  />
                </div>
                <h3
                  className={activeDivIndex === 3 ? "text-white" : "text-blue"}
                >
                  Algorithmic <br /> Diversification
                </h3>
              </div>
            </section>
          </div>

          <div className="content-div">
            {cardData.map((data, index) => (
              <div key={index}>
                {activeDivIndex === index && (
                  <Card
                    heading={data.heading}
                    image={data.image}
                    lines={data.lines}
                    isActive={activeDivIndex === index}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </Wrapper>
  );
};
export default MitigationProcess;
