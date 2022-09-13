import type { NextPage } from 'next'
import Stepper from '../components/Stepper'
import StepperControl from '../components/StepperControl'


const Home: NextPage = () => {
  return (
    <div className='md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-white'>
      {/**stepper */}
      <div className='container horizontal mt-5'>
        <Stepper />
      </div>
      {/**navigation control */}
      <StepperControl />

    </div>
  )
}

export default Home
