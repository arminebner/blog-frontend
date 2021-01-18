import React from 'react'
import styled from 'styled-components'
import portrait from '../../images/portrait-round-color.png'
import iconReact from '../../icons/react.svg'
import iconHtml5 from '../../icons/html5.svg'
import iconCss3 from '../../icons/css3.svg'
import iconJs from '../../icons/js_badge.svg'
import iconLinux from '../../icons/linux.svg'

const Spacer = styled.div`
	height: 1rem;

	@media screen and (min-width: 1200px) {
		height: 7rem;
	}
`

const ContainerBorder = styled.div`
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
		background: rgb(238, 174, 202);
		background: linear-gradient(
			355deg,
			rgba(20, 27, 39, 1) 0%,
			rgba(64, 154, 191, 1) 100%
		);
	}
`

const Container = styled.section`
	padding: 1rem;
	border-radius: 3px;
	text-align: center;
	background-color: var(--dark-accent);
`

const Content = styled.div`
	text-align: left;

	@media screen and (min-width: 1200px) {
		display: flex;
		flex-direction: column;
		gap: 3rem;
		align-items: center;
	}
`

const HeadLine = styled.h1`
	margin-bottom: 2rem;
	font-family: var(--font-sec);
	font-size: 3rem;
	color: var(--blue);

	@media screen and (min-width: 1200px) {
		font-size: 4rem;
	}
`

const Portrait = styled.img`
	margin-bottom: 2rem;
	border-radius: 50%;
	box-shadow: 0px 2px 5px #409abf;
`

const Text = styled.div`
	@media screen and (min-width: 1200px) {
		width: 50%;
	}
`

const Bold = styled.span`
	font-weight: bold;
	font-size: 1.01rem;
`

const Paragraph = styled.p`
	margin-bottom: 1rem;
`

const IconSection = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;
`

const About = () => (
	<div>
		<Spacer id='about' />
		<ContainerBorder>
			<Container>
				<HeadLine>About me and this page</HeadLine>
				<Portrait src={portrait} alt='portrait of the site-author' />
				<Content>
					<Text>
						<Paragraph>
							<Bold>Hi, my name is Armin</Bold>
							and I am new in the field of
							<Bold>software-development</Bold>- but I am not new in the
							workforce:
						</Paragraph>
						<Paragraph>
							I learned, that to
							<Bold>communicate clearly, precisely and openly</Bold>
							about different subjects arising,
							<Bold>can make all the difference</Bold>
							for the
							<Bold>success</Bold>
							of a project. And for the
							<Bold>fun</Bold>
							while leveraging it as well!
						</Paragraph>
						<Paragraph>
							<Bold>I strive</Bold>
							to be as
							<Bold>imaginative and knowledgeable</Bold>
							as I possibly can in the field and I have a
							<Bold>taste for problem-solving</Bold>
						</Paragraph>
						<Paragraph>
							<Bold>Putting the pieces together</Bold>
							on a larger scale
							<Bold>just makes me happy!</Bold>
						</Paragraph>
						<Paragraph>
							<Bold>Why software-development?</Bold>
							Because I see it as a big opportunity
							<Bold>to shape the modern world in a meaningful way.</Bold>
						</Paragraph>
						<Paragraph>
							And
							<Bold>I like Linux ;)</Bold>
						</Paragraph>
					</Text>
					<IconSection>
						<p>
							I currently work with the following
							<Bold>techstack:</Bold>
						</p>
						<div>
							<img src={iconHtml5} alt='html5 icon' height='45px' />
							<img src={iconCss3} alt='css3 icon' height='45px' />
							<img src={iconJs} alt='javascript icon' height='45px' />
							<img src={iconReact} alt='react icon' height='45px' />
							<img src={iconLinux} alt='linux icon' height='45px' />
						</div>
					</IconSection>
				</Content>
			</Container>
		</ContainerBorder>
	</div>
)

export default About
