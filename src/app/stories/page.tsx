import React from "react";
// import { storiesLinks } from "@/utils/data";
import prisma from "@/libs/db";
import Header from "@/components/header";
async function StoriesPage() {
  let storiesLinks = await prisma.PostLinks.findMany();
  console.log("STORIES LINK", storiesLinks);
  return (
    <div>
      <Header />
      <h1 className="mt-3 text-3xl text-yellow-500 text-center font-bold">
        Conóce las historias de nuestros clientes
      </h1>
      <div className="flex flex-wrap justify-center">
        <script
          async
          defer
          src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2"
        ></script>

        {storiesLinks.map((link: { url: string }) => {
          return (
            <div key={link.url} className="m-4">
              <iframe
                src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(
                  link.url
                )}&show_text=false`}
                width="400"
                height="800"
                style={{ border: "none", overflow: "hidden" }}
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
              ></iframe>
            </div>
          );
        })}
        {/* <div className="fb-video" data-href="https://www.facebook.com/facebook/videos/10153231379946729/" data-width="500" data-show-text="false">
    <div className="fb-xfbml-parse-ignore">
      <blockquote cite="https://www.facebook.com/facebook/videos/10153231379946729/">
        <a href="https://www.facebook.com/facebook/videos/10153231379946729/">How to Share With Just Friends</a>
        <p>How to share with just friends.</p>
        Posted by <a href="https://www.facebook.com/facebook/">Facebook</a> on Friday, December 5, 2014
      </blockquote>
    </div>
  </div> */}
      </div>
    </div>
  );
}

export default StoriesPage;
