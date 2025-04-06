// import React from "react";
// import Navbar from './components/Navbar';
// import { Outlet } from "react-router-dom";
// import Footer from "./components/Footer";
// // Totify
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { useEffect } from 'react';
// import SummaryApi from './common';
// import Context from './context';
// import { useDispatch } from 'react-redux';
// import { setUserDetails } from './store/userSlice';
// import './App.css'; 

// function App() {
//   const dispatch = useDispatch()

//   const fetchUserDetails = async()=>{
//     const dataResponse = await fetch(SummaryApi.current_user.url,{
//       method : SummaryApi.current_user.method,
//       credentials : 'include'
//     })

//     const dataApi = await dataResponse.json()

//     if(dataApi.success){
//       dispatch(setUserDetails(dataApi.data))
//     }

//     console.log("data_user",dataResponse);
    
//   }

//   useEffect(()=>{
//     /**user Details */
//     fetchUserDetails()
//     /**user Details cart product */
//     // fetchUserAddToCart()

//   },[fetchUserDetails])


//   return (
//     <>
//     <Context.Provider value={{
//       fetchUserDetails, // user detail fetch 
//     }}>
//     <ToastContainer />
//     <Navbar />
//     <main className='min-h-[calc(100vh-120px)]'>
//       <Outlet/>
//     </main>
//     <Footer/>
//     </Context.Provider>
//     </>
//   );
// }

// export default App;


import React, { useEffect, useCallback } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import SummaryApi from './common';
import Context from './context';
import { useDispatch } from 'react-redux';
import { setUserDetails } from './store/userSlice';
import './App.css'; 

function App() {
  const dispatch = useDispatch();

  const fetchUserDetails = useCallback(async () => {
    try {
      const response = await fetch(SummaryApi.current_user.url, {
        method: SummaryApi.current_user.method,
        credentials: 'include'
      });

      const dataApi = await response.json();

      if (dataApi.success) {
        dispatch(setUserDetails(dataApi.data));
      }

      console.log("data_user", dataApi);
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchUserDetails();
  }, [fetchUserDetails]);

  return (
    <>
      <Context.Provider value={{ fetchUserDetails }}>
        <ToastContainer />
        <Navbar />
        <main className='min-h-[calc(100vh-120px)]'>
          <Outlet />
        </main>
        <Footer />
      </Context.Provider>
    </>
  );
}

export default App;
