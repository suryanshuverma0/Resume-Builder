import PropTypes from "prop-types";
import FormTitle from "../components/FormTitle";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";
// import { useState } from "react";
// import { IoIosAdd } from "react-icons/io";
// import AddSocialMedia from "../components/AddSocialMedia";

const AboutForm = ({ onItemClick }) => {
  // const [content, setContent] = useState("");
  // const [addSocialMedia, setAddSocialMedia] = useState([]);
  // const [showSocialMedia, setShowSocialMedia] = useState(false);

  // const handleAddSocialMedia = () => {
  //   setAddSocialMedia([...addSocialMedia, { id: Date.now(), link: "" }]);
  //   setShowSocialMedia(true);
  // };

  // const handleChange = (value) => {
  //   setContent(value);
  // };

  return (
    <div className="h-[1000px] overflow-y-auto">
      <div className="pl-4">
        <FormTitle
          title="About yourself"
          description="Fill your primary information"
        />
      </div>

      <div className="flex justify-between items-center p-4">
        <button
          className="bg-white hover:bg-neutral-800 hover:text-white transition-colors delay-100 border-black border-2 text-black text-sm py-2 px-4 rounded"
          onClick={() => onItemClick("template")}
        >
          Back
        </button>

        <button
          className="bg-neutral-900 hover:bg-neutral-800 text-white text-sm py-2 px-4 rounded transition-colors delay-100"
          onClick={() => onItemClick("education")}
        >
          Continue to Education
        </button>
      </div>
    </div>
  );
};

AboutForm.propTypes = {
  onItemClick: PropTypes.func.isRequired, // Make it required if necessary
};

export default AboutForm;
