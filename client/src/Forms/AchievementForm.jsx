import PropTypes from "prop-types";
import FormTitle from "../components/FormTitle";
const AchievementForm = ({ onItemClick }) => {
  return (
    <>
      <div className="h-[1000px] overflow-y-auto">
        <div className="pl-4">
          <FormTitle
            title="Achievements"
            description="Include your key achievements and notable projects to enhance your profile."
          />
        </div>
        <div className="flex justify-between items-center p-4 my-4">
          <button
            className="bg-white hover:bg-neutral-800 hover:text-white transition-colors delay-100 border-black border-2 text-black text-sm py-2 px-4 rounded"
            onClick={() => onItemClick("skills")}
          >
            Back
          </button>

          <button
            className="bg-neutral-900 hover:bg-neutral-800 text-white text-sm py-2 px-4 rounded transition-colors delay-100"
            onClick={() => onItemClick("languages")}
          >
            Continue to Languages
          </button>
        </div>
      </div>
    </>
  );
};
AchievementForm.propTypes = {
  onItemClick: PropTypes.func.isRequired,
};
export default AchievementForm;
