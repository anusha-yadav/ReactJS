import './App.css';
import Header from './Header';
import Footer from './Footer';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import Missing from './Missing';
import Home from './Home';
import Nav from './Nav';
import './index.css'
import { format } from 'date-fns'
import api from './api/posts'
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import EditPost from './EditPost';
import { DataProvider } from './context/DataContext';

function App() {
  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     try {
  //       const response = await api.get('/posts')
  //       setPosts(response.data);
  //     }
  //     catch (err) {
  //       console.log(err);
  //     }
  //   }
  //   fetchPosts();
  // },[])
  return (
    <div className="App">
      <DataProvider>
        <Header title="ReactJS Blog" />
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home
          />} />
          <Route exact path="/post" element={<NewPost
          />} />
          <Route exact path="/edit/:id" element={<EditPost
          />} />
          <Route exact path="/post/:id" element={<PostPage />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="*" element={<Missing />} />
        </Routes>
        <Footer />
      </DataProvider>
    </div>
  );
}

export default App;
