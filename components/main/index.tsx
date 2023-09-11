"use client";
import WhyArthmate from "./WhyArthmate";
import YourInvestment from "./YourInvestment";
import Logo from "./Logo";
import Investing from "./start-investing/Investing";
import OurPlan from "./investment-plan/OurPlan";
// import OurPartners from "./ourpartners/OurPartners";
import "./index.css";
import MitigationProcess from "./mitigation-process";
import DownloadApp from "./downloadapp/DownloadApp";
import Form from "./form/Form";
import Leaders from "./leaders/Leaders";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Main() {
  useEffect(() => {
    AOS.init({
      duration: 700, // animation duration
      once: true, // animation only occurs once
    });
  }, []);

  return (
    <main>
      <Logo />
      <YourInvestment />
      <WhyArthmate />
      <Investing />
      <OurPlan />
      <MitigationProcess />
      {/* <OurPartners /> */}
      <DownloadApp />
      <Leaders />
      <Form />
    </main>
  );
}
