// components/InstagramEmbed.tsx
"use client";
import { useEffect } from "react";

export default function InstagramEmbed({ link }: { link: string }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div
      className="my-10"
      dangerouslySetInnerHTML={{
        __html: `
          <blockquote class="instagram-media" data-instgrm-permalink="${link}" data-instgrm-version="14"></blockquote>
        `,
      }}
    />
  );
}
