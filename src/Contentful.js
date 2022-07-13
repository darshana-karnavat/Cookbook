//import React from "react";
import { createClient } from "contentful";
//import { useContentful } from "contentful"

const useContentful = () => {
  const client = createClient({
    space: "9xsvx960kmqa",
    accessToken: "PO3ec9CZXL1SqLJITp8CL5CQyCV2augVdmj2icqLznw",
    host: "preview.contentful.com",
  });

  const getMenu = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "cookBook",
        select: "fields",
      });
      return entries;
    } catch (error) {
      console.log(error);
    }
  };
  getMenu();
};

export default useContentful;
