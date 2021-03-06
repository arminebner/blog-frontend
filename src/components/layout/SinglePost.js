import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import Sharer from './Sharer'
import { Helmet } from 'react-helmet'

const SingleContainer = styled.section`
	margin-top: 2rem;
	margin-bottom: 1rem;
	border-radius: 3px;

	@media screen and (min-width: 1200px) {
		margin-top: 100px;
	}
`

const Single = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`

const HeaderImage = styled.img`
	height: 250px;
	width: 100%;
	position: absolute;
	top: 0;
	left: 0;
	margin-bottom: 2rem;
	z-index: -1;

	@media screen and (min-width: 1200px) {
		height: 450px;
		margin-bottom: 0;
		max-width: 1400px;
		position: relative;
		z-index: 1;
	}
`

const PostImage = styled.img`
	height: 250px;
	width: 100%;
	margin-bottom: 2rem;

	@media screen and (min-width: 1200px) {
		height: 450px;
		max-width: 1400px;
		padding: 0 1rem 0 1rem;
	}
`

const PostText = styled.div`
	margin: 100px 0 50px 0;
	background-color: var(--dark-accent);
	border: 1px solid #fff;
	border-radius: 3px;
	box-shadow: 0px 2px 5px #141b27;

	@media screen and (min-width: 1200px) {
		margin: -150px 0 100px 0;
		width: 65%;
		z-index: 10;
		box-shadow: 0px 5px 5px #141b27;
	}
`
const Title = styled.h1`
	margin: 1rem 0 1rem 0.5rem;
	padding-left: 1rem;
`

const EntryMeta = styled.div`
	font-size: 0.7rem;
	color: #9d9d9d;
	margin-bottom: 2rem;
	padding-left: 1rem;
`

const Content = styled.p`
	margin-bottom: 2rem;
	padding: 0 1rem 0 1rem;
`

{
	/* <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-show-count="false">Tweet</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> */
}

const SinglePost = ({ match }) => {
	const [entry, setEntry] = useState()

	useEffect(() => {
		const getPost = async () => {
			try {
				const response = await axios.get(
					`http://192.168.178.28:5000/posts/${match.params.slug}`
				)
				const data = response.data.data[0]
				setEntry(data)
			} catch (error) {
				console.error(error)
			}
		}
		getPost()
	}, [])

	return (
		<SingleContainer>
			{entry ? (
				<>
					<Helmet>
						<meta
							name='twitter:card'
							content={entry.short_description}
						/>
						<meta
							name='twitter:creator'
							content='@one_arminebner'
						/>
						<meta property='og:url' content={window.location} />
						<meta property='og:title' content={entry.title} />
						<meta
							property='og:description'
							content={entry.short_description}
						/>
						<meta
							property='og:image'
							content={entry.headerImagePath}
						/>
						<meta
							property='twitter:image'
							content={entry.headerImagePath}
						/>
					</Helmet>
					<Single>
						<HeaderImage src={entry.headerImagePath} />
						<PostText>
							<Title>{entry.title}</Title>
							<EntryMeta>
								<p>{`from: ${entry.author}`}</p>
								<p>{`published: ${new Date(
									entry.createdAt
								)}`}</p>
								<p>
									{entry.last_updated
										? `last updated: ${new Date(
												entry.last_updated
										  )}`
										: ''}
								</p>
							</EntryMeta>
							<Content
								dangerouslySetInnerHTML={{
									__html: entry.sanitizedHTML1,
								}}
							/>
							{entry.image1 ? (
								<PostImage src={entry.image1Path} />
							) : (
								''
							)}
							{entry.sanitizedHTML2 ? (
								<Content
									dangerouslySetInnerHTML={{
										__html: entry.sanitizedHTML2,
									}}
								/>
							) : (
								``
							)}
							{entry.image2 ? (
								<PostImage src={entry.image2Path} />
							) : (
								''
							)}

							{entry.sanitizedHTML3 ? (
								<Content
									dangerouslySetInnerHTML={{
										__html: entry.sanitizedHTML3,
									}}
								/>
							) : (
								``
							)}
							{entry.image3 ? (
								<PostImage src={entry.image3Path} />
							) : (
								''
							)}

							{entry.sanitizedHTML4 ? (
								<Content
									dangerouslySetInnerHTML={{
										__html: entry.sanitizedHTML4,
									}}
								/>
							) : (
								``
							)}
							{entry.image4 ? (
								<PostImage src={entry.image4Path} />
							) : (
								''
							)}

							{entry.sanitizedHTML5 ? (
								<Content
									dangerouslySetInnerHTML={{
										__html: entry.sanitizedHTML5,
									}}
								/>
							) : (
								``
							)}
						</PostText>
						<Sharer
							title={entry.title}
							short_description={entry.short_description}
						/>
						<form
							action={`http://192.168.178.28:5000/posts/delete/${entry._id}?_method=DELETE`}
							method='POST'>
							<button type='submit'>Delete</button>
						</form>
						<Link to={`blog/edit-post/${entry.slug}`}>Edit</Link>
					</Single>
				</>
			) : (
				'loading'
			)}
		</SingleContainer>
	)
}

export default SinglePost
