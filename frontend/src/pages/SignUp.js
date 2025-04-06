import React, { useState } from 'react';
import loginIcons from '../assets/signin.png'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
// import imageTobase64 from '../helpers/imageTobase64';
import { Link, useNavigate } from 'react-router-dom';
import SummaryApi from '../common';
import { toast } from 'react-toastify';


const SignUp = () => {


    const [showPassword,setShowPassword] = useState(false)
     const [showConfirmPassword,setShowConfirmPassword] = useState(false)
    

     const [data,setData] = useState({
        email : "",
        password : "",
        name : "",
        confirmPassword : "",
        profilePic : "",
    })
    const navigate = useNavigate()
        
        const handleOnChange = (e) =>{
            const { name , value } = e.target
    
            setData((preve)=>{
                return{
                    ...preve,
                    [name] : value
                }
            })
        }

        // profile pic
        // const handleUploadPic = async(e) =>{
        //     const file = e.target.files[0]
            
        //     const imagePic = await imageTobase64(file)
            
        //     setData((preve)=>{
        //       return{
        //         ...preve,
        //         profilePic : imagePic
        //       }
        //     })
        
        //   }

        const handleUploadPic = async (e) => {
            const file = e.target.files[0];
          
            const formData = new FormData();
            formData.append("image", file);
          
            try {
              const response = await fetch("http://localhost:5000/upload", {
                method: "POST",
                body: formData,
              });
          
              const data = await response.json();
              setData((prev) => ({
                ...prev,
                profilePic: data.imageUrl, // Store Cloudinary URL in state
              }));
            } catch (error) {
              console.error("Upload failed:", error);
            }
          };
          
    
        const handleSubmit = async(e) =>{
            e.preventDefault()

            if(data.password === data.confirmPassword) {
                const dataResponse = await fetch(SummaryApi.signUP.url,{
                    method : SummaryApi.signUP.method,
                    // credentials : 'include',
                    headers : {
                        "content-type" : "application/json"
                    },
                    body : JSON.stringify(data)
                })
                const dataApi = await dataResponse.json();

                if(dataApi.success){
                    toast.success(dataApi.message)
                    navigate("/login")
                }

                if(dataApi.error){
                    toast.error(dataApi.message)
                } else {
                    console.log("please check password and confirm password")
                }
                toast(dataApi.message)

                console.log("data",dataApi);

            } else {
                console.log("Please check password and confirm password");
                
            }
            
        }
        console.log("data login",data);
        
  return (
    <section id='login'>

        <div className='mx-auto container p-4'>

        <div className='bg-pink-100 p-5 w-full max-w-sm mx-auto'>
        
        <div className='w-20 h-20 mx-auto relative overflow-hidden rounded-full'>
                        <div>
                            <img src={data.profilePic || loginIcons} alt='login icons'/>
                        </div>
                        <form>
                          <label>
                            <div className='text-xs bg-opacity-80 bg-slate-200 pb-4 pt-2 cursor-pointer text-center absolute bottom-0 w-full'>
                              Upload  Photo
                            </div>
                            <input type='file' className='hidden' onChange={handleUploadPic}/>
                          </label>
                        </form>
                    </div>


        <form className='pt-6 flex flex-col gap-2' onSubmit={handleSubmit}>
        
        {/* Name */}
        <div className='grid'>
            <label>Name : </label>
            <div className='bg-slate-100 p-2'>
                <input 
                    type='text' 
                    placeholder='enter your name' 
                    name='name'
                    value={data.name}
                    onChange={handleOnChange}
                    required
                    className='w-full h-full outline-none bg-transparent'/>
            </div>
        </div>

        <div className='grid'>
            <label>Email : </label>
            <div className='bg-slate-100 p-2'>
                <input 
                    type='email' 
                    placeholder='enter email' 
                    onChange={handleOnChange}
                    value={data.email}
                    name='email'
                    className='w-full h-full outline-none bg-transparent'/>
            </div>
        </div>

        {/* Password */}
        <div>
        <label>password : </label>
        <div className='bg-slate-100 p-2 flex'>
                <input 
                    type={showPassword ? "text" : "password" } 
                    placeholder='enter password'
                    value={data.password}
                    name='password' 
                    onChange={handleOnChange}
                    className='w-full h-full outline-none bg-transparent'
                    />

        <div className='cursor-pointer text-xl' onClick={()=>setShowPassword((preve)=>!preve)}>
            <span>
            {
                showPassword ? (
                    <FaEyeSlash/>
                )
                :
                (
                    <FaEye/>
                )
            }
            </span>
        </div>
        </div>

        </div>


        {/*Confirm Password */}
        <div>
        <label>Confirm password : </label>
        <div className='bg-slate-100 p-2 flex'>
                <input 
                    type={showConfirmPassword ? "text" : "password" } 
                    placeholder='enter password'
                    value={data.confirmPassword}
                    name='confirmPassword' 
                    onChange={handleOnChange}
                    className='w-full h-full outline-none bg-transparent'
                    />

        <div className='cursor-pointer text-xl' onClick={()=>setShowConfirmPassword((preve)=>!preve)}>
            <span>
            {
                showConfirmPassword ? (
                    <FaEyeSlash/>
                )
                :
                (
                    <FaEye/>
                )
            }
            </span>
        </div>
        </div>
        </div>

        <button className='bg-pink-700 hover:bg-pink-500 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6'>Login</button>
        </form>

        <p className='my-5'>Already have account ? <Link to={"/login"} className=' text-pink-700 hover:text-pink-500 hover:underline'>Login</Link></p>
        </div>
        </div>
    </section>
  )
}

export default SignUp