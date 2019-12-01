import React from 'react'
import './App.css'
import Card from './components/Card'
import Board from './components/Board'
import cards from './data/cards'

function App() {
	return (
		<Board>
			{cards.map(card => (
				<Card color={card.color} type={card.type}>
					<h1>{card.name}</h1>
					{card.price && <p>${card.price}</p>}
				</Card>
			))}
		</Board>
	)
}

export default App
