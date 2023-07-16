import React, { IframeHTMLAttributes } from "react";

interface CustomIframeAttributes
  extends IframeHTMLAttributes<HTMLIFrameElement> {
  allowtransparency?: string;
  "data-name": string;
}

const iframeProps: CustomIframeAttributes = {
  title: "SR Report: Keke do you love me ....... or Usher?",
  allowtransparency: "true", // Note the lowercase "t"
  height: "150",
  width: "100%",
  scrolling: "no",
  "data-name": "pb-iframe-player",
  src: "https://www.podbean.com/player-v2/?i=744fp-14543eb-pb&from=pb6admin&share=1&download=1&rtl=0&fonts=Palatino&skin=1b1b1b&font-color=ffffff&logo_link=episode_page&btn-skin=fb0584",
  loading: "lazy",
};
function PodbeanPlayer() {
  return (
    <div className="mt-24 sm:mt-8 mb-2 sm:w-3/4 lg:w-1/2">
      <iframe {...iframeProps}></iframe>
    </div>
  );
}

export default PodbeanPlayer;
