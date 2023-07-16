import Link from "next/link";
import React, { Fragment } from "react";
import { FadeAndScale } from "../../utils/FadeAndScale";

const navLinks = [
  { text: "Home", href: "" },
  { text: "Episodes", href: "" },
  // { text: "About", href: "" },
  { text: "Support", href: "" },
  // { text: "Bio", href: "/bio" },
  // { text: "Shop", href: "/shop" },
  // { text: "Contact", href: "/contact" },
];

type NavLinkProps = {
  text: string;
  href: string;
  scrollToEpisodes: () => void | false;
  scrollToDonate: () => void | false;
};

type NavigationLinksProps = {
  scrollToEpisodes: () => void;
  scrollToDonate: () => void | false;
};

const linkStyles =
  "duration-300 text-white text-base md:text-lg hover:text-pink-950";
const NavLink: React.FC<NavLinkProps> = ({
  text,
  href,
  scrollToEpisodes,
  scrollToDonate,
}) => {
  const isEpisodeLink = () => text === "Episodes";
  const isDonateLink = () => text === "Support";

  return (
    <FadeAndScale>
      {isEpisodeLink() ? (
        <button className={linkStyles} onClick={scrollToEpisodes}>
          {text}
        </button>
      ) : isDonateLink() ? (
        <button className={linkStyles} onClick={scrollToDonate}>
          {text}
        </button>
      ) : (
        <Link className={linkStyles} href={href}>
          {text}
        </Link>
      )}
    </FadeAndScale>
  );
};

export const NavigationLinks: React.FC<NavigationLinksProps> = ({
  scrollToEpisodes,
  scrollToDonate,
}) => {
  return (
    <nav className="hidden sm:flex mt-4 justify-around w-full px-6 max-w-7xl">
      {navLinks.map(({ text, href }, index) => (
        <Fragment key={index}>
          <NavLink
            text={text}
            href={href}
            scrollToEpisodes={scrollToEpisodes}
            scrollToDonate={scrollToDonate}
          />
        </Fragment>
      ))}
    </nav>
  );
};
