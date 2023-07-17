import React from "react";
import Image from "next/image";
import Link from "next/link";

const extractNumberFromString = (string: string) => {
  return string.replace(/\D/g, "");
};

const episodeThumbnails = [
  {
    episode: "episode-134.png",
    link: "https://thesrpodcast.podbean.com/e/pon-taught-me-pt-3/",
  },
  {
    episode: "episode-135.png",
    link: "https://thesrpodcast.podbean.com/e/toxic-masculinity/",
  },
  {
    episode: "episode-136.png",
    link: "https://thesrpodcast.podbean.com/e/i-may-destroy-you/",
  },
  {
    episode: "episode-137.png",
    link: "https://thesrpodcast.podbean.com/e/sr-report-may-2023/",
  },
  {
    episode: "episode-138.png",
    link: "https://thesrpodcast.podbean.com/e/sorry-not-sorry/",
  },
  {
    episode: "episode-139.png",
    link: "https://thesrpodcast.podbean.com/e/current-events-june-2023/",
  },
];

function Episodes({ episodesRef }: { episodesRef: React.Ref<HTMLElement> }) {
  return (
    <section id="episodes" ref={episodesRef}>
      <h2 className="mt-20 sm:mt-24 sm:text-2xl text-center mb-10">
        Latest Episodes
      </h2>
      <div className="episodes-container grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {episodeThumbnails.map(({ episode, link }, index) => (
          <div key={index} className="mx-auto">
            <Link href={link}>
              <Image
                src={`/images/Episode-Thumbnails/${episode}`}
                alt={`Episode ${extractNumberFromString(episode)} thumbnail`}
                width={400}
                height={400}
              />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Episodes;
