import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Posts from '../layout/Posts'

const BlogHeader = styled.section`
	margin-top: 30px;

	@media screen and (min-width: 1200px) {
		margin-top: 100px;
	}
`

const HeaderText = styled.div`
	margin-bottom: 2rem;
	font-size: 1.1rem;
`

const BlogHeaderH1 = styled.h1`
	font-family: var(--font-sec);
	color: var(--blue);
	font-size: 3rem;
	margin-bottom: 2rem;

	@media screen and (min-width: 1200px) {
		font-size: 4rem;
	}
`

const Blog = () => {
	const [entries, setEntries] = useState([])

	useEffect(() => {
		const getAllPosts = async () => {
			try {
			  const response = await axios.get('http://192.168.178.28:5000/posts');
			  const { data } = response.data 
			  setEntries(data)
			} catch (error) {
			  console.error(error);
			}
		  }
		  getAllPosts()
	}, [])

	return (
		<BlogHeader>
			<HeaderText>
				<BlogHeaderH1>Hello</BlogHeaderH1>
				<p>Here is the place to read about my favorite topics:</p>
				<p>Web-Development, Linux and Tech-related topics in general</p>
				<p>Have fun and feel free to get in touch if you have any questions</p>
			</HeaderText>
			<Posts entries={entries} />
		</BlogHeader>
	)
}

export default Blog
