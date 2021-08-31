import React from 'react'
import "./body.css"
import {Link} from 'react-router-dom'
function Body() {
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
