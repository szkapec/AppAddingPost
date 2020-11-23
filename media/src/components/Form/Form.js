import React, { useState, useEffect } from 'react'
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {createPost, updatePost } from '../../actions/posts-action';
import './form.css';

const Form = ({currentId, setCurrentId}) => {


    const [postData,setPostData] = useState({ creator: '', title: '', message:'', tags: '', selectedFile: '', link: ''});
    const post = useSelector((state) => (currentId ? state.postsReducer.find((message) => message._id === currentId) : null)); //postsReducer (z combine reducer)
    const dispatch = useDispatch();
   
    useEffect(() => {
        if(post) setPostData(post)
    }, [post])


      const handleSubmit = async (e) => {
        e.preventDefault();
        if(postData.title===""|| postData.message===""){
          return;
        }
        if (currentId) {
          console.log('current')
          dispatch(updatePost(currentId, postData));
          clear();
        } else {
          console.log('create')
          dispatch(createPost(postData));
          clear();
        }
      };
      
      const clear = () => {
        setCurrentId(0);
        setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '', link: '', });
      };
    

    
    return (
        <section className="form-container">
         
            <form autoComplete="off" noValidate onSubmit={handleSubmit} className="form">
                <div>{currentId?'Edytuj ':'Napisz nowy'} post</div>
                {/* <div>
                    <input name="creator" placeholder="Creator" variant="outlined" label="Creator" value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value})}/>
                </div> */}
                <div className="form-title">
                    <img className="form-img" src="https://placeimg.com/640/480/any" alt="image"/>
                    <input className="title" name="title" placeholder="Tytuł" variant="outlined" label="Title" value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value})}/>
                    <input className="link" name="link" placeholder="Link"
                 variant="outlined" label="link" value={postData.link} onChange={(e) => setPostData({ ...postData, link: e.target.value})}/>
                </div>
                <div className="file"> <FileBase type="file"  multiple={false} onDone={({base64}) => setPostData({...postData, selectedFile: base64})}/></div>
                <div>
                    <textarea style={{maxWidth:'277px', height:'60px'}} className="message" name="message" placeholder="Wiadomość" variant="outlined" label="Message" value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value})}/>
                </div>
                {/* <div>
                    <input name="tags" placeholder="Tags" variant="outlined" label="Tags" value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',')})}/>
                </div>             */}
               
                <div className="form-color"></div>
                <div>
                    <input className="form-button" type="button" onClick={clear} value="Wyczysc" style={{width:'80px'}}/>
                    <button className="form-button" type="submit">{currentId?'Edytuj ':'Dodaj'}</button>
              
                </div>
            </form>
        </section>
    )
}

export default Form
