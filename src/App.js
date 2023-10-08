import React from 'react';
// components
import Loading from './components/Loading';
import Highlights from './components/Highlights';

const App = () => {
  return (
    <div>
      <Loading />
      <Highlights />
      <div className='h-[380px]'></div>
    </div>
  );
}

export default App;
