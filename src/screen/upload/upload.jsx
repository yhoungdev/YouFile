import React,{useState} from 'react'
import {FaUpload} from 'react-icons/fa';
import upload from '../assets/upload.png'
import './upload.css'

import Button from '../../components/button/button';  
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { getStorage, ref, uploadBytes, uploadBytesResumable } from "firebase/storage";


function Upload() {
    //application states 

    const [msg, setMsg]=useState('')
    const [disable,setDisable]=useState('true')
    const [title, setTitle]=useState('')
    const [hide , setHide] = useState('none')
    const [info , setInfo]=useState('')


    var file;
 

    const image_upload =()=> {
        const storage = getStorage()
        
        const storageRef = ref(storage, `image/${file.name}`)
        const insert = uploadBytesResumable(storageRef, file);

        insert.on('state_change', snapshot => {
            setHide('block')
            setInfo('You chosed  an image file')
        })
    }

    //upload pdf 

    const pdf_upload =()=> {
        const storage = getStorage()
        
        const storageRef = ref(storage, `pdf/${file.name}`)
        const insert = uploadBytesResumable(storageRef, file);

        insert.on('state_change', snapshot => {
            setHide('block')
            setInfo('You chosed  a pdf file')
        })
    }

    //for audio uploads
    const audio_upload =()=> {
        const storage = getStorage()
        
        const storageRef = ref(storage, `audio/${file.name}`)
        const insert = uploadBytesResumable(storageRef, file);

        insert.on('state_change', snapshot => {
            setHide('block')
            setInfo('You chosed  an audio file')
        })
    }

     //for video uploads
     const video_upload =()=> {
        const storage = getStorage()
        
        const storageRef = ref(storage, `video/${file.name}`)
        const insert = uploadBytesResumable(storageRef, file);

        insert.on('state_change', snapshot => {
            setHide('block')
            setInfo('You chosed  a video')
        })
    }

     //for video uploads
     const zip_upload =()=> {
        const storage = getStorage()
        
        const storageRef = ref(storage, `zip/${file.name}`)
        const insert = uploadBytesResumable(storageRef, file);

        insert.on('state_change', snapshot => {
            setHide('block')
            setInfo('You chosed  a Zip file')
        })
    }
   
   

    
    
    // prevent form action
    const form = e => e.preventDefeault();

  

    //pdf upload 

    //upload form 
    const backup = e => {
        file = e.target.files[0]
       setMsg(file.name)
        setDisable(false)

          //image upload function 
  


        //check for the type of file extension
        let img_pattern = /[A-Za-z0-0].png|.jpeg|.jpg|.gif/ig
        let pdf_pattern = /[A-Za-z0-0].pdf/ig
        let audio_pattern = /[A-Za-z0-0].mp3|.mp2|.mka|.ogg/ig
        let video_pattern= /[A-Za-z0-0].mp4|.avi|.mkv|.mpeg/ig
        let zip_pattern= /[A-Za-z0-0].zip/ig

          if (img_pattern.test(file.name)) {
              image_upload()
          } else if (pdf_pattern.test(file.name)) {
               pdf_upload()
          } else if (video_pattern.test(file.name)) {
                video_upload()
          } else if (audio_pattern.test(file.name)) {
            audio_upload()
         } else if (zip_pattern.test(file.name)) {
            zip_upload()
         }
          

      
         toast.success(`${file.name} has been upload successfully`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            });
    
      
        



    }
    return (
        <>
        
            <span style={{display:hide}}>
                <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                />
            </span>
        

            <section>
                <h4>Upload</h4>
                <small></small>
            </section>

            <section className="upload">
                
                {/* now create the form */}
                <div className='form_div' style={{flexDirection:'column'}}>
                    <form onSubmit={ e => e.preventDefault()} >

                        <input type="file" name="file" id="file" onChange={backup}  style={{display:'none'}} />
                        <div className="part">
                            <label htmlFor="file"  >

                            <img src={upload} className='file_upload' />
                            
                        </label>
                            <p style={{textAlign:'center'}}>
                           Click to upload files 
                            </p>

                            <br />
                        </div>

                       
                        <br />

                      

                        {/* <button disabled={disable} className='auth'> Upload </button>                        */}

                    </form>
                    <p className='msg'> {info} </p>
                </div>

            </section>
        </>
    )
}

export default Upload
