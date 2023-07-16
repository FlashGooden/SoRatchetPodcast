import React, { useEffect } from "react";

declare global {
  interface Window {
    onSpotifyIframeApiReady: (IFrameAPI: any) => void;
  }
}

export default function Episodes() {
  useEffect(() => {
    window.onSpotifyIframeApiReady = (IFrameAPI) => {
      console.log("hello");
      const element = document.getElementById("embed-iframe");
      const options = {
        width: "60%",
        height: "200",
        color: "blue",
        uri: "spotify:episode:1x8BWkVrCYulHreLBrVtzk",
      };
      const callback = (EmbedController: any) => {
        console.log(EmbedController);
        document.querySelectorAll(".episode").forEach((episode: any) => {
          episode.addEventListener("click", () => {
            // click event handler logic goes here
            EmbedController.loadUri(episode.dataset.spotifyId);
          });
        });
      };
      IFrameAPI.createController(element, options, callback);
    };
    console.log(window);
  });
  return (
    <>
      <div>
        <iframe
          src="https://open.spotify.com/embed/episode/1x8BWkVrCYulHreLBrVtzk?utm_source=generator"
          allowFullScreen
          allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture;"
        ></iframe>
      </div>
      <div id="embed-iframe"></div>
      <div className="episodes">
        <button
          className="episode"
          data-spotify-id="spotify:episode:7makk4oTQel546B0PZlDM5"
        >
          My Path to Spotify: Women in Engineering
        </button>

        <button
          className="episode"
          data-spotify-id="spotify:episode:43cbJh4ccRD7lzM2730YK3"
        >
          What is Backstage?
        </button>

        <button
          className="episode"
          data-spotify-id="spotify:episode:6I3ZzCxRhRkNqnQNo8AZPV"
        >
          Introducing Nerd Out@Spotify
        </button>
      </div>
    </>
  );
}
