import React from 'react';
import '../styles/Login.css';
import LoginImage from "../assets/login.jpg";
import Navbar from '../components/Navbar';

function Login() {
  return (
    <div>
        <div style={{ backgroundImage: `url(${LoginImage})` }} className='login'>
            <Navbar />

            <div class="container">
                <div class="login-card">
                    <div class="login-card-header">
                    <h2>Login</h2>
                    </div>
                    <div class="login-card-body">
                        <form>
                            <div class="form-group">
                                <label for="username">Username:</label>
                                <input type="text" id="username" name="username" />
                            </div>
                            <div class="form-group">
                                <label for="password">Password:</label>
                                <input type="password" id="password" name="password" />
                            </div>
                            <button type="submit" class="login-btn">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login