import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import JobListing from "../components/JobListing";
import Spinner from "../components/Spinner";

const JobPage = () => {
  const {id} = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl = `/api/jobs/${id}`;
    const fetchJob = async () => {
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setJob(data);
      } catch (error) {
        console.log("Error fetching job", error);
      } finally {
        setLoading(false);
      }
    }
    fetchJob();
  }, [])
  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          Job page
        </h2>
          { loading ? <Spinner loading={loading} />  : 
            <JobListing key={id} job={ job }/> }
      </div>
    </section>
  )
}

export default JobPage