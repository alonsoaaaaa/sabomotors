import { Input } from "@/components/ui/input";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { submitStory } from "@/app/actions/actions";
import prisma from "@/libs/db";
import { Button } from "@/components/ui/button";
import { deleteStory } from "@/app/actions/actions";
import ClientButton from "@/components/client-button";
import ClientSubmit from "@/components/client-input";
async function AddStoryPage() {
  let stories: StoryObject[] = await prisma.PostLinks.findMany();
  console.log(stories);
  return (
    <>
      <Link href={"/dashboard"}>
        <ArrowLeftIcon size={40} color="blue" className="ml-[20vw] mt-2" />
      </Link>
      <form
        action={submitStory}
        className="flex flex-col justify-center items-center pt-10"
      >
        <h1 className="font-bold">Subir historia</h1>
        <Input
          type="text"
          placeholder="url:https://www.facebook.com/seminuevossabomotors/videos/etc"
          className="w-fit"
          name="story"
          id="facebook-url"
        />
        {""}
        <ClientSubmit />
      </form>
      <div className="flex flex-wrap px-3">
        {stories.map((story: StoryObject) => {
          return (
            <div key={story.url} className="flex flex-col px-3 items-center ">
              <iframe
                src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(
                  story.url
                )}&show_text=false`}
                width="400"
                height="700"
                style={{ border: "none", paddingBottom: 0 }}
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
              ></iframe>
              <ClientButton story={story} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default AddStoryPage;
