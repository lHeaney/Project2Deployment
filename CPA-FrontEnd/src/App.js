
import "./App.css";
import { BrowserRouter, Routes,  Route } from "react-router";
import { MainFrame } from "./Pages/MainFrame";
import {Login} from "./Pages/Login";
import {RecordSearch} from "./Pages/RecordSearch";
import {NewRecord} from "./Pages/NewRecord";
import { React } from "react";



function App() {
 
  

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainFrame/>}>
            <Route index element={<Login/>}/>
            <Route path="Login" element={<Login/>}/>
            <Route path="NewRecord" element={<NewRecord/>}/>
            <Route path="RecordSearch" element={<RecordSearch/>}/>
        </Route>
      </Routes>
    </BrowserRouter>  
    </>
  );
}

export default App;

