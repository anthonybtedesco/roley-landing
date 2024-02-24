import React from "react";
import DiscordIcon from "public/icons/svgs/discord";
import FacebookIcon from "public/icons/svgs/facebook";
import InstagramIcon from "public/icons/svgs/instagram";
import XIcon from "public/icons/svgs/x";

export const Media = () => {
  return (
    <div className="space-x-4">
      <button className="text-white">
        <a
          href="https://discord.gg/A7tgRMfTxA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <DiscordIcon />
        </a>
      </button>
      <button className="text-white">
        <a
          href="https://www.instagram.com/roley.me/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon />
        </a>
      </button>

      <button className="text-white">
        <a
          href="https://twitter.com/Roley_Me"
          target="_blank"
          rel="noopener noreferrer"
        >
          <XIcon />
        </a>
      </button>
    </div>
  );
};
