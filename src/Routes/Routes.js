import Data from "../Pages/Data/Data";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../layout/Main");
const { default: Home } = require("../Pages/Home/Home");

const router = createBrowserRouter([{
    path:'/',
    element:<Main></Main>,
    children: [
        {
            path:'/',
            element: <Home></Home>
        },
        {
            path:'/data',
            element: <Data></Data>
        }
    ]
}]);

export default router;