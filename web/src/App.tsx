

import React from "react";
import "./App.css";

import { Routes,Route,BrowserRouter } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import RegisterPage from "./pages/register/RegisterPage";
import {LoginPage}   from "./pages/login/LoginPage";



 export const App = () => {
        return (
   
            <BrowserRouter>
        <Routes>
            <Route path='/' element={<LoginPage/>}/>
            <Route path='/register' element={<RegisterPage/>}/>
            <Route path='/home' element={<HomePage/>}/>

        </Routes>
        </BrowserRouter>
     

  );

 } 
 
 export default App;

