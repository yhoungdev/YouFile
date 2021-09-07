 import React,{useState} from 'react'
 import './header.css'
 import {FaBars} from 'react-icons/fa'
 import LoginButton from '../../screen/landing/button'
 import { useAuth0 } from "@auth0/auth0-react";
 import {Link} from 'react-router-dom'

 function Header(props) {
     const [open,setOpen]=useState(0)
     const {loginWithRedirect}=useAuth0();
     return (
         <div>
             <header>
                 <div className="logo">
                     <span>YouFile</span>
                 </div>


                 <nav>
                     <ul>
                         <li>Home</li>
                         <li>About</li>
                         
                     </ul>

                     <span>

                        <button className='auth' onClick={()=>loginWithRedirect(0)}>Login</button>
                     
                     </span>
                    
                     
                
                 </nav>

                 <span className='menu'>
                         <h1 onClick={()=>setOpen('100vw')}><FaBars/></h1>
                 </span>
   
             </header>

             <section className="side" style={{width:open}}>
                <div className="inside">
                <nav>
                     <ul>
                         <li>Home</li>
                         <li>About</li>
                         
                     </ul>

                     <span>
                     <button className='btn'> <Link to='/board'>Board</Link> </button>
                     </span>
              
                 </nav>
                </div>
             </section>
         </div>
     )
 }
 
 export default Header
 