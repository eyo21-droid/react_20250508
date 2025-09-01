import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Homeview from './view/Homeview';
import Sub1 from './view/Sub1';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homeview />} />
        <Route path='/sub1' element={<Sub1 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
