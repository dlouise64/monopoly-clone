import React, { useState } from 'react'
import './App.css'
import Card from './components/Card'
import Board from './components/Board'
import cards from './data/cards'
import PreviewCard from './components/PreviewCard'

function App() {
	const [previewCard, setPreviewCard] = useState({
		show: false,
		card: null
	})

	function handlePreviewCard(card) {
		setPreviewCard({
			show: card.name !== 'Jail' && card.name !== 'Start' ? true : false,
			card: card
		})
	}

	function handleExit() {
		setPreviewCard({ show: false, card: { ...previewCard.card } })
	}

	return (
		<Board>
			{cards.map((card, i) => (
				<div key={i} onClick={() => handlePreviewCard(card)}>
					<Card color={card.color} type={card.type}>
						<h1>{card.name}</h1>
						{card.property_details && <p>${card.property_details.price}</p>}
					</Card>
				</div>
			))}
			{previewCard.show && (
				<PreviewCard card={previewCard.card} handleExit={handleExit} />
			)}
		</Board>
	)
}

export default App
