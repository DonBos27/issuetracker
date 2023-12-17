"use client";

import { Button, Text, TextField } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import React from "react";

const NewIssuePage = () => {
  return (
    <div className="max-w-xl space-y-3">
      <TextField.Root>
        {/* <TextField.Slot></TextField.Slot> */}
        <TextField.Input placeholder="Title" />
      </TextField.Root>
      <SimpleMDE placeholder="Description…" />
      <Button>Submit New Issue</Button>
    </div>
  );
};

export default NewIssuePage;
