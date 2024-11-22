import Home from "./pages/Home/Home";
import { Route,Routes, useNavigate } from "react-router-dom";
import Login from "./pages/Login/Login";
import Player from "./pages/Player/Player";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "./firebase";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function App() {

    const navigate=useNavigate()
    useEffect(()=>{
        onAuthStateChanged(auth,async (user)=>{
            if (user) {
                console.log('Logged in');
                navigate('/')
            }else{
                console.log('logged out');
                navigate('/login')
            }
        })
    },[])
    return(
        <div style={{ width: "100%", margin: "0", overflow: "hidden", backgroundColor: "red", padding: "0" }}>
            <ToastContainer theme="dark"/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/play/:id" element={<Player/>}/>
            </Routes>
            
        </div>
    )
};
