import AdminJobCard from "../componemts/AdminJobCard";

export default function AdminJobs() {
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
          <AdminJobCard />
        </div>
        <div className="flex justify-center w-full pb-4">
          <AdminJobCard />
        </div>
        <div className="flex justify-center w-full pb-4 ">
          <AdminJobCard />
        </div>
        <div className="flex justify-center w-full pb-4 ">
          <AdminJobCard />
        </div>
        <div className="flex justify-center w-full pb-4 ">
          <AdminJobCard />
        </div>
      </div>
    </div>
  );
}
