// import Hero from "./pages/app/hero/Hero";
// import Nav from "./components/nav/Nav";
// import Courses from "./pages/app/courses/Courses";
// import Details from "./pages/app/details/Details";

// import { createBrowserRouter, RouterProvider } from "react-router-dom";

// function App() {
//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <Nav />,
//       children: [
//         { index: true, element: <Hero /> },
//         {
//           path: "courses",
//           element: <Courses />,
//           children: [
//             { index: true, element: <Courses /> },
//             { path: ":courseId", element: <Details /> },
//           ],
//         },
//       ],
//     },
//   ]);

//   return (
//     <div className="App">
//       <RouterProvider router={router} />
//     </div>
//   );
// }

// export default App;




import Hero from "./pages/app/hero/Hero";
import Nav from "./components/nav/Nav";
import Courses from "./pages/app/courses/Courses";
import Details from "./pages/app/details/Details";
import Learn from "./pages/app/learn/Learn";
import Chapter from "./pages/app/chapter/Chapter";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Nav />,
      children: [
        { index: true, element: <Hero /> },
        {
          path: "courses",
          element: <Outlet />, // Outlet renders nested child routes
          children: [
            { index: true, element: <Courses /> },
            { path: ":courseId", element: <Details /> },
          ],
        },
        {
          path: "learn/:courseId",
          element: <Learn/>,
          children: [
            // { index: true, element: <Learn /> },
            { path: "chapter/:chapterId", element: <Chapter /> }
          ]
        },

      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;