import React from 'react'
import moment from 'moment';
import {useDispatch} from 'react-redux';
import {deletePost,likePost} from '../../../actions/posts-action';
import styled from 'styled-components';
export default function Post({post, setCurrentId, active, setActive}) {
    const dispatch = useDispatch()

    return (
        <div className="post-container">
        
            {post.selectedFile&&<img className="post-img" src={post.selectedFile} height="90" alt="pictures"/>}
            {/* <div>
                {moment(post.createdAt).fromNow()}
            </div> */}
            <div>
               
                <div className="post-tnm">
                    <div className="post-title">
                        {post.title}
                        {post.link&&<a className="post-link" href={`${post.link}`}><i className="fas fa-link"></i></a>}
                    </div>
                    <div className="post-message">{post.message}</div>
                    <div className="like"><i className="fas fa-thumbs-up"></i>&nbsp;{post.likeCount}</div>
                </div>
                <div className="post-button">
                    <button className="first" onClick={()=> {dispatch(likePost(post._id))}}>
                        <i className="far fa-thumbs-up"></i>
                        Lubię
                    </button>
                    <button onClick={() => {
                        setCurrentId(post._id)
                        setActive(!active)
                        window.scrollTo(0,0)
                    }}>
                        <i className="far fa-edit"></i> 
                        Edytuj
                    </button>
                   
                    <button className="last" onClick={()=> {dispatch(deletePost(post._id))}}>
                        <i className="far fa-trash-alt"></i>
                        Usuń
                    </button>
                </div>
            </div>
        </div>
    )
}
