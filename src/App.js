import React, { useCallback } from 'react';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import './App.css';
import particlesOptions from "./particles.json";
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Routes';

function App() {


    return (
        <div className='w-5/6 mx-auto'>

            <RouterProvider router={router}></RouterProvider>
        </div>
    );
}

export default App;
