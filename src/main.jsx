// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import React, { StrictMode } from "react";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import About from "./components/About/About.jsx";
import Home from "./components/Home/Home.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Github, { githubInfoLoader } from "./components/Github/Github.jsx";
import User from "./components/User/User.jsx";

// const element = (
//   <>
//     <a href="http://google.com" target="_blank">
//       visit google
//     </a>
//   </>
// );

// const anotherUser = "chai aur react"

// const reactElement = React.createElement(
//   "a",
//   {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   "click me to visit google ",
//    <br></br>,anotherUser
// );

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       { path: "", element: <Home /> },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "contact",
//         element: <Contact />,
//       },
//       {
//         path:"github",
//         element:<Github/>
//       }
//     ],
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<ErrorPage/>} >
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="github" element={<Github />} loader={githubInfoLoader} />
      <Route path="user/:userid" element={<User />}
        // This loader function can be used to fetch data before rendering the component
      />
    </Route>
  ),
  {
    basename: "/reactCloneProject",
  }
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
