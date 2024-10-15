import PropTypes from "prop-types";
import FormTitle from "../components/FormTitle";
const ProjectForm = ({onItemClick}) => {
  return (
    <>
      <div className="h-[1000px] overflow-y-auto">
        <div className="pl-4">
          <FormTitle
            title="Projects"
            description="List your projects to showcase.
"
          />
        </div>
        <div className="flex justify-between items-center p-4 my-4">
          <button
            className="bg-white hover:bg-neutral-800 hover:text-white transition-colors delay-100 border-black border-2 text-black text-sm py-2 px-4 rounded"
            onClick={() => onItemClick("experience")}
          >
            Back
          </button>

          <button
            className="bg-neutral-900 hover:bg-neutral-800 text-white text-sm py-2 px-4 rounded transition-colors delay-100"
            onClick={() => onItemClick("skills")}
          >
            Continue to Skills
          </button>
        </div>
      </div>
    </>
  )
}

ProjectForm.propTypes = {
  onItemClick: PropTypes.func.isRequired,
}
export default ProjectForm
