import React from "react";
import styles from "./PodcastPreview.module.scss";
import { Tag, TagLabel } from "@chakra-ui/tag";
import { CalendarIcon, TimeIcon } from "@chakra-ui/icons";
import { SlideInFromRight } from "../../../utils/SlideInFromRight";
import Link from "next/link";

function PodcastPreview() {
  return (
    <SlideInFromRight>
      <div className="podcast-preview flex-auto text-left bg-black bg-opacity-40 border border-opacity-50 rounded-lg">
        <div className={"p-4"}>
          <Tag
            size="lg"
            className={styles.podcastTag}
            variant={"outline"}
            borderRadius="full"
          >
            <TagLabel className={`text-xs`}>Comedy</TagLabel>
          </Tag>
          <h2
            className={`${styles.podcastTitle} text-pink-950 text-2xl md:text-4xl`}
          >
            <Link
              href={
                "https://thesrpodcast.podbean.com/e/sr-report-keke-do-you-love-me-or-usher/"
              }
            >
              Episode 149: SR Report: Keke do you love me ....... or Usher?
            </Link>
          </h2>
          <div className="podcast-meta">
            <span
              className={"text-xs text-white"}
              aria-label={"episode length: 2 hours"}
            >
              <TimeIcon className="mr-2" />
              1:22
            </span>
            <span className="text-xs text-white ml-5"> / </span>
            <time className="text-white text-xs ml-5" dateTime="2023-03-31">
              <span>
                <CalendarIcon className="mr-2" />
              </span>
              July 12, 2023
            </time>
          </div>
          <p className="podcast-description text-sm md:text-lg">
            Salutation, SR Tribe! Welcome, and thank you for coming back for
            another hearty serving of The Sophisticatedly Ratchet Podcast,
            giving the real in a world of fake. Get ready, Tribe, because the
            July SR Report is here!
          </p>
        </div>
      </div>
    </SlideInFromRight>
  );
}

export default PodcastPreview;
