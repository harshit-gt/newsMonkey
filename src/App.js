import React, { useState } from 'react'
import Nabvar from './components/Nabvar'
import News from './components/News'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

export default function App() {
  const [currState] = useState({
    pageSize: 6,
    country: 'us',
  })
  return (
    <>
       
      {/* <News key="" pageSize={currState.pageSize} country={'in'} category={'sports'}/> */}
      <BrowserRouter>
        <Nabvar /> 
        <Routes>
          {/* <Route path="/" element={<Nabvar />} /> */}
          <Route path="/" element={<News key="1" pageSize={currState.pageSize} country={currState.country} category={'general'} />} />
          <Route path="/business" element={<News key="2" pageSize={currState.pageSize} country={currState.country} category={'business'} />} />
          <Route path="/entertainment" element={<News key="3" pageSize={currState.pageSize} country={currState.country} category={'entertainment'} />} />
          <Route path="/health" element={<News key="4" pageSize={currState.pageSize} country={currState.country} category={'health'} />} />
          <Route path="/science" element={<News key="5" pageSize={currState.pageSize} country={currState.country} category={'science'} />} />
          <Route path="/sports" element={<News key="6" pageSize={currState.pageSize} country={currState.country} category={'sports'} />} />
          <Route path="/technology" element={<News key="7" pageSize={currState.pageSize} country={currState.country} category={'technology'} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
