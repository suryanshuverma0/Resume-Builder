import PropTypes from "prop-types";
import FormTitle from "../components/FormTitle";

const SkillForm = ({onItemClick}) => {
  return (
    <>
       <div className="h-[1000px] overflow-y-auto">
        <div className="pl-4">
          <FormTitle
            title="Skills"
            description="Only include releavant skills which you are confident of.
"
          />
        </div>
        <div className="flex justify-between items-center p-4 my-4">
          <button
            className="bg-white hover:bg-neutral-800 hover:text-white transition-colors delay-100 border-black border-2 text-black text-sm py-2 px-4 rounded"
            onClick={() => onItemClick("projects")}
          >
            Back
          </button>

          <button
            className="bg-neutral-900 hover:bg-neutral-800 text-white text-sm py-2 px-4 rounded transition-colors delay-100"
            onClick={() => onItemClick("achievements")}
          >
            Continue to Achievements
          </button>
        </div>
      </div>    
    </>
  )
}
SkillForm.propTypes = {
  onItemClick: PropTypes.func.isRequired,
}
export default SkillForm
