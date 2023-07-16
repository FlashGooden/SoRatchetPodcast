import React from "react";
import { SocialIcon } from "react-social-icons";
import Link from "next/link";

export default function SocialMediaLinks() {
  return (
    <div className="flex space-x-4">
      <Link href="https://www.instagram.com/soratchetpodcast">
        <SocialIcon
          bgColor={"white"}
          network="instagram"
          style={{ height: 40, width: 40 }}
        />
      </Link>
      <Link href="https://www.facebook.com/profile.php?id=100091653923490">
        <SocialIcon
          bgColor={"white"}
          network="facebook"
          style={{ height: 40, width: 40 }}
        />
      </Link>
      <Link href="https://twitter.com/soratchetpod">
        <SocialIcon
          bgColor={"white"}
          network="twitter"
          style={{ height: 40, width: 40 }}
        />
      </Link>
      <Link href="https://www.youtube.com/channel/UCvIWxoE1085KGWH8OGb9nog">
        <SocialIcon
          bgColor={"white"}
          network="youtube"
          style={{ height: 40, width: 40 }}
        />
      </Link>
    </div>
  );
}
