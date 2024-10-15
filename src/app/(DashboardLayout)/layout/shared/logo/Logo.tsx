import Link from "next/link";
import { styled } from "@mui/material";
import Image from "next/image";

const LinkStyled = styled(Link)(() => ({
  height: "200px", // Increase the height
  width: "400px",  // Increase the width
  overflow: "hidden",
  display: "block",
}));

const Logo = () => {
  return (
    <LinkStyled href="">
      <Image src="/images/logos/canvasLogo.svg" alt="logo" height={200} width={400} priority />
    </LinkStyled>
  );
};

export default Logo;
