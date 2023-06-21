import FaceDd from "../FaceApi/FaceDd";
import FaceAi from "../Pages/FaceAi/FaceAi";
import About from "../Pages/Home/Section/About";
import Service from "../Pages/Service/Service";
import Login from "../Shared/Login/Login";
import Register from "../Shared/Register/Register";

const { createBrowserRouter } = require("react-router-dom");
const { default: Home } = require("../Pages/Home/Home");
const { default: Root } = require("./Root");

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/service",
          element: <Service />,
          loader : () =>  fetch ('https://hair-cut-recommendation-server.vercel.app/hair-service')
        },
        {
          path: "/face-ai",
          element: <FaceDd />,
        },
        {
          path: "/about-us",
          element: <About />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
      ],
    },
  ]);

export default router