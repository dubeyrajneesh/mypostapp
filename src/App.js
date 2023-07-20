import React, { useEffect, useReducer, useContext, createContext, useState } from 'react'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Navbar from './Components/Layout/Navbar';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import Home from './Components/Pages/Home';
import Footer from './Components/Pages/Footer';
import AllPosts from './Components/Pages/AllPosts';
import PostDetails from './Components/Pages/PostDetails';
import CreatePost from './Components/Pages/CreatePost';
import Signup from './Components/Screens/Signup';
import Login from './Components/Screens/Login';
import { initalUserState, userReducer } from './Components/Reducer/userReducer';
import MyAllPosts from './Components/Pages/MyAllPosts';

export const UserContext = createContext() ;

function DynamicRoutes() {

  const navigate = useNavigate() ;
  const {state , dispatch} = useContext(UserContext) ;

  useEffect(()=>{
    const token = localStorage.getItem('token');
    if(token)
    {
      const user = JSON.parse(localStorage.getItem('user'));
      const userState = { 'token': token, 'user': user};
      const action = {type:'LOGIN' , payload: userState} ;
      dispatch(action) ;
      navigate('/posts');
    }else{
      navigate('/login') ;
    }

  }, [])


  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/posts" element={<AllPosts />} />
      <Route exact path="/myposts" element={<MyAllPosts />} />
      <Route exact path="/create" element={<CreatePost />} />
      <Route exact path="/Login" element={<Login />} />
      <Route exact path="/Signup" element={<Signup />} />
      <Route exact path="/create/:postId/:userId" element={<CreatePost />} />
      <Route exact path="/posts/:postId/:userId" element={<PostDetails />} />
      <Route exact path="/About" element={<About />} />
      <Route exact path="/Contact" element={<Contact />} />
    </Routes>

  );
}



function App() {

  const [state , dispatch] = useReducer(userReducer , initalUserState) ;


  return (

    <UserContext.Provider value= {{state: state , dispatch : dispatch}}>
      <Router>
      <div className="App">
        <Navbar></Navbar>
        <DynamicRoutes />

        <Footer />
      </div>
    </Router>

    </UserContext.Provider>
    
  );
}

export default App;
