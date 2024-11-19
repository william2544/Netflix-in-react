import Home from "./pages/Home/Home";
import { Route,Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Player from "./pages/Player/Player";
export default function App() {
    return(
        <div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="/play/:id" element={<Player/>}/>
            </Routes>
            
        </div>
    )
};
