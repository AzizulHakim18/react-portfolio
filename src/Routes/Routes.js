import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home";
import Portfolio from "../Pages/Portfolio/Portfolio";
import Skills from "../Pages/Skills/Skills";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/skills",
                element: <Skills></Skills>
            },
            {
                path: "/projects",
                element: <Portfolio></Portfolio>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            },
        ]
    }
])