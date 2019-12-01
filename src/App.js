import React from 'react'
import './App.css'
// import styled from 'styled-components'
import Card from './components/Card'
import colour from './components/colours'
import Board from './components/Board'

const cardDetails = [
	{
		type: 'chance',
		name: '?'
	},
	{
		type: 'place',
		name: 'Rio',
		color: colour.green,
		price: 160
	},
	{
		type: 'text',
		name: 'Tax'
	},
	{
		type: 'place',
		name: 'Madrid',
		color: colour.green,
		price: 160
	},
	{
		type: 'utility',
		name: 'Water works'
	},

	{
		type: 'text',
		name: 'Jail'
	},
	{
		type: 'utility',
		name: 'Electricity'
	},
	{
		type: 'empty'
	},
	{
		type: 'empty'
	},
	{
		type: 'empty'
	},
	{
		type: 'empty'
	},
	{
		type: 'place',
		name: 'Paris',
		color: colour.blue,
		price: 180
	},
	{
		type: 'place',
		name: 'Delhi',
		color: colour.yellow,
		price: 100
	},
	{
		type: 'empty'
	},
	{
		type: 'empty'
	},
	{
		type: 'empty'
	},
	{
		type: 'empty'
	},
	{
		type: 'place',
		name: 'London',
		color: colour.blue,
		price: 180
	},
	{
		type: 'utility',
		name: 'Airlines'
	},
	{
		type: 'empty'
	},
	{
		type: 'empty'
	},
	{
		type: 'empty'
	},
	{
		type: 'empty'
	},
	{
		type: 'text',
		name: 'Tax'
	},
	{
		type: 'place',
		name: 'Sydney',
		color: colour.yellow,
		price: 100
	},
	{
		type: 'empty'
	},
	{
		type: 'empty'
	},
	{
		type: 'empty'
	},
	{
		type: 'empty'
	},
	{
		type: 'place',
		name: 'Moscow',
		color: colour.turq,
		price: 200
	},
	{
		type: 'text',
		name: 'Start'
	},
	{
		type: 'place',
		name: 'Dubai',
		color: colour.orange,
		price: 240
	},
	{
		type: 'place',
		name: 'Vegas',
		color: colour.orange,
		price: 240
	},

	{
		type: 'utility',
		name: 'Railway'
	},

	{
		type: 'place',
		name: 'Tokyo',
		color: colour.turq,
		price: 200
	},
	{
		type: 'community',
		name: '?'
	}
]

function App() {
	return (
		<Board>
			{cardDetails.map(card => (
				<Card color={card.color} type={card.type}>
					<h1>{card.name}</h1>
					{card.price && <p>${card.price}</p>}
				</Card>
			))}
		</Board>
	)
}

export default App
