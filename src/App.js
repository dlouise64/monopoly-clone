import React from 'react'
import './App.css'
// import styled from 'styled-components'
import Card from './components/Card'
const cardDetails = [
	{
		name: 'Paris',
		color: '#5dace2',
		price: 180
	},
	{
		name: 'Sydney',
		color: '#fdc345',
		price: 100
	}
]

function App() {
	return cardDetails.map(card => (
		<Card color={card.color}>
			<h1>{card.name}</h1>
			<p>${card.price}</p>
		</Card>
	))
}

export default App
