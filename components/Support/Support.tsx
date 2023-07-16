import { Button, useDisclosure } from "@chakra-ui/react";
import React from "react";
import styles from "./Support.module.scss";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

declare global {
  /* eslint-disable no-unused-vars */
  interface Window {
    kofiWidgetOverlay: {
      draw: (
        id: string,
        options: {
          type: string;
          [key: string]: string | undefined;
        }
      ) => void;
    };
  }
}

type SupportProps = {
  donateRef: React.Ref<HTMLElement>;
};

export default function Support({ donateRef }: SupportProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <section
      id="support"
      className="flex flex-col relative justify-center align-middle h-full w-full mt-20 mb-10"
      ref={donateRef}
    >
      <h2 className="text-center sm:text-2xl mb-10">Support</h2>
      <Button className={styles.buttonStyles} onClick={onOpen}>
        Support The Tribe!
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Support the Tribe!</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <iframe
              id="kofiframe"
              src="https://ko-fi.com/soratchetpodcast/?hidefeed=true&widget=true&embed=true&preview=true"
              style={{
                margin: "auto",
                border: "none",
                width: "100%",
                padding: "4px",
              }}
              title="soratchetpodcast"
              height="712px"
            ></iframe>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <div
        className={`${styles.backgroundContainer} filter grayscale brightness-50 bg-trap_museum bg-cover bg-center h-full w-full`}
      ></div>
    </section>
  );
}
