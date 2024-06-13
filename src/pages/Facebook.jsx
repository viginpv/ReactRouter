import React from 'react';
import { Link } from 'react-router-dom';
import './facebook.css'

function Facebook() {
 

  return (
    <div>
      <h2>Signup Page</h2>
      <form>
        <div>
          <label>Username:</label>
          <input type="text" name="username" />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" />
        </div>
        <button type="submit">Signup</button>
      </form>
      <Link to={'/login'}><button>Go to Login</button></Link>
    </div>
  );
}

export default Facebook;
