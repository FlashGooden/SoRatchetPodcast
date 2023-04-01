import React from "react";
import { SocialIcon } from "react-social-icons";
import { useToggle } from "react-use";
import { FadeAndScale } from "../../utils/fadeAndScale";

export default function NavigationContainer() {
  const [closed, toggle] = useToggle(true);

  const openMenuHandler = () => {
    toggle(false);
  };

  const closeMenuHandler = () => {
    toggle(true);
  };

  return (
    <div className="sm:hidden flex fixed bg-black top-0 right-0 left-0 pt-2 pb-2 z-20 justify-between pr-3 pl-3">
      <div className="flex space-x-1">
        <SocialIcon network="instagram" style={{ height: 24, width: 24 }} />
        <SocialIcon network="facebook" style={{ height: 24, width: 24 }} />
        <SocialIcon network="twitter" style={{ height: 24, width: 24 }} />
      </div>
      <div>
        {closed ? (
          <FadeAndScale>
            <button
              type="button"
              aria-label="Open Menu"
              className="nextra-hamburger -nx-mr-2 nx-rounded nx-p-2 active:nx-bg-gray-400/20 md:nx-hidden"
              onClick={openMenuHandler}
            >
              <svg
                fill="none"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className=""
              >
                <g>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16"
                  ></path>
                </g>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 12h16"
                ></path>
                <g>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 18h16"
                  ></path>
                </g>
              </svg>
            </button>
          </FadeAndScale>
        ) : (
          <FadeAndScale>
            <button
              type="button"
              aria-label="Close Menu"
              onClick={closeMenuHandler}
            >
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6L6 18M6 6L18 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </FadeAndScale>
        )}
      </div>
    </div>
  );
}
