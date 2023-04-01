import Link from "next/link";
import React, { Fragment } from "react";
import { FadeAndScale } from "../../utils/fadeAndScale";

const navLinks = [
  { text: "Home", href: "" },
  { text: "Episodes", href: "" },
  { text: "About", href: "" },
  { text: "Bio", href: "" },
  { text: "Shop", href: "" },
  { text: "Contact", href: "" },
];

const NavLink = ({ text, href }: { text: string; href: string }) => {
  return (
    <FadeAndScale>
      <Link className="duration-300 hover:text-pink-950" href={href}>
        {text}
      </Link>
    </FadeAndScale>
  );
};

export const NavigationLinks = () => {
  return (
    <div className="hidden sm:flex mt-4 justify-around w-full px-6 max-w-7xl">
      {navLinks.map(({ text, href }, index) => (
        <Fragment key={index}>
          <NavLink text={text} href={href} />
        </Fragment>
      ))}
    </div>
  );
};
