import React, { useEffect, useState } from 'react';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts-action';
import Navbar from './components/Navbar/Navbar';

const App = () => {

  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(null)

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch])

  return (
    <>
      <Navbar/>
      <Form currentId={currentId} setCurrentId={setCurrentId} />
      <Posts setCurrentId={setCurrentId} />
    </>
  );
}

export default App;
