import { BrowserRouter, Route, Routes } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <LoginPage /> }/>
                <Route path="/register" element={ <RegisterPage />}/>
                <Route path="/lista" element={ <Listpage />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes