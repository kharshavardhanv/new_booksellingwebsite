import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
}

// const express=require("express");
// const mongoose=require("mongoose");

// const app=express();
// mongoose.connect("mongodb+srv://kartheek:SEY9oWaA8AYrcG75@cluster0.ezyd46b.mongodb.net/bookstore?retryWrites=true&w=majority"
// ).then(()=>console.log("Connected to the Database"))
// .then(()=>{
//   app.listen(5000);
// }).catch((err)=> console.log(err));
export default App;
