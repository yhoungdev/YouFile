import React from 'react'
import "./body.css"
import {Link} from 'react-router-dom'
import {useAuth0} from '@auth0/auth0-react'
function Body() {
    const {loginWithRedirect, isAuthenticated}=useAuth0()
    
    return (
        <div className='middle'>
           <div className="inside">
           <h1>Save up, <span className='dif'>Hold up</span>, Back up</h1>
            
                <p>share your files publicly with others </p>
          
                {/* check if it is authenticated */}
                {!isAuthenticated ? <button className='btn' onClick={()=>loginWithRedirect()}> Get Started </button> : 
                    <button className='btn'> <Link to='/board'>Go to Dashboard</Link> </button>
                }
                
</div>
        </div>
    )
}

export default Body
