import React from 'react'
import Post from './Post/Post';
import {useSelector} from 'react-redux';
import './Post/post.css';

export default function Posts({setCurrentId, active, setActive}) {

    const posts = useSelector((state) => state.postsReducer) //postsReducer (z combine reducer)

    return (
        <>
            {!posts ? <div>Brak postów</div>:(
                <section style={{marginTop: '80px'}}>
                    {posts.map((post) => (
                        <div key={post._id}>
                            <Post active={active} post={post} setCurrentId={setCurrentId} setActive={setActive}/>
                        </div>
                    ))}
                </section>
            )}
        </>
    )
}
