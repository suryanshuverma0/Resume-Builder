import { IoIosClose } from "react-icons/io";
import { useState } from "react";
const AddSocialMedia = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <>
      <form>
        <div className="grid grid-cols-12 gap-3">
          <div className="col-span-5 flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">
              Social Website
            </label>
            <select
              value={selectedOption}
              onChange={handleChange}
              className="mt-1 border border-gray-300 rounded-lg p-2 shadow-sm focus:outline-2 focus:outline-gray-500 font-semibold"
            >
              <option value="" disabled>
                Select an option
              </option>
              <option value="website">Website</option>
              <option value="facebook">Facebook</option>
              <option value="github">GitHub</option>
              <option value="linkedin">LinkedIn</option>
              <option value="instagram">Instagram</option>
              <option value="twitter">Twitter</option>
              <option value="quora">Quora</option>
              <option value="stackoverflow">Stack Overflow</option>
              <option value="others">Others</option>
            </select>
          </div>
          <div className="col-span-6 flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">Link</label>
            <input
              type="text"
              className="mt-1 border border-gray-300 rounded-lg p-2 shadow-sm focus:outline-2 focus:outline-gray-500 font-semibold"
            />
          </div>
          <div className="col-span-1 text-2xl pt-8 flex justify-center items-center">
            <button>
              {" "}
              <IoIosClose />
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddSocialMedia;
