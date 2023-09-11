import classes from "./logo.module.css";
import Wrapper from "../wrapper";

import logoImg from '@/assets/images/PNG/Logo_Header.png';
import Image from "next/image";

export default function Logo() {
  return (
    <Wrapper className="logo">
      <div className={classes.containerfluid}>
        <div className={classes.container}>
          <div>
            <Image className={classes.logo} src={logoImg} alt="image not found" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
