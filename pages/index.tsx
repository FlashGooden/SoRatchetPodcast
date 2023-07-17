import React, { useRef } from "react";
import Head from "next/head";
import Script from "next/script";
import { HeroContainer } from "../components/HeroContainer/HeroContainer";
import Episodes from "../components/EpisodeContainer/Episodes/Episodes";
import PodbeanPlayer from "../components/PodbeanPlayer/PodbeanPlayer";
import Support from "../components/Support/Support";

export default function Home() {
  // const [isLargerThan640] = useMediaQuery("(min-width: 640px)", {
  //   ssr: true,
  //   fallback: false, // return false on the server, and re-evaluate on the client side
  // });

  const episodesRef = useRef(null);
  const donateRef = useRef(null);

  const scrollToEpisodes = () => {
    episodesRef.current !== null &&
      (episodesRef.current as HTMLElement).scrollIntoView({
        behavior: "smooth",
      });
  };

  const scrollToDonate = () => {
    donateRef.current !== null &&
      (donateRef.current as HTMLElement).scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <div>
      <Script
        src="https://open.spotify.com/embed-podcast/iframe-api/v1"
        async
      ></Script>
      {/*<Script src="https://storage.ko-fi.com/cdn/scripts/overlay-widget.js"></Script>*/}
      <Head>
        <title>
          The Sophisticatedly Ratchet Podcast - Giving the real in a world of
          fake
        </title>
        <meta
          name="The Sophisticatedly Ratchet Podcast"
          content="The Sophisticatedly Ratchet Podcast"
        />
        <link rel="icon" href="/images/SoRatchetIcon.jpeg" />
      </Head>

      <main className="relative min-h-screen min-w-screen flex flex-col items-center bg-black">
        <HeroContainer
          scrollToEpisodes={scrollToEpisodes}
          scrollToDonate={scrollToDonate}
        />
        <PodbeanPlayer />
        <Episodes episodesRef={episodesRef} />
        <Support donateRef={donateRef} />
      </main>

      <footer className=""></footer>
    </div>
  );
}
