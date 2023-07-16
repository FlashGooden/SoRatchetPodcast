import React from "react";
import styles from "./PodcastSocial.module.scss";
import SocialMediaLinks from "../../SocialMediaLinks/SocialMediaLinks";
import { SlideInFromLeft } from "../../../utils/SlideInFromLeft";
import { BellIcon } from "@chakra-ui/icons";

function PodcastSocial() {
  return (
    <SlideInFromLeft>
      <div
        className={`${styles.podcastSocial} font-normal flex-1 bg-black bg-opacity-40 border border-opacity-50 rounded-lg`}
      >
        <div className={"p-4"}>
          <h2 className={`social-heading text-xl md:text-3xl flex-1 mb-5`}>
            &lsquo;Bringing You The REAL In A World Of FAKE&rsquo;
          </h2>
          <p
            className={`social-live text-sm md:text-3xl flex-1 text-white border-b-2 mb-7 border-white`}
          >
            <span>
              <BellIcon className="mr-1" />
            </span>
            Live Broadcast The First Wednesday Of Every Month @9PM ET
          </p>
          <div className="podcast-social__media mt-2 items-center inline-flex">
            <SocialMediaLinks />
          </div>
        </div>
      </div>
    </SlideInFromLeft>
  );
}

export default PodcastSocial;
