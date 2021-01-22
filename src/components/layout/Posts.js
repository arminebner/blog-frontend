import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const PostPreviewBorder = styled.div`
	margin-bottom: 3rem;
	padding: 1px;
	background: rgb(238, 174, 202);
	background: linear-gradient(
		355deg,
		rgba(20, 27, 39, 1) 0%,
		rgba(64, 154, 191, 1) 100%
	);
	border-radius: 3px;
	box-shadow: 0px 2px 5px #141b27;

	@media screen and (min-width: 1200px) {
		height: 250px;
		background: rgb(238, 174, 202);
		background: linear-gradient(
			355deg,
			rgba(20, 27, 39, 1) 0%,
			rgba(64, 154, 191, 1) 100%
		);
	}
`

const PostPreview = styled.section`
	padding: 1rem;
	border-radius: 3px;
	text-align: center;
	background-color: var(--dark-accent);

	@media screen and (min-width: 1200px) {
		height: 250px;
		display: flex;
		align-items: center;
		gap: 3rem;
		text-align: left;
	}
`

const PreviewPostImage = styled.img`
	height: 130px;
	width: 130px;
	border-radius: 50%;
	box-shadow: 0px 2px 5px #409abf;

	@media screen and (min-width: 1200px) {
		height: 200px;
		width: 200px;
	}
`

const PreviewPostText = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;

	@media screen and (min-width: 1200px) {
		width: 65%;
	}
`

const PreviewPostTitle = styled.h2`
	margin-bottom: 1rem;
	color: var(--f-color);
`

const PreviewPostExcerpt = styled.p`
	text-align: left;
`

const PreviewPostLink = styled.p`
	margin-top: 1rem;
	font-size: 0.9rem;
	color: var(--f-color);
	text-decoration: none;
`

const Posts = ({ entries }) => {
	const decodeImage = headerImage => {
		var base64 = btoa(
			new Uint8Array(headerImage.data).reduce(
				(data, byte) => data + String.fromCharCode(byte),
				''
			)
		)
		return base64
	}

	return (
		<section>
			{entries
				? entries.map(entry => (
						<PostPreviewBorder key={entry.slug}>
							<PostPreview id='entry.sys.id'>
								<Link to={`/blog/${entry.slug}`}>
									<PreviewPostImage
										src={`data:${
											entry.headerImageType
										};base64,${decodeImage(
											entry.headerImage
										)}`}
									/>
								</Link>
								<PreviewPostText>
									<Link to={`/blog/${entry.slug}`}>
										<PreviewPostTitle>
											{entry.title}
										</PreviewPostTitle>
									</Link>
									<PreviewPostExcerpt
										dangerouslySetInnerHTML={{
											__html: entry.short_description,
										}}
									/>
									<Link to={`/blog/${entry.slug}`}>
										<PreviewPostLink>
											read more
										</PreviewPostLink>
									</Link>
								</PreviewPostText>
							</PostPreview>
						</PostPreviewBorder>
				  ))
				: 'loading'}
			<Link to={`/new-post/`}>create new</Link>
		</section>
	)
}

export default Posts
