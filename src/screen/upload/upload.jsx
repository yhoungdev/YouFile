import React,{useState} from 'react'
import {FaUpload} from 'react-icons/fa';
import upload from '../assets/upload.png'
import './upload.css'

import Button from '../../components/button/button';  
// import { app } from '../../base';
import { getStorage, ref, uploadBytes, uploadBytesResumable } from "firebase/storage";
function Upload() {

    

    const [msg, setMsg]=useState('')
    const [disable,setDisable]=useState('true')
    const [title, setTitle]=useState('')
    
    
    // prevent form action
    const form = e => e.preventDefeault();

    //upload form 
    const backup = e => {
       let file = e.target.files[0]
       setMsg(file.name)
        setDisable(false)


        //upload to firebase
        const storage = getStorage()
        
        const storageRef = ref(storage, `image/${file.name}`)
        const insert = uploadBytesResumable(storageRef, file);

        insert.on('state_change', snapshot => {
            alert(0)
        })

        



    }
    return (
        <>
            <section>
                <h4>Upload</h4>
                <small></small>
            </section>

            <section className="upload">
                
                {/* now create the form */}
                <div className='form_div'>
                    <form onSubmit={ e => e.preventDefault()} >

                        <input type="file" name="file" id="file" onChange={backup}  style={{display:'none'}} />
                        <div className="part">
                            <label htmlFor="file"  >

                            <img src={upload} className='file_upload' />
                            
                        </label>
                            <p style={{textAlign:'center'}}>
                            upload files here
                            </p>

                        </div>

                        {msg}
                        <br />

                        <button disabled={disable} className='auth'> Upload </button>                       

                    </form>
                </div>

            </section>
        </>
    )
}

export default Upload
