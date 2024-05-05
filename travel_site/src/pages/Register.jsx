import React from 'react'
import Navbar from '../components/Navbar';
import RegisterImage from "../assets/register.jpg";
import '../styles/Register.css';

function Register() {
  return (
    <div>
        <div style={{ backgroundImage: `url(${RegisterImage})` }} className='register'>
            <Navbar />

            <div class="container">
                <div class="register-card">
                    <div class="register-card-header">
                    <h2>Register</h2>
                    </div>
                    <div class="register-card-body">
                        <form>
                            <div class="form-group">
                                <label for="username">Username:</label>
                                <input type="text" id="username" name="username" />
                            </div>
                            <div class="form-group">
                                <label for="email">E-mail:</label>
                                <input type="text" id="email" name="email" />
                            </div>
                            <div class="form-group">
                                <label for="password">Password:</label>
                                <input type="password" id="password" name="password" />
                            </div>
                            <div class="form-group">
                                <label for="repassword">Re-type Password:</label>
                                <input type="password" id="repassword" name="repassword" />
                            </div>
                            <button type="submit" class="login-btn">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register