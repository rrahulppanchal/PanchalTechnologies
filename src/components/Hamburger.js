import React, { useState } from "react";
import { AiOutlineProfile } from "react-icons/ai";
import { BsBlockquoteLeft } from "react-icons/bs";
import { SiBmcsoftware } from "react-icons/si";
import { HiMenuAlt2 } from "react-icons/hi";

const HamburgerMenu = () => {
  const [display, setDisplay] = useState(false);

  return (
    <div>
      <div className="ham-icon">
        <HiMenuAlt2
          color="gray"
          fontSize="2em"
          onClick={() => setDisplay(!display)}
        />
        {/* <HiMenuAlt3 color="white" fontSize="2em" /> */}
      </div>
      <div className={display ? "hamburger-menu-true" : "hamburger-menu-false"}>
        <div className="hamburger-menu-line">
          <AiOutlineProfile color="white" fontSize="1.5em" />
          About
        </div>
        <div className="hamburger-menu-line">
          <SiBmcsoftware color="white" fontSize="1.5em" />
          Services
        </div>
        <div className="hamburger-menu-line">
          <BsBlockquoteLeft color="white" fontSize="1.5em" />
          Blogs
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
