import React from 'react'
import Post from './Post/Post';
import {useSelector} from 'react-redux';
import './Post/post.css';

export default function Posts({setCurrentId}) {

    const posts = useSelector((state) => state.postsReducer) //postsReducer (z combine reducer)

    return (
        <>
            {!posts ? <div>Brak postów</div>:(
                <section>
                    {posts.map((post) => (
                        <div key={post._id}>
                            <Post post={post} setCurrentId={setCurrentId}/>
                        </div>
                    ))}
                </section>
            )}
        </>
    )
}
