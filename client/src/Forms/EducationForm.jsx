import FormTitle from "../components/FormTitle";
import { IoIosAdd } from "react-icons/io";
import AddEducation from "../components/AddEducation";
import PropTypes from "prop-types";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineDelete } from "react-icons/ai";

const EducationForm = ({ onItemClick }) => {
  const [addEducation, setAddEducation] = useState([]);
  const [showEducation, setShowEducation] = useState(false);
  const [showEducationForm, setShowEducationForm] = useState(false);

  const handleShowEducationForm = () => {
    setShowEducationForm(!showEducationForm);
  };

  const handleAddEducation = () => {
    setAddEducation([
      ...addEducation,
      {
        id: Date.now(),
        school: "",
        degree: "",
        city: "",
        startDate: "",
        endDate: "",
      },
    ]);
    setShowEducation(true);
  };
  return (
    <>
      <div className="h-[1000px] overflow-y-auto">
        <div className="pl-4">
          <FormTitle
            title="Education"
            description="Fill your educational information"
          />
        </div>

        <div
          onClick={handleShowEducationForm}
          className="flex justify-between items-center gap-2 px-4"
        >
          <div>
            <h1>School/Institution</h1>
          </div>
          <div className="flex gap-2">
            <span>
              <IoIosArrowDown />
            </span>
            <span>
              <AiOutlineDelete />
            </span>
          </div>
        </div>

        <div className="mt-5">
          {showEducation &&
            addEducation.map((social) => <AddEducation key={social.id} />)}
        </div>

        {showEducationForm && <AddEducation />}

        <div
          onClick={handleAddEducation}
          className="flex items-center text-lg gap-2 text-blue-400 font-semibold cursor-pointer hover:underline"
        >
          <span>
            <IoIosAdd />
          </span>
          <p>Add Education</p>
        </div>

        <div className="flex justify-between items-center p-4 my-4 gap-8">
          <button
            className="bg-white hover:bg-neutral-800 hover:text-white transition-colors delay-100 border-black border-2 text-black text-sm py-2 px-4 rounded"
            onClick={() => onItemClick("about")}
          >
            Back
          </button>

          <button
            className="bg-neutral-900 hover:bg-neutral-800 text-white text-sm py-2 px-4 rounded transition-colors delay-100"
            onClick={() => onItemClick("experience")}
          >
            Continue to Experience
          </button>
        </div>
      </div>
    </>
  );
};
EducationForm.propTypes = {
  onItemClick: PropTypes.func.isRequired,
};

export default EducationForm;
