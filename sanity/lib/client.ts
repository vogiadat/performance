import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId, useCdn, token } from "@/sanity/env";

export const readClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
  perspective: "published",
});

export const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
  perspective: "published",
});
