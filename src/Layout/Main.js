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
          loader : () =>  fetch ('http://localhost:5000/hair-service')
        },
        {
          path: "/face-ai",
          element: <FaceAi />,
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