import { Input } from "@/components/ui/input";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { submitStory } from "@/app/actions/actions";

function AddStoryPage() {
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
        />
        {""}
        <Input type="submit" className="w-fit" value={"Subir"} />
      </form>
    </>
  );
}

export default AddStoryPage;
