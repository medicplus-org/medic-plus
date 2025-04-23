// UserSignup.jsx
import React, { useState } from "react";
import { StepperContext } from "../../../contexts/StepperContext";
import Stepper from "../../components/Stepper";
import StepperControl from "../../components/StepperControl";
import UserAccount from "../../components/steps/UserAccount";
import UserDetails from "../../components/steps/UserDetails";
import UserFinal from "../../components/steps/UserFinal";

const UserSignup = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState({});

  const steps = ["Account Information", "Personal Details", "Complete"];

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <UserAccount />;
      case 2:
        return <UserDetails />;
      case 3:
        return <UserFinal />;
      default:
        return null;
    }
  };

  const handleClick = (direction) => {
    let newStep = currentStep;

    if (direction === "next") {
      newStep++;
    } else {
      newStep--;
    }

    if (newStep > 0 && newStep <= steps.length) {
      setCurrentStep(newStep);
    }
  };

  return (
    <div className="md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-white">
      <div className="container horizontal mt-5">
        <Stepper steps={steps} currentStep={currentStep} />

        <div className="my-10 p-10">
          <StepperContext.Provider value={{ userData, setUserData }}>
            {displayStep(currentStep)}
          </StepperContext.Provider>
        </div>
      </div>

      {currentStep !== steps.length && (
        <StepperControl
          handleClick={handleClick}
          currentStep={currentStep}
          steps={steps}
        />
      )}
    </div>
  );
};

export default UserSignup;
