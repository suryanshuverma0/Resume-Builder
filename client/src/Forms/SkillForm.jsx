import PropTypes from "prop-types";
import FormTitle from "../components/FormTitle";
import { useState, useContext, useEffect } from "react";
import AddSkills from "../components/AddSkills";
import { IoIosAdd } from "react-icons/io";
import { AiOutlineDelete } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../contexts/AuthContext";
import Button from "../components/Button";
import ShowSkills from "../components/ShowSkills";

const SkillForm = ({ onItemClick }) => {
  const [skills, setSkills] = useState([
    {
      id: Date.now(),
      skill: "",
      level: "",
    },
  ]);

  const { logout, decodedToken } = useContext(AuthContext);

  const [skillsData, setSkillsData] = useState(null);

  const fetchSkills = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/api/get-skills-form-details",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (!response.status === 200) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      console.log("hi guys guess who i am", data);
      setSkillsData(data);
      
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (decodedToken) {
      fetchSkills();
    }
  }, []);

  const handleAddSkills = () => {
    setSkills([
      ...skills,
      {
        id: Date.now(),
        skill: "",
        level: "",
      },
    ]);
  };

  const handleInputChange = (id, field, value) => {
    setSkills((prevSkills) =>
      prevSkills.map((skill) =>
        skill.id === id ? { ...skill, [field]: value } : skill
      )
    );
  };

  const handleDeleteSkills = (id) => {
    setSkills((prevSkills) => prevSkills.filter((skill) => skill.id !== id));
  };

  const handleSave = async () => {
    console.log("skills data to send in backend", skills);

    try {
      const response = await fetch(
        "http://localhost:3000/api/create-skill-form",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({ skills }),
        }
      );

      const data = await response.json();
      console.log("data from that skills form", data);
      if (response.status === 201) {
        toast.success("Data saved successfully!", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        setSkills([
          {
            id: Date.now(),
            skill: "",
            level: "",
          },
        ]);
      } else if (response.status === 401) {
        toast.error("Data did not save. Please try again!", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });

        setTimeout(() => {
          logout();
        }, 1000);
      } else if (response.status === 500) {
        toast.error("Internal server error!", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      } else {
        toast.error("Error saving data", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        console.error("Error saving data");
      }
      console.log("I am data of education", data);
      console.log("Saving educations:", skills);
    } catch (error) {
      console.error("Error saving data:", error);
      toast.error("Error saving data!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

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

        <ul className="flex flex-col gap-3 items-center">
          {Array.isArray(skillsData) &&
            skillsData.map((data) => {
              return <ShowSkills key={data._id} value={data} />;
            })}
        </ul>

        <div className="mt-8">
          {skills.map((skill) => (
            <div key={skill.id} className="relative">
              <AddSkills skill={skill} onInputChange={handleInputChange} />
              <button
                onClick={() => handleDeleteSkills(skill.id)}
                className="absolute top-14 right-4 text-red-500 hover:text-red-700"
                aria-label="Delete education"
              >
                <AiOutlineDelete size={24} />
              </button>
            </div>
          ))}
        </div>

        <div
          onClick={handleAddSkills}
          className="mt-8 flex items-center text-lg gap-2 text-blue-400 font-semibold cursor-pointer hover:underline"
        >
          <span>
            <IoIosAdd />
          </span>
          <p>Add Skills</p>
        </div>

        <div className="m-8 flex justify-end">
          <Button text="Save" type="button" onClick={handleSave} />
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
      <ToastContainer />
    </>
  );
};
SkillForm.propTypes = {
  onItemClick: PropTypes.func.isRequired,
};
export default SkillForm;
