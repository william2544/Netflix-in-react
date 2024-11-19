import './login.css'
import logo from '../../assets/logo.png'
import { useState } from 'react'
export default function Login() {
    const [signState,setsignState]=useState("Sign In")


    return(
        <div className="login">
        <img src={logo} alt="Netflix logo" className='logo-image' />
        <div className="login-form">
            <h3>{signState}</h3>
            <form action="">
                {
                    signState === 'Sign In'?<input type="text" placeholder="Your name" />:null
                }
                
                <input type="email" placeholder="email" />
                <input type="password" placeholder="password" />
                <button>{setsignState === 'Sign In'?'Sign In':'Sigh Up'}</button>
                <div className="from-help">
                    <div className="remember">
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="htmlForm">Remember me</label>
                    </div>
                    <p>Need help?</p>
                </div>
            </form>
            <div className="form-switch">
                {
                    signState === 'Sigh In'?<p>Already in Netflix? <span onClick={()=>setsignState('Sigh In')}>Sign In Now</span></p>:<p>New to Netflix? <span onClick={()=>setsignState('Sigh Up')}>Sign Up Now</span></p>
                }
            </div>
            

        </div>

        </div>
    )
};
