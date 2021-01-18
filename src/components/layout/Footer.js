import React from 'react'
import styled from 'styled-components'
import iconGithub from '../../icons/github_badge.svg'
import iconLinkedIn from '../../icons/linkedin.svg'

const FooterContainer = styled.footer`
	width: 100%;
	margin-bottom: 70px;
	background-color: var(--dark-accent);
	display: flex;
	flex-direction: column;
	align-items: center;

	@media screen and (min-width: 1200px) {
		margin-bottom: 0;
	}
`

const FooterContent = styled.div`
	padding: 1rem;
	font-family: var(--font-sec);
	font-size: 1.3rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	@media screen and (min-width: 1200px) {
		padding: 1.5rem;
		width: 30%;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
	}
`

const Contact = styled.div`
	display: flex;
	gap: 2rem;

	@media screen and (min-width: 1200px) {
		justify-self: center;
	}
`

const Footnote = styled.p`
	font-family: var(--font-sec);
	font-size: 1.3rem;

	@media screen and (min-width: 1200px) {
		justify-self: center;
	}
`

function Footer() {
	return (
		<FooterContainer>
			<FooterContent>
				<Contact>
					<a href='https://github.com/arminebner'>
						<img src={iconGithub} alt='github logo' />
					</a>
					<a href='https://www.linkedin.com/in/armin-ebner-3ab0b6132/'>
						<img src={iconLinkedIn} alt='github logo' />
					</a>
				</Contact>
				<Footnote>Armin Ebner &copy; 2020</Footnote>
			</FooterContent>
		</FooterContainer>
	)
}

export default Footer
