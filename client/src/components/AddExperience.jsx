import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import PropTypes from "prop-types";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddExperience = ({ onInputChange, experience }) => {
  return (
    <form>
      <div className="p-4 bg-white rounded-lg shadow-sm space-y-8">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">Job Title</label>
          <input
            type="text"
            required
            className="mt-1 border border-gray-300 rounded-lg p-2 shadow-sm focus:outline-2 focus:outline-gray-500 font-semibold"
            placeholder="Frontend Developer"
            value={experience.jobTitle}
            onChange={(e) =>
              onInputChange(experience.id, "jobTitle", e.target.value)
            }
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700">
              Organization/Company
            </label>
            <input
              type="text"
              required
              className="mt-1 border border-gray-300 rounded-lg p-2 shadow-sm focus:outline-2 focus:outline-gray-500 font-semibold"
              placeholder="Google"
              value={experience.organization}
              onChange={(e) =>
                onInputChange(experience.id, "organization", e.target.value)
              }
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700">City</label>
            <input
              type="text"
              required
              className="mt-1 border border-gray-300 rounded-lg p-2 shadow-sm focus:outline-2 focus:outline-gray-500 font-semibold"
              placeholder="New York"
              value={experience.city}
              onChange={(e) =>
                onInputChange(experience.id, "city", e.target.value)
              }
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700">
              Start Date
            </label>
            <DatePicker
              selected={
                experience.startDate ? new Date(experience.startDate) : null
              }
              onChange={(date) =>
                onInputChange(experience.id, "startDate", date)
              }
              dateFormat="yyyy-MM"
              showMonthYearPicker
              className="border border-gray-300 rounded-lg p-2 shadow-sm focus:outline-2 focus:outline-gray-500 font-semibold"
              placeholderText="YYYY/MM"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700">
              End Date
            </label>
            <DatePicker
              selected={
                experience.endDate ? new Date(experience.endDate) : null
              }
              onChange={(date) => onInputChange(experience.id, "endDate", date)}
              className="border border-gray-300 rounded-lg p-2 shadow-sm focus:outline-2 focus:outline-gray-500 font-semibold"
              placeholderText="YYYY/MM"
              disabled={experience.currentlyWorking} // Disable if currently working
            />
          </div>
        </div>

        <div className="flex items-center mt-4">
          <input
            type="checkbox"
            checked={experience.currentlyWorking}
            onChange={() =>
              onInputChange(
                experience.id,
                "currentlyWorking",
                !experience.currentlyWorking
              )
            }
            className="mr-2"
          />
          <label className="text-sm font-medium text-gray-700">
            Currently Working Here
          </label>
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700">Summary</label>
          <ReactQuill
            theme="snow"
            value={experience.summary}
            onChange={(value) => onInputChange(experience.id, "summary", value)}
            modules={{
              toolbar: [["bold", "italic", "underline"], ["link"]],
            }}
            placeholder="Describe your experience"
            className="custom-quill-editor mb-16"
          />
        </div>
      </div>
    </form>
  );
};

AddExperience.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  experience: PropTypes.object.isRequired,
};

export default AddExperience;
