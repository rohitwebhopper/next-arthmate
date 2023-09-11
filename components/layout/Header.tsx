import "./layout.css";
import logo from "@/assets/images/PNG/Logo_Header.png";
import Wrapper from "../wrapper";

import Image from "next/image";

export default function Header() {
  return (
    <Wrapper>
      <header >
        <Image src={logo} alt="Header Img" height={50} width={200} />
      </header>
    </Wrapper>
  );
}
