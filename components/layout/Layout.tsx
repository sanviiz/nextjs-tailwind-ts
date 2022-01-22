import React from 'react'
import Header from '@layout/Header'
import Footer from '@layout/Footer'

const Layout = ({ children }) => {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	)
}

export default Layout
