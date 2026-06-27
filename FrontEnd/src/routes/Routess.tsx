import {Route,Routes } from 'react-router-dom';
import Dashboard from "../pages/Dashbaord";
import NewAnalysis from '../components/NewAnalysis';
const Routess = () =>{

    return(
        <Routes>
            <Route path="/" element={<Dashboard/>} />
            <Route path="/newAnalysis" element={<NewAnalysis/>} />
        </Routes>
    )
};

export default Routess;