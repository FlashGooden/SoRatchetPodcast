import React from "react";
import { FadeAndScale } from "../../utils/FadeAndScale";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import styles from "./NavigationContainer.module.scss";

export function NavigationContainer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const drawerComponent = () => {
    return (
      <Drawer colorScheme={"facebook"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <button type="button" aria-label="Close Menu" onClick={onClose}>
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
          <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
          <DrawerBody>
            <p>Some contents...</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    );
  };
  return (
    <nav id="nav">
      <div
        className={`${styles.chakraSlide} sm:hidden absolute flex bg-transparent top-0 right-0 mt-2 mb-2 z-20 justify-between mr-3 ml-3 text-white`}
      >
        <FadeAndScale>
          <>
            <button
              type="button"
              aria-label="Open Menu"
              className="nextra-hamburger -nx-mr-2 nx-rounded nx-p-2 active:nx-bg-gray-400/20 md:nx-hidden"
              onClick={onOpen}
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
            {drawerComponent()}
          </>
        </FadeAndScale>
      </div>
    </nav>
  );
}
