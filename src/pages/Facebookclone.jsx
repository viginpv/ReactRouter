import React from 'react';
import { Link } from 'react-router-dom';

import './facebook.css'

function Facebookclone() {
  

  return (
    <div>
      <h2>Login Page</h2>
      <form>
        <div>
          <label>Username:</label>
          <input type="text" name="username" />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" />
        </div>
        <button type="submit">Login</button>
      </form>
    <Link to={'/signup'}><button>Go to Signup</button></Link> 
    <a href="/signup">connct</a>
    </div>
  );
}

export default Facebookclone;
