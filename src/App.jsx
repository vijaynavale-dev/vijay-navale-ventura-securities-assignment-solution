import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./main.css";
import IpoList from "./pages/ipo-list";
import IpoDetail from "./pages/ipo-detail";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <IpoList />,
    },
    {
      path: "/ipo-detail",
      element: <IpoDetail />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
