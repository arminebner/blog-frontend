import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import NavBar from './components/layout/NavBar'
import HeaderHome from './components/pages/HeaderHome'
import Footer from './components/layout/Footer'
import Blog from './components/pages/Blog'
import SinglePost from './components/layout/SinglePost'
import fourofour from './components/pages/404'
import NewPost from './components/pages/NewPost'
import EditPost from './components/pages/EditPost'

function App() {
	return (
		<Router>
			<div className='main-container'>
				<NavBar />
				<Switch>
					<Route exact path='/blog/:slug' component={SinglePost} />
					<Route exact path='/blog' component={Blog} />
					<Route exact path='/' component={HeaderHome} />
					<Route exact path='/new-post' component={NewPost} />
					<Route exact path='/edit-post/:slug' component={EditPost} />
				</Switch>
			</div>
			<Footer />
		</Router>
	)
}

export default App
