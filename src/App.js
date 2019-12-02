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

	const [currentDiceRolled, setCurrentDiceRolled] = useState(0)
	const [position, setPosition] = useState([])
	const [curSum, setSum] = useState(0)

	function handlePreviewCard(card) {
		if (card.type !== 'empty') {
			setPreviewCard({
				show: card.name !== 'Jail' && card.name !== 'Start' ? true : false,
				card: card
			})
		}
	}

	function handleExit() {
		setPreviewCard({ show: false, card: { ...previewCard.card } })
	}

	function rollDice(e) {
		e.preventDefault()

		const roll = Math.floor(Math.random() * 6 + 1)
		setCurrentDiceRolled(roll)
		position.push(roll)

		const sum = position.reduce((a, b) => a + b, 0)

		if (sum > 19) {
			setPosition([sum - 20])
			setSum(sum - 20)
		} else {
			setSum(sum)
		}
	}

	return (
		<>
			<div
				style={{
					letterSpacing: '1px',
					color: '#fff',
					paddingTop: '10px',
					paddingBottom: '10px'
				}}>
				<span>
					{currentDiceRolled === 0
						? 'Roll the dice'
						: `You rolled a ${
								currentDiceRolled < 21
									? currentDiceRolled
									: currentDiceRolled - 20
						  }`}
				</span>
				{cards.map((card, i) => (
					<>
						{card.position === curSum && (
							<span key={i}>
								{card.name === 'Start'
									? ', you are on Start'
									: ` & landed on ${card.name}`}
							</span>
						)}
					</>
				))}
				<button onClick={e => rollDice(e)} style={{ marginLeft: '10px' }}>
					Roll Dice
				</button>
			</div>

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
		</>
	)
}

export default App
