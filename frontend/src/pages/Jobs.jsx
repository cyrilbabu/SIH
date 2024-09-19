import JobCard from "../componemts/JobCard";

export default function Jobs() {
  return (
    <div className="w-full p-4">
      <div className="w-full pb-4">
        <h1 className="text-4xl font-bold ">All Jobs</h1>
      </div>
      <div className="w-full pb-4">
        <input
          placeholder="Search For Job"
          className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-gray-600 `}
        />
      </div>
      <div className="flex w-full justify-center flex-wrap">
        <div className="flex justify-center w-full pb-4 ">
          <JobCard />
        </div>
        <div className="flex justify-center w-full pb-4 ">
          <JobCard />
        </div>
        <div className="flex justify-center w-full pb-4 ">
          <JobCard />
        </div>
        <div className="flex justify-center w-full pb-4 ">
          <JobCard />
        </div>
        <div className="flex justify-center w-full pb-4 ">
          <JobCard />
        </div>
        <div className="flex justify-center w-full pb-4 ">
          <JobCard />
        </div>
        <div className="flex justify-center w-full pb-4 ">
          <JobCard />
        </div>
      </div>
    </div>
  );
}
