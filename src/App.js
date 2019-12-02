import React, { useState, useEffect } from 'react'
import './App.css'
import Card from './components/Card'
import Board from './components/Board'
import cards from './data/cards'
import PreviewCard from './components/PreviewCard'
import Token from './images/monopoly_token_ship.png'
function App() {
	const [previewCard, setPreviewCard] = useState({
		show: false,
		card: null
	})

	const [currentDiceRolled, setCurrentDiceRolled] = useState(0)
	const [position, setPosition] = useState([])
	const [curSum, setSum] = useState(0)
	const [tokenStyle, setTokenStyle] = useState({})

	useEffect(() => {
		setTokenStyle({
			position: 'absolute',
			zIndex: 1,
			bottom: '20px',
			left: '40px'
		})
	}, [setTokenStyle])

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
			setTokenPosition(sum - 20)
		} else {
			setSum(sum)
			setTokenPosition(sum)
		}
	}

	function setTokenPosition(pos) {
		console.log(pos)

		const tokenDefaultStyles = {
			position: 'absolute',
			zIndex: 1
		}
		switch (pos) {
			case 0:
				return setTokenStyle({
					...tokenDefaultStyles,
					bottom: '20px',
					left: '40px'
				})
			case 1:
				return setTokenStyle({
					...tokenDefaultStyles,
					bottom: '153px',
					left: '40px'
				})
			case 2:
				return setTokenStyle({
					...tokenDefaultStyles,
					bottom: '260px',
					left: '40px'
				})
			case 3:
				return setTokenStyle({
					...tokenDefaultStyles,
					bottom: '380px',
					left: '40px'
				})
			case 4:
				return setTokenStyle({
					...tokenDefaultStyles,
					bottom: '480px',
					left: '40px'
				})
			case 5:
				return setTokenStyle({
					...tokenDefaultStyles,
					bottom: '600px',
					left: '40px	'
				})
			case 6:
				return setTokenStyle({
					...tokenDefaultStyles,
					bottom: '600px',
					left: '160px'
				})
			case 7:
				return setTokenStyle({
					...tokenDefaultStyles,
					bottom: '600px',
					left: '280px'
				})
			case 8:
				return setTokenStyle({
					...tokenDefaultStyles,
					bottom: '600px',
					left: '400px'
				})
			case 9:
				return setTokenStyle({
					...tokenDefaultStyles,
					bottom: '600px',
					left: '520px'
				})
			case 10:
				return setTokenStyle({
					...tokenDefaultStyles,
					bottom: '600px',
					left: '640px'
				})
			case 11:
				return setTokenStyle({
					...tokenDefaultStyles,
					bottom: '490px',
					left: '640px'
				})
			case 12:
				return setTokenStyle({
					...tokenDefaultStyles,
					bottom: '380px',
					left: '640px'
				})
			case 13:
				return setTokenStyle({
					...tokenDefaultStyles,
					bottom: '250px',
					left: '640px'
				})
			case 14:
				return setTokenStyle({
					...tokenDefaultStyles,
					bottom: '160px',
					left: '640px'
				})
			case 15:
				return setTokenStyle({
					...tokenDefaultStyles,
					bottom: '40px',
					left: '640px'
				})
			case 16:
				return setTokenStyle({
					...tokenDefaultStyles,
					bottom: '40px',
					left: '520px'
				})
			case 17:
				return setTokenStyle({
					...tokenDefaultStyles,
					bottom: '40px',
					left: '400px'
				})
			case 18:
				return setTokenStyle({
					...tokenDefaultStyles,
					bottom: '40px',
					left: '280px'
				})
			case 19:
				return setTokenStyle({
					...tokenDefaultStyles,
					bottom: '40px',
					left: '160px'
				})
			default:
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
				<img src={Token} style={tokenStyle} alt="token" />
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
