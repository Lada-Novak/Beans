import { createBrowserRouter } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Beans from "./pages/Beans";
import Facts from "./pages/Fatcs";
import About from "./pages/About";
import Recipe from "./pages/Recipe";
import Combinations from "./pages/Combinations";
import History from "./pages/History";
import Review from "./pages/Review";
import BeanPage from "./pages/BeanPage";
import Layout from "./components/Layout";
import Loader from "./components/Loader";

const router = createBrowserRouter([
  {
    path : "/Beans",
    element : <Layout/>,
    loader: Loader,
    children : [
      {index : true, element: <Home />},
      {path: "facts", element: <Facts />},
      {path: "recipe", element: <Recipe />},
      {path: "сombinations", element: <Combinations />},
      {path: "history", element: <History />},
      {path: "about", element: <About />},
      {path: "review", element: <Review />},
      {path: "beans", element: <Beans />},
      {path: "bean/:id", element: <BeanPage />},
      {path: "*", element: <NotFound />},
    ]
  }

]);

export default router;