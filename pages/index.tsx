import Head from "next/head";
import Image from "next/image";
import { NavigationLinks } from "../components/NavigationLinks/NavigationLinks";
import NavigationContainer from "../components/NavigationContainer/NavigationContainer";
import heroPic from "../public/images/trap-museum.jpeg";
import banditPic from "../public/images/bandit-pic.jpg";
import { motion } from "framer-motion";
import HeroImage from "../components/HeroImage/HeroImage";

export default function Home() {
  return (
    <div className="bg-pink-950 py-1 px-4">
      <Head>
        <title>
          The Sophisticatedly Ratchet Podcast - Giving the real in a world of
          fake
        </title>
        <meta
          name="The Sophisticatedly Ratchet Podcast"
          content="The Sophisticatedly Ratchet Podcast"
        />
        <link rel="icon" href="/SoRatchetIcon.jpeg" />
      </Head>

      <main className="min-h-screen mt-5 flex flex-col items-center relative px-4 bg-black border border-gray-400 shadow-lg rounded-lg p-4">
        <NavigationContainer />
        <h1 className="text-3xl text-center mt-9">
          The Sophisticatedly Ratchet Podcast
        </h1>

        <NavigationLinks />
        <HeroImage />
      </main>

      <footer className=""></footer>
    </div>
  );
}
