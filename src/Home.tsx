import { Fragment } from 'react';
import Navbar from './components/navbar/Navbar';
import ClockFrame from './components/ClockFrame';

function Home() {


  return (

    <Fragment>
      <Navbar />

      <main className='pt-36 sm:pt-46 ' >
        <ClockFrame />
      </main>
    </Fragment>
  )
}

export default Home;