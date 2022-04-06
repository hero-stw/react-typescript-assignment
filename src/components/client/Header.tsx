import React from "react";
import NavBar from "./Navbar";

type Props = {
  transparent?: boolean;
};

const Header = (props: Props) => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <nav
      className={
        (props.transparent
          ? "top-0 absolute z-50 w-full"
          : "relative shadow-lg bg-white") +
        " flex flex-wrap items-center justify-between "
      }
    >
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <NavBar />
      </div>
    </nav>
  );
};

export default Header;
