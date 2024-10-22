import PropTypes from "prop-types";
import FormTitle from "../components/FormTitle";
import { IoIosAdd } from "react-icons/io";
import { useState, useContext, useEffect } from "react";
import AddAchievements from "../components/AddAchievements";
import { AuthContext } from "../contexts/AuthContext";
import { AiOutlineDelete } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "../components/Button";
import ShowAchievementFormDetails from "../components/ShowAchievementFormDetails";

const AchievementForm = ({ onItemClick }) => {
  const { logout , decodedToken } = useContext(AuthContext);

  const [achievements, setAchievements] = useState([
    {
      id: Date.now(),
      title: "",
      summary: "",
      link: "",
    },
  ]);
  
  const [achievementData, setAchievementData] = useState([]);

  const fetchAchievementData = async () =>{
    try {
        const response = await fetch("http://localhost:3000/api/get-achievement-form-details",{
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`,
          },
        })

        if (!response.status === 200) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        console.log("I am data of achievement fetched from backend ", data);
        setAchievementData(data);
        console.log("I am achievement data state", achievementData);
    } catch (error) {
      console.log(error)
    }
  }

  const handleAddAchievements = () => {
    setAchievements([
      ...achievements,
      {
        id: Date.now(),
        title: "",
        summary: "",
        link: "",
      },
    ]);
  };

  useEffect(()=>{
    if(decodedToken){
      fetchAchievementData();
    }
  },[])

  const handleInputChange = (id, field, value) => {
    setAchievements((prevAchievements) =>
      prevAchievements.map((achievement) =>
        achievement.id === id ? { ...achievement, [field]: value } : achievement
      )
    );
  };

  const handleDeleteAchievements = (id) => {
    setAchievements((prevAchievements) =>
      prevAchievements.filter((achievement) => achievement.id !== id)
    );
  };

  const handleSave = async () => {
    if (achievements.length === 0) {
      toast.error("Please add projects to save!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }

    console.log("achievements", achievements);
    try {
      const response = await fetch(
        "http://localhost:3000/api/create-achievement-form",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({ achievements }),
        }
      );

      const data = await response.json();
      console.log("data from that achievements form", data);
      console.log("i want to see my response status now in achievement", response.status);
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
        setAchievements([
          {
            id: Date.now(),
            title: "",
            summary: "",
            link: "",
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
      } else if(response.status === 400) {
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
            title="Achievements"
            description="Include your key achievements and notable projects to enhance your profile."
          />
        </div>

        <ul className="flex flex-col gap-3 items-center">
      {achievementData &&
        achievementData.map((data) => {
          return <ShowAchievementFormDetails key={achievementData._id} value={data} />;
        })}
      </ul>

        <div className="mt-8">
          {achievements.map((achievement) => (
            <div key={achievement.id} className="relative">
              <AddAchievements
                achievement={achievement}
                onInputChange={handleInputChange}
              />
              <button
                onClick={() => handleDeleteAchievements(achievement.id)}
                className="absolute top-4 right-4 text-red-500 hover:text-red-700"
                aria-label="Delete experience"
              >
                <AiOutlineDelete size={24} />
              </button>
            </div>
          ))}
        </div>

        <div
          onClick={handleAddAchievements}
          className="mt-8 flex items-center text-lg gap-2 text-blue-400 font-semibold cursor-pointer hover:underline"
        >
          <span>
            <IoIosAdd />
          </span>
          <p>Add Achievements</p>
        </div>

        <div className="m-8 flex justify-end">
          <Button text="Save" type="button" onClick={handleSave} />
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
      <ToastContainer />
    </>
  );
};
AchievementForm.propTypes = {
  onItemClick: PropTypes.func.isRequired,
};
export default AchievementForm;
