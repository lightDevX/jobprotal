import { useLoaderData } from "react-router";

const JobDetails = () => {
  const job = useLoaderData();

  console.log("Job Details:", job);

  return (
    <div>
      <form>
        <h1 className="mb-4 text-3xl font-bold">Job Details</h1>
        <div className="mb-4">
          <label className="mb-2 block text-sm font-bold text-gray-700">
            Job Title:
          </label>
          <input
            type="text"
            value={job.title}
            readOnly
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="mb-2 block text-sm font-bold text-gray-700">
            Company:
          </label>
          <input
            type="text"
            value={job.company}
            readOnly
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="mb-2 block text-sm font-bold text-gray-700">
            Location:
          </label>
          <input
            type="text"
            value={job.location}
            readOnly
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="mb-2 block text-sm font-bold text-gray-700">
            Description:
          </label>
          <textarea
            value={job.description}
            readOnly
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
          ></textarea>
        </div>
      </form>
    </div>
  );
};

export default JobDetails;
