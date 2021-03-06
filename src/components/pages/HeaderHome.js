import React from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import About from './About'

;<meta
	name='description'
	content='My Website about my programming learning-journey and the things I like most about it'
/>

const Header = styled.header`
	text-align: right;
	display: flex;
	flex-direction: column;
	height: calc(100vh - 70px);
	margin-bottom: 0px;
	margin-right: 0.5rem;

	@media screen and (min-width: 1200px) {
		margin-right: 0;
		height: 100vh;
		flex-direction: row-reverse;
		align-items: center;
		justify-content: space-around;
	}
`

const HeaderLogo = styled.div`
	font-family: var(--font-sec);
	font-size: 3.5rem;
	color: var(--blue);

	@media screen and (min-width: 1200px) {
		font-size: 5rem;
	}
`

const HeaderText = styled.div`
	font-size: 1.1rem;

	@media screen and (min-width: 1200px) {
		font-size: 1.5rem;
		margin-left: 100px;
	}
`

const Space = styled.p`
	margin-top: 1.5rem;

	@media screen and (min-width: 1200px) {
		margin-top: 0;
	}
`

const Web = styled.p`
	margin-top: 2rem;

	@media screen and (min-width: 1200px) {
		margin-top: 0;
	}
`

function HeaderHome() {
	return (
		<div>
			<Helmet>
				<meta charSet='utf-8' />
				<title>arminebner.com</title>
				<meta
					name='description'
					content='A Place where I write about discovering different technologies, such as react.js, node.js, javascript, html, css, Linux and other techrelated topics.'
				/>
				<link rel='canonical' href='https://arminebner.com' />
			</Helmet>
			<Header>
				<a href='#about'>
					<div className='lights'>
						<div className='light' />
						<div className='light' />
						<div className='light' />
						<div className='light' />
						<div className='light' />
						<div className='light' />
						<div className='light' />
						<div className='light' />
						<div className='light' />
						<div className='light' />
						<div className='light' />
						<div className='light' />
						<div className='light' />
						<div className='light' />
					</div>
				</a>
				<HeaderLogo>
					<p>
						arm
						<br />
						in
						<br />
						ebn
						<br />
						er
						<br />
						.com
					</p>
				</HeaderLogo>
				<Space>a space for</Space>
				<HeaderText>
					<Web>
						web-technologies
						<br />
						linux
						<br />
						and stuff
					</Web>
				</HeaderText>
			</Header>
			<About />
		</div>
	)
}

export default HeaderHome
