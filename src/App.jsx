import { Route, Routes } from "react-router-dom";
import { Navigation } from "./components/navigation";
import JsonData from './data/data.json'
import "./App.css";
import { Home } from "./components/home";
import Login from "./components/Login";
import Register from "./components/Register";
import { useState } from "react";
import { useEffect } from "react";


// export const scroll = new SmoothScroll('a[href*="#"]', {
//   speed: 1000,
//   speedAsDuration: true,
// });

const App = () => {
  const [data,setData]= useState({})
  useEffect(() => {
    setData(JsonData);
  }, []);

  
// console.log(JsonData["Programming-Languages"].Beginners);
  return (
    <div>
      <Navigation data={data.ProgrammingLanguages} />
      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register  data={data.Country}/>}/>
      </Routes>
      
      {/*  */}
    </div>
  );
};

export default App;
