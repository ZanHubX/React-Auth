import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../page/LoginPage";
import SignupPage from "../page/SignupPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginPage />,
    },
    {
        path: "/signup",
        element: <SignupPage />,
    },
]);
export default router;