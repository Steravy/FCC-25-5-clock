import { Fragment } from 'react';
import Navbar from './components/navbar/Navbar';
import ClockFrame from './components/ClockFrame';

function Home() {


  return (

    <Fragment>
      <Navbar />

      <main className='pt-20 sm:pt-36 ' >
        <ClockFrame />
      </main>
    </Fragment>
  )
}

export default Home;