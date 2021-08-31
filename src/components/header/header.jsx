 import React,{useState} from 'react'
 import './header.css'
 import {FaBars} from 'react-icons/fa'
 
 function Header(props) {
     const [open,setOpen]=useState(0)
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
                     <button>Login</button>
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
                     <button>Login</button>
                     </span>
              
                 </nav>
                </div>
             </section>
         </div>
     )
 }
 
 export default Header
 