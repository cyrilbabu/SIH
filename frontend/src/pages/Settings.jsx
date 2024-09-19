import React from "react";
import { useForm, useFieldArray } from "react-hook-form";

export default function Settings() {
  const { register, handleSubmit, control } = useForm();
  const {
    fields: skillsFields,
    append: addSkill,
    remove: removeSkill,
  } = useFieldArray({
    control,
    name: "skills",
  });
  const {
    fields: experienceFields,
    append: addExperience,
    remove: removeExperience,
  } = useFieldArray({
    control,
    name: "experience",
  });
  const {
    fields: educationFields,
    append: addEducation,
    remove: removeEducation,
  } = useFieldArray({
    control,
    name: "education",
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 p-4 bg-gray-50 shadow-lg rounded-lg  "
    >
      <h2 className="text-4xl font-bold text-gray-800">Update Profile</h2>

      {/* About Section */}
      <div>
        <label className="text-lg font-semibold text-gray-800">About</label>
        <textarea
          {...register("about")}
          placeholder="Write about yourself"
          className="mt-2 p-3 border border-gray-300 rounded-lg w-full text-gray-800 focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Contact Information */}
      <div>
        <label className="text-lg font-semibold text-gray-800">Phone</label>
        <input
          {...register("phone")}
          type="tel"
          placeholder="Phone number"
          className="mt-2 p-3 border border-gray-300 rounded-lg w-full text-gray-800 focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label className="text-lg font-semibold text-gray-800">Email</label>
        <input
          {...register("email")}
          type="email"
          placeholder="Email"
          className="mt-2 p-3 border border-gray-300 rounded-lg w-full text-gray-800 focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label className="text-lg font-semibold text-gray-800">LinkedIn</label>
        <input
          {...register("linkedin")}
          type="url"
          placeholder="LinkedIn Profile URL"
          className="mt-2 p-3 border border-gray-300 rounded-lg w-full text-gray-800 focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label className="text-lg font-semibold text-gray-800">GitHub</label>
        <input
          {...register("github")}
          type="url"
          placeholder="GitHub Profile URL"
          className="mt-2 p-3 border border-gray-300 rounded-lg w-full text-gray-800 focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Skills Section */}
      <div>
        <h3 className="text-xl font-semibold text-gray-800">Skills</h3>
        <div className="mt-4 grid grid-cols-2 gap-4">
          {skillsFields.map((skill, index) => (
            <div key={skill.id} className="flex items-center">
              <input
                {...register(`skills.${index}.name`)}
                placeholder="Skill name"
                className="p-3 border border-gray-300 rounded-lg w-full text-gray-800 focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                className="ml-4 bg-red-500 text-white px-4 py-2 rounded-lg"
                onClick={() => removeSkill(index)}
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg"
            onClick={() => addSkill({ name: "" })}
          >
            Add Skill
          </button>
        </div>
      </div>

      {/* Experience Section */}
      <div>
        <h3 className="text-xl font-semibold text-gray-800">Experience</h3>
        {experienceFields.map((experience, index) => (
          <div
            key={experience.id}
            className="mt-4 p-4 bg-gray-100 rounded-lg shadow-sm"
          >
            <input
              {...register(`experience.${index}.title`)}
              placeholder="Job Title"
              className="mt-2 p-3 border border-gray-300 rounded-lg w-full text-gray-800 focus:ring-2 focus:ring-blue-500"
            />
            <input
              {...register(`experience.${index}.company`)}
              placeholder="Company"
              className="mt-2 p-3 border border-gray-300 rounded-lg w-full text-gray-800 focus:ring-2 focus:ring-blue-500"
            />
            <input
              {...register(`experience.${index}.years`)}
              placeholder="Years"
              className="mt-2 p-3 border border-gray-300 rounded-lg w-full text-gray-800 focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="button"
              className="mt-2 bg-red-500 text-white px-4 py-2 rounded-lg"
              onClick={() => removeExperience(index)}
            >
              Remove Experience
            </button>
          </div>
        ))}
        <button
          type="button"
          className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg"
          onClick={() => addExperience({ title: "", company: "", years: "" })}
        >
          Add Experience
        </button>
      </div>

      {/* Education Section */}
      <div>
        <h3 className="text-xl font-semibold text-gray-800">Education</h3>
        {educationFields.map((education, index) => (
          <div
            key={education.id}
            className="mt-4 p-4 bg-gray-100 rounded-lg shadow-sm"
          >
            <input
              {...register(`education.${index}.degree`)}
              placeholder="Degree"
              className="mt-2 p-3 border border-gray-300 rounded-lg w-full text-gray-800 focus:ring-2 focus:ring-blue-500"
            />
            <input
              {...register(`education.${index}.institution`)}
              placeholder="Institution"
              className="mt-2 p-3 border border-gray-300 rounded-lg w-full text-gray-800 focus:ring-2 focus:ring-blue-500"
            />
            <input
              {...register(`education.${index}.years`)}
              placeholder="Years"
              className="mt-2 p-3 border border-gray-300 rounded-lg w-full text-gray-800 focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="button"
              className="mt-2 bg-red-500 text-white px-4 py-2 rounded-lg"
              onClick={() => removeEducation(index)}
            >
              Remove Education
            </button>
          </div>
        ))}
        <button
          type="button"
          className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg"
          onClick={() =>
            addEducation({ degree: "", institution: "", years: "" })
          }
        >
          Add Education
        </button>
      </div>

      <button
        type="submit"
        className="mt-6 w-full bg-green-600 text-white px-5 py-2 rounded-lg"
      >
        Update Profile
      </button>
    </form>
  );
}
