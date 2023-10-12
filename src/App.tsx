import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { ApplicationRouter } from './navigation';
import { ReduxContextProvider } from './modules/redux';

const App = () => {
  return (
    <BrowserRouter>
      <ReduxContextProvider>
        <ApplicationRouter />
      </ReduxContextProvider>
    </BrowserRouter>
  );
};

export default App;
