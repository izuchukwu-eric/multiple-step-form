import type { NextPage } from 'next'
import React, { useState } from "react"
import Stepper from '../components/Stepper'
import StepperControl from '../components/StepperControl'
import Account from '../components/steps/Account'
import Details from '../components/steps/Details'
import Final from '../components/steps/Final'
import { StepperContext } from '../context/StepperContext'


const Home: NextPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState<string>("");
  const [finalData, setFinalData] = useState<string[]>([]);

  const steps = [
    "Account Information",
    "Personal Details",
    "Complete"
  ]

  const displayStep = (step: any) => {
    switch(step) {
      case 1: 
        return <Account />
      case 2: 
        return <Details />
      case 3: 
        return <Final />
      default:
    }
  }

  const handleClick = (direction: string) => {
    let newStep = currentStep;

    direction === "next" ? newStep++ : newStep--;
    //check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  }

  return (
    <div className='md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-white'>
      {/**stepper */}
      <div className='container horizontal mt-5'>
        <Stepper 
          steps={steps}
          currentStep={currentStep}
        />

        {/**display components */}
        <div className='my-10 p-10'>
          <StepperContext.Provider value={{ userData, setUserData, finalData, setFinalData}}>
            {displayStep(currentStep)}
          </StepperContext.Provider>
        </div>

      </div>

      {/**navigation control */}
      <StepperControl 
        handleClick={handleClick}
        currentStep={currentStep}
        steps={steps}
      />

    </div>
  )
}

export default Home
