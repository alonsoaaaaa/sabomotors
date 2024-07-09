"use client";
import React from "react";
import { Button } from "./ui/button";
import { deleteStory } from "@/app/actions/actions";

function ClientButton({ story }: { story: StoryObject }) {
  // Force refresh the page
  return (
    <Button
      onClick={async () => {
        console.log("hoal");
        await deleteStory(story.id);
      }}
    >
      Eliminar
    </Button>
  );
}

export default ClientButton;
