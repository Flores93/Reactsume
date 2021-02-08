import React from 'react'

import { RootContext } from './context/RootContext'

import AppRouter from './routers/AppRouter'

function App() {

  return (
    <div className='ReactBackground'>
      <RootContext>
        <AppRouter />
      </RootContext>
    </div>
  );
}

export default App;
