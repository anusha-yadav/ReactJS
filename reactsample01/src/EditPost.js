import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useContext } from 'react'
import dataContext from './context/DataContext'

const EditPost = ({
}) => {
  const { id } = useParams();
  const {posts,
  handleEdit,
  editTitle,
  setEditTitle,
  editBody,
  setEditBody} = useContext(dataContext)
  const post = posts.find(post => post.id.toString() === id);

  useEffect(() => {
    if (post) {
      setEditBody(post.body);
      setEditTitle(post.title);
    }
  }, [id, posts, setEditTitle, setEditBody]);

  return (
    <main className='NewPost'>
      {post ? (
        <>
          <h1>Edit Post</h1>
          <form
            className='newPostForm'
            onSubmit={(e) => e.preventDefault()}
          >
            <label htmlFor='postTitle'>Title:</label>
            <input
              id='postTitle'
              type='text'
              required
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
            />

            <label htmlFor='postBody'>Body:</label>
            <textarea
              id='postBody'
              required
              value={editBody}
              onChange={(e) => setEditBody(e.target.value)}
            />

            <button
              type='submit'
              onClick={() => handleEdit(post.id)}
            >
              Submit
            </button>
          </form>
        </>
      ) : (
        <p>No Post Found</p>
      )}
    </main>
  );
};

export default EditPost;
