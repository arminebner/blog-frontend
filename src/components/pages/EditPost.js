import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const Headline = styled.h1`
	margin-top: 100px;
`

const EditPost = ({ match }) => {
	const [entry, setEntry] = useState([])
	const [id, setId] = useState()

	//useeffect to get post with id
	useEffect(() => {
		const getPost = async () => {
			try {
				const response = await axios.get(
					`http://192.168.178.28:5000/posts/${match.params.slug}`
				)
				const data = response.data.data[0]
				setId(data._id)
				setEntry(data)
			} catch (error) {
				console.error(error)
			}
		}
		getPost()
	}, [])

	const handleChange = (e, input) => {
		if (input === 'title') {
			setEntry({
				...entry,
				title: e.target.value,
			})
			console.log(entry)
		} else if (input === 'short_description') {
			setEntry({
				...entry,
				short_description: e.target.value,
			})
			console.log(entry)
		} else if (input === 'markdown') {
			setEntry({
				...entry,
				markdown: e.target.value,
			})
			console.log(entry)
		}
	}

	return (
		<div>
			<Headline>Edit post</Headline>
			<h2>Images</h2>

			<h2>Text</h2>
			<form
				action={`http://192.168.178.28:5000/posts/edit/${id}?_method=PUT`}
				method='POST'>
				<div>
					<label htmlFor='title'>Title</label>
					<input
						required
						onChange={e => handleChange(e, 'title')}
						type='text'
						value={entry.title}
						name='title'
						id='title'
					/>
				</div>
				<div>
					<label htmlFor='short_description'>Short description</label>
					<textarea
						required
						onChange={e => handleChange(e, 'short_description')}
						value={entry.short_description}
						name='short_description'
						id='short_description'></textarea>
				</div>
				<div>
					<label htmlFor='markdown'>Content</label>
					<textarea
						required
						onChange={e => handleChange(e, 'markdown')}
						value={entry.markdown}
						name='markdown'
						id='markdown'></textarea>
				</div>
				<button type='submit'>Edit</button>
			</form>
		</div>
	)
}

export default EditPost
