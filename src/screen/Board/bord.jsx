import React,{useState} from 'react'
import './board.css';
import {Link, Route,BrowserRouter as Router, Switch} from 'react-router-dom'
import Video from '../video/video'
import Audio from '../audio/audio'
import Landing from '../landing/landing'
import Upload from '../upload/upload';
import Image from '../images/images';
import Doc from '../pdf/doc';
import {FaFolder} from 'react-icons/fa'




function Board() {
    return (
        <>

            <Router>
                {/* sidebar */}

                <div className="board">
                    {/* for the sidebar */}
                    <div className="sidebar">
                            {/* logged in user */}
                            <div className="inSidebar">
                            <div className="user">
                            Obiabo
                        </div>

                            {/* folders */}
                        <div className="items">

                            <ul>
                                <Link to='/board'></Link>
                                <li>
                                    <Link to='/image'><h3> <FaFolder/> Images</h3></Link>
                                </li>
                                <li>
                                    <Link to='/audio'><h3> <FaFolder/> Audio</h3></Link>
                                </li>
                                <li>
                                    <Link to='/video'><h3> <FaFolder/> Video</h3></Link>
                                </li>
                                <li>
                                    <Link to='/doc'><h3> <FaFolder/> PDF </h3></Link>
                                </li>
                            </ul>

                        </div>

                        {/* log out */}
                        <span>
                            <h5>Logout</h5>
                        </span>
                            </div>

                    </div>

                    {/* for the main section */}

                    <div className="main">
                        <Route exact path='/board' >
                            <Upload/>
                        </Route>

                        <Route  path='/video'> 
                            <Video/>
                        </Route>

                        <Route path='/audio'>
                            <Audio/>
                        </Route>

                        <Route path='/image'>
                            <Image/>
                        </Route>

                        <Route path='/doc'>
                            <Doc/>
                        </Route>

                        

                        


                    </div>



                </div>

            </Router>

        </>
    )
}

export default Board
