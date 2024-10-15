import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";

const AddEducation = () => {
  const [content, setContent] = useState("");

  const handleChange = (value) => {
    setContent(value);
  };
  return (
    <form>
      <div className="w-full p-4 bg-white rounded-lg shadow-sm space-y-8">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">School</label>
          <input
            type="text"
            className="mt-1 border border-gray-300 rounded-lg p-2 shadow-sm focus:outline-2 focus:outline-gray-500 font-semibold"
            placeholder="ABC School"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700">Degree</label>
            <input
              type="text"
              className="mt-1 border border-gray-300 rounded-lg p-2 shadow-sm focus:outline-2 focus:outline-gray-500 font-semibold"
              placeholder="Bachelor's"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700">City</label>
            <input
              type="text"
              className="mt-1 border border-gray-300 rounded-lg p-2 shadow-sm focus:outline-2 focus:outline-gray-500 font-semibold"
              placeholder="New York"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700">
              Start Date
            </label>
            <input
              type="date"
              className="mt-1 border border-gray-300 rounded-lg p-2 shadow-sm focus:outline-2 focus:outline-gray-500 font-semibold"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700">
              End Date
            </label>
            <input
              type="date"
              className="mt-1 border border-gray-300 rounded-lg p-2 shadow-sm focus:outline-2 focus:outline-gray-500 font-semibold"
            />
          </div>
          <div className="pt-6 flex items-center gap-1">
            <input type="checkbox" className="" />
            <label className="text-sm font-medium text-gray-700">
              I am currently studying here
            </label>
          </div>
        </div>
        <div>
          <label
            htmlFor="summary"
            className="text-sm font-medium text-gray-700"
          >
            Summary
          </label>
          <ReactQuill
            theme="snow"
            id="summary"
            name="summary"
            value={content}
            onChange={handleChange}
            modules={{
              toolbar: [["bold", "italic", "underline"], ["link"]],
            }}
            placeholder="Describe about yourself"
            className=" custom-quill-editor mb-16"
          />
        </div>
      </div>
    </form>
  );
};

export default AddEducation;
