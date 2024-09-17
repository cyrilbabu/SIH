import { useState } from "react";

const PostJob = () => {
  const [jobData, setJobData] = useState({
    title: "",
    company: "",
    location: "",
    jobType: "",
    description: "",
    skills: "",
    experienceLevel: "",
    salaryMin: "",
    salaryMax: "",
    linkedinUrl: "",
  });

  const handleChange = (e) => {
    setJobData({ ...jobData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Job Data:", jobData);
    // Add form submission logic here (e.g., send to server)
  };

  return (
    <div className="p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full mx-auto p-4 bg-white shadow-md rounded"
      >
        <h2 className="text-xl font-bold mb-4">Add a Job</h2>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold">Job Title</label>
          <input
            type="text"
            name="title"
            placeholder="Enter the job title"
            value={jobData.title}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold">Company Name</label>
          <input
            type="text"
            name="company"
            placeholder="Enter the company name"
            value={jobData.company}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold">Location</label>
          <input
            type="text"
            name="location"
            placeholder="Enter the job location"
            value={jobData.location}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold">Job Type</label>
          <select
            name="jobType"
            value={jobData.jobType}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          >
            <option value="">Select job type</option>
            <option value="Full-Time">Full-Time</option>
            <option value="Part-Time">Part-Time</option>
            <option value="Contract">Contract</option>
            <option value="Internship">Internship</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold">
            Job Description
          </label>
          <textarea
            name="description"
            placeholder="Enter the job description"
            value={jobData.description}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            rows="4"
            required
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold">
            Skills Required
          </label>
          <input
            type="text"
            name="skills"
            placeholder="Enter the required skills (e.g., JavaScript, React)"
            value={jobData.skills}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold">
            Experience Level
          </label>
          <select
            name="experienceLevel"
            value={jobData.experienceLevel}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          >
            <option value="">Select experience level</option>
            <option value="Entry-Level">Entry-Level</option>
            <option value="Mid-Level">Mid-Level</option>
            <option value="Senior-Level">Senior-Level</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold">Salary Range</label>
          <div className="flex space-x-2">
            <input
              type="number"
              name="salaryMin"
              placeholder="Min salary"
              value={jobData.salaryMin}
              onChange={handleChange}
              className="w-1/2 px-3 py-2 border rounded"
              required
            />
            <input
              type="number"
              name="salaryMax"
              placeholder="Max salary"
              value={jobData.salaryMax}
              onChange={handleChange}
              className="w-1/2 px-3 py-2 border rounded"
              required
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold">LinkedIn URL</label>
          <input
            type="url"
            name="linkedinUrl"
            placeholder="Enter the LinkedIn job posting URL"
            value={jobData.linkedinUrl}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Add Job
        </button>
      </form>
    </div>
  );
};

export default PostJob;
