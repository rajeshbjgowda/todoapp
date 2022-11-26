import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './containers/LandingPage';
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>

        <Routes>
          <Route path='/' element={<LandingPage />} />
        </Routes>
      </Provider>

    </div>
  );
}

export default App;
