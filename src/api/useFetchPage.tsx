import { useState, useEffect } from "react";
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "hngtneus",
  dataset: "production",
  useCdn: true,
  apiVersion: "2024-04-11",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: any) => {
  return builder.image(source).auto("format");
};

export const useFetchPage = (query: string, destName: string) => {
  const [page, setPage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await client.fetch(query);
        setPage(data);
      } catch (error) {
        setPage(require(`./backups/backup-${destName}.json`));
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query, destName]);

  if (!loading && page) {
    return page;
  }
};
