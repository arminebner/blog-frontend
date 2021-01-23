import React from 'react'
import styled from 'styled-components'

const Headline = styled.h1`
	margin-top: 100px;
	font-size: 3rem;
`

const FormContainer = styled.div`
	margin: 5rem 0 5rem 0;
	display: flex;
	justify-content: center;
	border: 2px solid #fff;
	border-radius: 2px;
`

const FormData = styled.div`
	width: 80%;
`

const FileUpload = styled.div`
	width: 100%;
	padding: 3rem;
`
const Heading = styled.h2`
	font-size: 2rem;
`
const Label = styled.label`
	font-size: 2rem;
`
const ContentField = styled.div`
	width: 100%;
	height: 300px;
	margin: 3rem 0 3rem 0;
`
const Textarea = styled.textarea`
	width: 100%;
	height: 100%;
`

const Hr = styled.hr`
	margin: 6rem 0 2rem 0;
`

const NewPost = () => {
	return (
		<FormContainer>
			<FormData>
				<Headline>Create a new post</Headline>
				<form
					action='http://192.168.178.28:5000/posts'
					method='POST'
					enctype='multipart/form-data'>
					<FileUpload>
						<Heading>Header Image</Heading>
						<input type='file' name='headerImage' />
					</FileUpload>
					<div>
						<Label htmlFor='title'>Title</Label>
						<input required type='text' name='title' id='title' />
					</div>
					<div>
						<Label htmlFor='short_description'>
							Short description
						</Label>
						<Textarea
							required
							name='short_description'
							id='short_description'></Textarea>
					</div>
					<ContentField>
						<Label htmlFor='markdown'>Content</Label>
						<Textarea
							required
							name='markdown1'
							id='markdown'></Textarea>
					</ContentField>

					<FileUpload>
						<Heading>First Image</Heading>
						<input type='file' name='image1' />
					</FileUpload>
					<ContentField>
						<Label htmlFor='markdown'>Content2</Label>
						<Textarea name='markdown2' id='markdown'></Textarea>
					</ContentField>

					<FileUpload>
						<Heading>Second Image</Heading>
						<input type='file' name='image2' />
					</FileUpload>
					<ContentField>
						<Label htmlFor='markdown'>Content3</Label>
						<Textarea name='markdown3' id='markdown'></Textarea>
					</ContentField>

					<FileUpload>
						<Heading>Third Image</Heading>
						<input type='file' name='image3' />
					</FileUpload>
					<ContentField>
						<Label htmlFor='markdown'>Content4</Label>
						<Textarea name='markdown4' id='markdown'></Textarea>
					</ContentField>

					<FileUpload>
						<Heading>Fourth Image</Heading>
						<input type='file' name='image4' />
					</FileUpload>
					<ContentField>
						<Label htmlFor='markdown'>Content5</Label>
						<Textarea name='markdown5' id='markdown'></Textarea>
					</ContentField>
					<Hr></Hr>
					<button type='submit'>Create Post</button>
				</form>
			</FormData>
		</FormContainer>
	)
}

export default NewPost
