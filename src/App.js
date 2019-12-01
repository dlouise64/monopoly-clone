import React from 'react'
import './App.css'
// import styled from 'styled-components'
import Card from './components/Card'
const cardDetails = {
	name: 'Paris',
	color: 'blue',
	price: 180
}

function App() {
	return (
		<Card color={cardDetails.color}>
			<h1>{cardDetails.name}</h1>
			<p>${cardDetails.price}</p>
		</Card>
	)
}

export default App
