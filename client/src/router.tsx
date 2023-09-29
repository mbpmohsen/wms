import {createBrowserRouter} from "react-router-dom";
import Login from "./page/login";
import PrimarySearchAppBar from "./component/Header";
import MainPage from "./page/main";

const router = createBrowserRouter([
    {
        path: "/",
        element: <><PrimarySearchAppBar/><MainPage /></>,
    },
    {
        path: "/login",
        element: <Login />,
    },
]);

export default router;
