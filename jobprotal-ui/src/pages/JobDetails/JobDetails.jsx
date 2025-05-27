import { useLoaderData } from "react-router";

const JobDetails = () => {
  const job = useLoaderData();

  console.log("Job Details:", job);

  return <div></div>;
};

export default JobDetails;
