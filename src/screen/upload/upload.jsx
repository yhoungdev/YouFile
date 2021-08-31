import React,{useState} from 'react'
import {FaUpload} from 'react-icons/fa';
import upload from '../assets/upload.png'
import './upload.css'
   
function Upload() {
    const [msg, setMsg]=useState('')
    const [disable,setDisable]=useState('true')
    
    // prevent form action
    const form = e => e.preventDefeault();

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

                        <input type="file" name="file" id="file" style={{display:'none'}} />
                        <div className="part">
                            <label htmlFor="file">

                            <img src={upload} className='file_upload' />
                            
                        </label>
                            <p style={{textAlign:'center'}}>
                            upload files here
                            </p>

                        </div>
                        <button>Upload</button>

                    </form>
                </div>

            </section>
        </>
    )
}

export default Upload
