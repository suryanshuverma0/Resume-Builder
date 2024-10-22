import FormTitle from "../components/FormTitle";
import { IoIosAdd } from "react-icons/io";
import { AiOutlineDelete } from "react-icons/ai";
import AddEducation from "../components/AddEducation";
import PropTypes from "prop-types";
import { useState, useContext, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../contexts/AuthContext";
import Button from "../components/Button";
import ShowEducationDetails from "../components/ShowEducationDetails";

const EducationForm = ({ onItemClick }) => {
  const [educations, setEducations] = useState([
    {
      id: Date.now(),
      school: "",
      degree: "",
      city: "",
      startDate: "",
      endDate: "",
      currentlyStudying: false,
    },
  ]);

  const [isEditing, setIsEditing] = useState(false);

  const [educationData, setEducationData] = useState(null);

  const [educationIdToUpdate, setEducationIdToUpdate] = useState(null);

  const { logout, decodedToken } = useContext(AuthContext);

  const fetchEducationData = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/api/get-education-form-details",
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
      setEducationData(data);
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  const getEducationDetail = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/get-education-detail/${id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      const data = await response.json();
      setEducations([
        {
          school: data.school,
          degree: data.degree,
          city: data.city,
          startDate: data.startDate,
          endDate: data.endDate,
          currentlyStudying: data.currentlyStudying,
        },
      ]);

      setEducationIdToUpdate(data._id);
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  useEffect(() => {
    if (decodedToken) {
      fetchEducationData();
    }
  }, []);

  const handleAddEducation = () => {
    setEducations([
      ...educations,
      {
        id: Date.now(),
        school: "",
        degree: "",
        city: "",
        startDate: "",
        endDate: "",
        currentlyStudying: false,
      },
    ]);
  };

  const handleInputChange = (id, field, value) => {
    setEducations((prevEducations) =>
      prevEducations.map((education) =>
        education.id === id ? { ...education, [field]: value } : education
      )
    );
  };

  const handleDeleteEducation = (id) => {
    setEducations((prevEducations) =>
      prevEducations.filter((education) => education.id !== id)
    );
  };

  const handleSave = async () => {
    const isValid = educations.every((education) => {
      const hasRequiredFields =
        education.school &&
        education.degree &&
        education.city &&
        education.startDate;
      const isEndDateValid = education.currentlyStudying || education.endDate;
      return hasRequiredFields && isEndDateValid;
    });

    if (!isValid) {
      toast.error("Please fill all the required fields and check your dates!", {
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

    try {
      const response = await fetch(
        "http://localhost:3000/api/create-education-form",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({ educations }),
        }
      );

      const data = await response.json();
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
        setEducations([
          {
            id: Date.now(),
            school: "",
            degree: "",
            city: "",
            startDate: "",
            endDate: "",
            currentlyStudying: false,
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

  const updateEducationData = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/update-education-form-details/${educationIdToUpdate}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(educations[0]),
        }
      );

      if (response.status !== 200) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      if (response.status === 200) {
        toast.success("Data updated successfully!", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
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
        setIsEditing(false);
        setEducations([
          {
            id: Date.now(),
            school: "",
            degree: "",
            city: "",
            startDate: "",
            endDate: "",
            currentlyStudying: false,
          },
        ]);
      }
    } catch (error) {
      console.error("Error updating education details:", error);
    }
  };

  const deleteeEducationDetails = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/delete-education-details/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const data = await response.json();

      if (response.status === 200) {
        toast.success("Data deleted successfully!", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      } else if (response.status === 401) {
        toast.error("Data did not delete. Please try again!", {
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
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="h-[1000px] overflow-y-auto">
      <div className="pl-4">
        <FormTitle
          title="Education"
          description="Fill your educational information"
        />
      </div>

      <ul className="flex flex-col gap-3 items-center">
        {educationData &&
          educationData.map((data) => {
            return (
              <ShowEducationDetails
                key={data._id}
                value={data}
                onEdit={getEducationDetail}
                onDelete={deleteeEducationDetails}
                isEditing={isEditing}
                setIsEditing={setIsEditing}
              />
            );
          })}
      </ul>

      <div className="mt-8">
        {educations.map((education) => (
          <div key={education.id} className="relative">
            <AddEducation
              education={education}
              onInputChange={handleInputChange}
            />
            <button
              onClick={() => handleDeleteEducation(education.id)}
              className="absolute top-4 right-4 text-red-500 hover:text-red-700"
              aria-label="Delete education"
            >
              <AiOutlineDelete size={24} />
            </button>
          </div>
        ))}
      </div>

      <div
        onClick={handleAddEducation}
        className="mt-8 flex items-center text-lg gap-2 text-blue-400 font-semibold cursor-pointer hover:underline"
      >
        <IoIosAdd />
        <p>Add Education</p>
      </div>

      <div className="m-8 flex justify-end">
        <Button
          text={isEditing ? "Update" : "Save"}
          type="button"
          onClick={isEditing ? () => updateEducationData() : () => handleSave()}
        />
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
      <ToastContainer />
    </div>
  );
};

EducationForm.propTypes = {
  onItemClick: PropTypes.func.isRequired,
};

export default EducationForm;
