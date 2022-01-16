import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "b9r0murt",
  apiVersion: '2021-08-31',
  dataset: "production",
  useCdn: true,
});
