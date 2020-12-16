import React, { useEffect, useState } from 'react';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts-action';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
const App = () => {

  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(null)
  const [active, setActive] = useState(false)


  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch])

  return (
    <div className="container">
      <Navbar/>
      <Form currentId={currentId} setCurrentId={setCurrentId} active={active} setActive={setActive} />
      <Posts setCurrentId={setCurrentId} active={active} setActive={setActive} />
      <div className="set-activity" onClick={()=>setActive(!active)}>+</div>
      <News/>
    </div>
  );
}

export default App;
