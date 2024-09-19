import { useState } from "react";

function JobApplicationForm() {
  const [formData, setFormData] = useState({
    idProof: null,
    birthProof: null,
    casteCertificate: null,
    tenthCertificate: null,
    twelfthCertificate: null,
    graduateCertificate: null,
    postgraduateCertificate: null,
  });

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic (e.g., sending formData to an API)
    console.log(formData);
  };

  return (
    <div className="min-h-screen w-full p-6 flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className=" w-full p-8 bg-white rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Add Your Documnents
        </h2>

        <div className="mb-4">
          <label
            htmlFor="idProof"
            className="block text-gray-700 font-medium mb-2"
          >
            Identification Proof:
          </label>
          <input
            type="file"
            id="idProof"
            name="idProof"
            accept=".pdf,.jpg,.jpeg,.png"
            onChange={handleFileChange}
            required
            className="block w-full text-gray-700 border border-gray-300 rounded-md p-2"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="birthProof"
            className="block text-gray-700 font-medium mb-2"
          >
            Birth Proof:
          </label>
          <input
            type="file"
            id="birthProof"
            name="birthProof"
            accept=".pdf,.jpg,.jpeg,.png"
            onChange={handleFileChange}
            required
            className="block w-full text-gray-700 border border-gray-300 rounded-md p-2"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="casteCertificate"
            className="block text-gray-700 font-medium mb-2"
          >
            Caste/Category Certificate:
          </label>
          <input
            type="file"
            id="casteCertificate"
            name="casteCertificate"
            accept=".pdf,.jpg,.jpeg,.png"
            onChange={handleFileChange}
            required
            className="block w-full text-gray-700 border border-gray-300 rounded-md p-2"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="tenthCertificate"
            className="block text-gray-700 font-medium mb-2"
          >
            10th Certificate:
          </label>
          <input
            type="file"
            id="tenthCertificate"
            name="tenthCertificate"
            accept=".pdf,.jpg,.jpeg,.png"
            onChange={handleFileChange}
            required
            className="block w-full text-gray-700 border border-gray-300 rounded-md p-2"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="twelfthCertificate"
            className="block text-gray-700 font-medium mb-2"
          >
            12th Certificate:
          </label>
          <input
            type="file"
            id="twelfthCertificate"
            name="twelfthCertificate"
            accept=".pdf,.jpg,.jpeg,.png"
            onChange={handleFileChange}
            required
            className="block w-full text-gray-700 border border-gray-300 rounded-md p-2"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="graduateCertificate"
            className="block text-gray-700 font-medium mb-2"
          >
            Graduate Certificate:
          </label>
          <input
            type="file"
            id="graduateCertificate"
            name="graduateCertificate"
            accept=".pdf,.jpg,.jpeg,.png"
            onChange={handleFileChange}
            required
            className="block w-full text-gray-700 border border-gray-300 rounded-md p-2"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="postgraduateCertificate"
            className="block text-gray-700 font-medium mb-2"
          >
            Postgraduate Certificate:
          </label>
          <input
            type="file"
            id="postgraduateCertificate"
            name="postgraduateCertificate"
            accept=".pdf,.jpg,.jpeg,.png"
            onChange={handleFileChange}
            required
            className="block w-full text-gray-700 border border-gray-300 rounded-md p-2"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md transition duration-300"
        >
          Upload Documents
        </button>
      </form>
    </div>
  );
}

export default JobApplicationForm;
