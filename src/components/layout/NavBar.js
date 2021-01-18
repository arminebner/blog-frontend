import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import '../../App.css'
import home from '../../icons/HOME.svg'
import blog from '../../icons/GRID.svg'

const DesktopNav = styled.nav`
	display: none;
	width: 100%;
	height: 70px;
	background-color: var(--dark-accent);
	top: 0;
	left: 0;
	position: fixed;
	z-index: 5;
	/* display: none
    transform: translateY(-70px)
    transition: ease-in 0.25s;*/

	@media screen and (min-width: 1200px) {
		display: block;
	}
`

const DesktopNavUl = styled.ul`
	margin: 0 auto;
	width: 65%;
	max-width: 1800px;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	list-style: none;
`

const DesktopUlLink = styled.a`
	text-decoration: none;
	font-size: 2rem;
	padding: 0.5rem 2rem 0.5rem 2rem;
	font-family: var(--font-sec);
	color: var(--blue);

	:hover {
		color: var(--f-color);
	}
`

const MobileNav = styled.nav`
	width: 100%;
	height: 70px;
	background-color: var(--blue);
	color: var(--f-color);
	bottom: 0;
	left: 0;
	position: fixed;
	@media screen and (min-width: 1200px) {
		display: none;
	}
`

const MobileNavUl = styled.ul`
	width: 100%;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	list-style: none;
`

const MobileUlLink = styled.li`
	text-decoration: none;
	color: var(--f-color);
`

const NavElementGrouping = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`

const NavIcon = styled.img`
	height: 40px;
`

function NavBar() {
	return (
		<nav>
			<DesktopNav>
				<DesktopNavUl>
					<NavLink addClassNameActive='active' to='/'>
						<DesktopUlLink>home</DesktopUlLink>
					</NavLink>
					<NavLink addClassNameActive='active' to='/blog'>
						<DesktopUlLink>blog</DesktopUlLink>
					</NavLink>
				</DesktopNavUl>
			</DesktopNav>
			<MobileNav>
				<MobileNavUl>
					<NavLink to='/'>
						<NavElementGrouping>
							<NavIcon src={home} alt='to home button' />
							<MobileUlLink>home</MobileUlLink>
						</NavElementGrouping>
					</NavLink>
					<NavLink to='/blog'>
						<NavElementGrouping>
							<NavIcon src={blog} alt='to blog button' />
							<MobileUlLink>blog</MobileUlLink>
						</NavElementGrouping>
					</NavLink>
				</MobileNavUl>
			</MobileNav>
		</nav>
	)
}

export default NavBar
