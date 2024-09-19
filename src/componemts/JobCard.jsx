export default function JobCard() {
  return (
    <div className="rounded flex overflow-hidden shadow-lg bg-white border w-full border-gray-200">
      <div className="px-4 pb-0 py-4 w-full">
        <div className="font-bold text-xl mb-2">Software Engineer</div>
        <p className="text-gray-700 text-base">Job Type: Full-time</p>
        <p className="text-gray-700 text-base">
          Eligibility: Bachelor&apos;s Degree in Computer Science
        </p>
        <p className="text-gray-700 text-base">Date Posted : 17/09/2024</p>
        <p className="text-gray-700 text-base">Last Date : 20/09/2024</p>
        <p className="text-gray-700 text-base">Salary : 30,000/Month</p>
        <p className="text-blue-600 text-base font-bold">Openings : 100</p>
        <p className="text-base text-green-600 font-bold">Applied : 57</p>
        <div className="   py-2 flex w-full justify-center">
          <div className="w-1/2">
            <button className="inline-block w-full mr-1 bg-green-600 rounded px-3 py-1 text-sm font-semibold text-white ">
              View
            </button>
          </div>
          <div className="w-1/2">
            <button className="inline-block w-full ml-1 bg-blue-600 rounded px-3 py-1 text-sm font-semibold text-white">
              Apply
            </button>
          </div>
        </div>
      </div>
      <div className="w-1/4 pr-2 flex justify-center items-center">
        <img src="/pngegg.png" />
      </div>
    </div>
  );
}
