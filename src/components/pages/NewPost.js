import React from 'react'
import styled from 'styled-components'
import { FilePond, registerPlugin } from 'react-filepond'
import 'filepond/dist/filepond.min.css'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
import FilePondPluginFileEncode from 'filepond-plugin-file-encode'
registerPlugin(FilePondPluginFileEncode, FilePondPluginImagePreview)

const Headline = styled.h1`
	margin-top: 100px;
`

const NewPost = () => {
	return (
		<div>
			<Headline>Create a new post</Headline>

			<h2>Text</h2>
			<form
				action='http://192.168.178.28:5000/posts'
				method='POST'
				encType='multipart/form-data'>
				<div>
					<label htmlFor='title'>Title</label>
					<input required type='text' name='title' id='title' />
				</div>
				<div>
					<label htmlFor='short_description'>Short description</label>
					<textarea
						required
						name='short_description'
						id='short_description'></textarea>
				</div>
				<div>
					<label htmlFor='markdown'>Content</label>
					<textarea required name='markdown' id='markdown'></textarea>
				</div>

				<h2>Images</h2>
				<h3>Header Image</h3>
				<FilePond name='headerImage' />
				<FilePond
					allowFileEncode='false'
					allowMultiple={true}
					name='postImages'
				/>
				<button type='submit'>Create Post</button>
			</form>
			<hr></hr>
			<h3>Post images</h3>
		</div>
	)
}

export default NewPost
