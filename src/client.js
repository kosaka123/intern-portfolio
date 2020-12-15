import sanityClient from "@sanity/client";

//project id from studio file in sanity.json
// or manage.sanity.io click on project and will show you projectId
export default sanityClient({
  projectId: "fyswo65a",
  dataset: "production",
});
