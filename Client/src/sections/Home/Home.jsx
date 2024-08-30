import React, { useState } from 'react'
import lock from '../../assets/lock.svg'
import email from '../../assets/email.svg'
import google from '../../assets/google.svg'
import facebook from '../../assets/facebook.svg'
import X from '../../assets/X.svg'
import { NavLink } from 'react-router-dom'

function Home() {
  const id = 100;
  const [ispatient,setisPatient] = useState(true);

  const handlePatient = () =>{
    if(id>=100){
      setisPatient(false);
    }
    
  }
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Hook for navigation

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }), // Include name here
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'HTTP error');
      }

      const data = await response.json();

      if (data.success) {
        navigate('/dashboard');
      } else {
        alert(data.message || 'Invalid credentials');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while trying to log in.');
    }
  };
  return (
    <section className='home-container'>
      <div className='login-section'>
        <h1 className='login-heading'>Login To CuraSphere</h1>
        <p className='login-desc'>Access your account to manage appointments and connect with healthcare professionals</p>
        <div className='login-details'>
          <div className='name-input'>
            <img src={email} alt='email' className='email-img'/>
            <input type='search' className='login-name' placeholder='   Name'/>
          </div>
          <div className='email-input'>
            <img src={email} alt='email' className='email-img'/>
            <input type='search' className='login-email' placeholder='   Email'/>
          </div>
          <div className='input-password'>
            <img src={lock} alt='pass' className='pass-img'/>
            <input type='search' className='login-pass' placeholder='   Password'/>
          </div>

          <button className='login-btn'>
            Login
          </button>
          <a className='forgot-pass'>Forgot Password?</a>

          <div className='login-methods-container'>
            <div className='google-login'>
              <img src={google} className='google-icon'/>
              <a className='google'>Google</a>
            </div>
            <div className='facebook-login'>
              <img src={facebook} className='facebook-icon'/>
              <a className='facebook'>Facebook</a>
            </div>
            <div>

            </div>
            <div>

            </div>
            <div className='x-login'>
              <img src={X} className='x-icon'/>
              <a className='x'>X</a>

            </div>
          </div>

          <div className='hero-desc'>
              <h1 className='hero-content'>
                Join CuraSphere
                <br/>
                <span className='today'>Today</span>
              </h1>
          </div>
          <div className='hero-content-para'>
            Unlock access to personalized healthcare insights and
            <br/>
            <span className='desc_2'>community support by signing up now.</span>
          </div>
          <div>
            <button className='sign-up-btn'>Sign Up</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home