import { createContext, useState, useEffect } from "react";
import { format } from 'date-fns'
import api from '../api/posts'
import { Routes, Route, useNavigate } from 'react-router-dom';
import  useWindowSize  from '../hooks/useWindowSize'
import  useAxiosFetch  from '../hooks/useAxiosFetch'
const dataContext = createContext({});

export const DataProvider = ({children}) => {
  const [posts, setPosts] = useState([])
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [postTitle, setPostTitle] = useState('');
  const [editBody, setEditBody] = useState('')
  const [editTitle, setEditTitle] = useState('');
  const [postBody, setPostBody] = useState('')
  const navigate = useNavigate();
  const { width } = useWindowSize();
  const { data, fetchError, isLoading } = useAxiosFetch('http://localhost:3500/posts')
    useEffect(() => {
    setPosts(data)
  }, [data])

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

  useEffect(() => {
    const filterResults = posts.filter(post =>
      (post.body).toLowerCase().includes(search.toLowerCase())
      || (post.title).toLowerCase().includes(search.toLowerCase())
    )
    setSearchResults(filterResults.reverse());
  }, [posts, search])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 :
      1;
    const dateTime = format(new Date(), 'MMMM dd, yyyy pp');
    const newPost = { id, title: postTitle, datetime: dateTime, body: postBody };
    try {
      const response = await api.post('/posts', newPost);
      const allPosts = [...posts, response.data];
      setPosts(allPosts);
      setPostTitle('');
      setPostBody('');
      navigate('/');
    }
    catch (err) {
      console.log(err)
    }
  }

  const handleEdit = async (id) => {
    const dateTime = format(new Date(), 'MMMM dd, yyyy pp');
    const updatedPost = {
      id,
      title: editTitle,
      datetime: dateTime,
      body: editBody
    };

    try {
      const response = await api.put(`/posts/${id}`, updatedPost);
      setPosts(posts.map(post =>
        post.id === id ? response.data : post
      ));
      setEditTitle('');
      setEditBody('');
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/posts/${id}`)
      const postsList = posts.filter(post => post.id !== id);
      setPosts(postsList);
      navigate('/');
    }
    catch (err) {
      console.log(err)
    }
  }
    return (
    <dataContext.Provider value = {{
          width, search, setSearch,
          searchResults, fetchError, isLoading,
          handleSubmit, setPostTitle, postTitle, setPostBody, postBody,
          posts,handleEdit, editTitle,setEditTitle,editBody,setEditBody,
          handleDelete
        }}>
      {children}
    </dataContext.Provider>
  )
}

export default dataContext