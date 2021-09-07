import React from 'react'
import "./body.css"
import {Link} from 'react-router-dom'
import {useAuth0} from '@auth0/auth0-react'
function Body() {
    const {loginWithRedirect}=useAuth0()
    return (
        <div className='middle'>
           <div className="inside">
           <h1>Save up, <span className='dif'>Hold up</span>, Back up</h1>
            
                <p>share your files publicly with others </p>
          
                <button className='btn'> <Link to='/board'>Board</Link> </button>
                
</div>
        </div>
    )
}

export default Body
