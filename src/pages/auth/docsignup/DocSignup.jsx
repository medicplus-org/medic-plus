import React from "react";
import { useState } from "react";

import { StepperContext } from "../../../contexts/StepperContext.js";
// import Stepper from "../../components/Stepper";
import Stepper from "../../components/Stepper.jsx";
// import StepperControl from "../../components/StepperControl";
import StepperControl from "../../components/StepperControl.jsx";
// import Account from "../../components/steps/Account";
import Account from "../../components/steps/Account.jsx";
// import Details from "../../components/steps/Details";
import Details from "../../components/steps/Details.jsx";
// import Final from "../../components/steps/Final";
import Final from "../../components/steps/Final.jsx";

const DocSignup = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const [userData, setUserData] = useState({});
  const [finalData, setFinalData] = useState([]);

  const steps = ["Account Information", "Personal Details", "Complete"];

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <Account />;
      case 2:
        return <Details />;
      case 3:
        return <Final />;
      default:
    }
  };

  const handleClick = (direction) => {
    let newStep = currentStep;

    direction === "next" ? newStep++ : newStep--;
    //check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };
  return (
    <div className="md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-white">
      {/* stepper */}
      <div className="container horizontal mt-5">
        <Stepper steps={steps} currentStep={currentStep} />

        {/* display components */}
        <div className="my-10 p-10">
          <StepperContext.Provider
            value={{
              userData,
              setUserData,
              finalData,
              setFinalData,
            }}
          >
            {displayStep(currentStep)}
          </StepperContext.Provider>
        </div>
      </div>

      {/* display components */}

      {/* navigation controls */}
      {currentStep != steps.length && (
        <StepperControl
          handleClick={handleClick}
          currentStep={currentStep}
          steps={steps}
        />
      )}
    </div>
  );
};

export default DocSignup;
