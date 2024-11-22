import './login.css'
import logo from '../../assets/logo.png'
import { useState } from 'react'
import { auth, logIn,signUp } from '../../firebase'
import netflix_spinner from '../../assets/netflix_spinner.gif'


export default function Login() {
    const [signState,setsignState]=useState("Sign In")
    const [loading,setLoading]=useState(false)
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const syn_auth=async (e)=>{
        e.preventDefault()
        setLoading(true)
        if (signState === "Sign In") {
            await logIn(email,password)
        }else{
            await signUp(name,email,password)
        }
        setLoading(false)
    }

    
    return(
        loading?
        <div className="loading-spinner">
            <img src={netflix_spinner} alt="" />
        </div>
    :
        <div className="login">
        <img src={logo} alt="Netflix logo" className='logo-image' />
        <div className="login-form">
            <h3>{signState}</h3>
            <form >
                {
                    signState === 'Sign Up'?<input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Your name" />:null
                }
                
                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="email" />
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="password" />
                <button type='submit' onClick={syn_auth}>{signState}</button>
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
                    signState === 'Sign Up'?<p>Already in Netflix? <span onClick={()=>setsignState('Sign In')}>Sign In Now</span></p>:<p>New to Netflix? <span onClick={()=>setsignState('Sign Up')}>Sign Up Now</span></p>
                }
            </div>
            

        </div>

        </div>
    )
};
