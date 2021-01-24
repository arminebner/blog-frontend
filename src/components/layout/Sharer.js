import React from 'react'
import styled from 'styled-components'
import {
	EmailShareButton,
	LinkedinShareButton,
	TelegramShareButton,
	TwitterShareButton,
	WhatsappShareButton,
} from 'react-share'

import twitter from '../../icons/twitter.svg'
import linkedin from '../../icons/linkedin-sharer.svg'
import mail from '../../icons/gmail.svg'
import whatsapp from '../../icons/whatsapp.svg'
import telegram from '../../icons/telegram.svg'

const SharerContainer = styled.div`
	z-index: 50;

	@media screen and (min-width: 1200px) {
		position: fixed;
		top: 50%;
		left: 0%;
		transform: translateY(-50%);
	}
`
const SharerContent = styled.div`
	display: flex;
	margin-bottom: 2rem;

	@media screen and (min-width: 1200px) {
		flex-direction: column;
	}
`
const TwitterBox = styled.div`
	border-radius: 1px;
	width: 50px;
	height: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #1da1f2;
	cursor: pointer;
`

const GmailBox = styled.div`
	border-radius: 1px;
	width: 50px;
	height: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #ea4335;
	cursor: pointer;
`

const LinkedinBox = styled.div`
	border-radius: 1px;
	width: 50px;
	height: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #0077b5;
	cursor: pointer;
`

const WhatsAppBox = styled.div`
	border-radius: 1px;
	width: 50px;
	height: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #25d366;
	cursor: pointer;
`

const TelegramBox = styled.div`
	border-radius: 1px;
	width: 50px;
	height: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #26a5e4;
	cursor: pointer;
`

const Sharer = props => {
	const { title, short_description } = props

	return (
		<SharerContainer>
			<SharerContent>
				<TwitterBox>
					<TwitterShareButton url={window.location}>
						<img src={twitter} width='30' alt='twitter'></img>
					</TwitterShareButton>
					{/* <a
						href='https://twitter.com/share?ref_src=twsrc%5Etfw'
						class='twitter-share-button'
						data-show-count='false'>
						
					</a> */}
				</TwitterBox>
				<LinkedinBox>
					<LinkedinShareButton
						url={window.location}
						title={title}
						summary={short_description}
						source={'arminebner.com'}>
						<img src={linkedin} width='30' alt='linkedin'></img>
						{/* <a
						href={`https://www.linkedin.com/sharing/share-offsite/?url=${window.location}`}></a> */}
					</LinkedinShareButton>
				</LinkedinBox>
				<WhatsAppBox>
					<WhatsappShareButton url={window.location}>
						<img src={whatsapp} width='30' alt='linkedin'></img>
					</WhatsappShareButton>
				</WhatsAppBox>
				<TelegramBox>
					<TelegramShareButton url={window.location}>
						<img src={telegram} width='30' alt='linkedin'></img>
					</TelegramShareButton>
				</TelegramBox>
				<GmailBox>
					<EmailShareButton
						url={window.location}
						subject={`Read this interesting Article called: ${title}`}
						body={`Short description: ${short_description}`}>
						<img src={mail} width='30' alt='linkedin'></img>
					</EmailShareButton>
				</GmailBox>
			</SharerContent>
		</SharerContainer>
	)
}

export default Sharer
