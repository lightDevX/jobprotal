import { useEffect, useState } from "react";

const HotJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    try {
      const fetchJobs = async () => {
        const response = await fetch("http://localhost:3000/jobs");
        const data = await response.json();
        setJobs(data);
      };

      fetchJobs();
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  }, []);

  return (
    <div>
      {jobs.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job) => (
            <div key={job.id} className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">{job.title}</h2>
                <p>{job.description}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Apply Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No hot jobs available at the moment.</p>
      )}
    </div>
  );
};

export default HotJobs;
