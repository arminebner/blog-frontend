import React from 'react'
import styled from 'styled-components'

const Headline = styled.h1 ` 
    margin-top: 100px;
`

const PostForm = () => {
    return (
        <div>
            <Headline>Create a new post</Headline>
            <form action='http://192.168.178.28:5000/posts' method='POST'>
                <div>
                    <label htmlFor="title">Title</label>
                    <input required type="text" name='title' id='title'/>
                </div>
                <div>
                    <label htmlFor="short_description">Short description</label>
                    <textarea rquired name='short_description' id='short_description'></textarea>
                </div>
                <div>
                    <label htmlFor="markdown">Content</label>
                    <textarea rquired name='markdown' id='markdown'></textarea>
                </div>
                <button type="submit">Create Post</button>
            </form>
        </div>
    )
}

export default PostForm
