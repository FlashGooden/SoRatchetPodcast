import React from "react";
import HeroImage from "../HeroImage/HeroImage";
import { NavigationLinks } from "../NavigationLinks/NavigationLinks";
import { NavigationContainer } from "../NavigationContainer/NavigationContainer";
import { useMediaQuery } from "@chakra-ui/react";
import PodcastSocial from "./PodcastSocial/PodcastSocial";
import PodcastPreview from "./PodcastPreview/PodcastPreview";
import { FadeAndScale } from "../../utils/FadeAndScale";
import styles from "./HeroContainer.module.scss";

type HeroContainerProps = {
  scrollToEpisodes: () => void;
  scrollToDonate: () => void;
};
export const HeroContainer: React.FC<HeroContainerProps> = ({
  scrollToEpisodes,
  scrollToDonate,
}) => {
  const [isLargerThan640] = useMediaQuery("(min-width: 640px)", {
    ssr: true,
    fallback: false, // return false on the server, and re-evaluate on the client side
  });

  return (
    <section
      id="hero-container"
      className={`${styles.heroContainer} relative max-h-48 lg:overflow-hidden`}
    >
      <HeroImage />
      <div className="hero-container__menu">
        {isLargerThan640 ? null : <NavigationContainer />}
      </div>
      <div className="text absolute w-full top-16 text-2xl font-black text-pink-950 flex flex-col items-center text-center subpixel-antialiased">
        <FadeAndScale>
          <h1 className={`sm:text-3xl text-white`}>
            The Sophisticatedly Ratchet Podcast
          </h1>
        </FadeAndScale>
        {isLargerThan640 ? (
          <NavigationLinks
            scrollToEpisodes={scrollToEpisodes}
            scrollToDonate={scrollToDonate}
          />
        ) : null}
        <div className="podcast-info sm:w-full lg:mt-24 xl:w-3/4 p-8 m-auto flex gap-6 items-center justify-around">
          {isLargerThan640 ? <PodcastSocial /> : null}
          <PodcastPreview />
        </div>
      </div>
    </section>
  );
};
