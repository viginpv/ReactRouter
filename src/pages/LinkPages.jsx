import React from 'react'
import { Link } from 'react-router-dom'

const LinkPages = () => {







  return (
    <div>Login
        <input type="text" placeholder='name' />
        <input type="text" placeholder='password' />
        <button>Login</button>
        <Link to={`/signup/${li.id}`}>
        <button>signup</button>
        </Link>
    </div>
  )
}

export default LinkPages