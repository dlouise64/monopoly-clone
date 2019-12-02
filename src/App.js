import React, { useState, useEffect } from 'react'
import './App.css'
import Card from './components/Card'
import Board from './components/Board'
import cards from './data/cards'
import PreviewCard from './components/PreviewCard'

import { ReactComponent as PlayerGreen } from './images/player_green.svg'
import styled from 'styled-components'
// import GoToJailChecker from './lib/GotoJailChecker'
import TokenPosition from './lib/TokenPosition'
import PlayerToken from './components/PlayerToken'
import Button from './components/Button'

function App() {
	const [previewCard, setPreviewCard] = useState({ show: false, card: null })

	const [landedCardPreview, setLandedCardPreview] = useState(true)

	const [recentDiceRolled, setDiceRolled] = useState(0)
	const [dicesPlayed, setDicesPlayed] = useState([])
	const [recentSum, setRecentSum] = useState(0)
	const [tokenBoardPosition, setPlayerTokenBoardPosition] = useState({})
	// const [sixes, setSixes] = useState([])
	const [playerPurchases] = useState([])
	const [playerBank, setPlayerBank] = useState(750)

	useEffect(() => {
		setPlayerTokenBoardPosition({
			position: 'absolute',
			zIndex: 1,
			bottom: '20px',
			left: '40px'
		})
	}, [setPlayerTokenBoardPosition])

	function handlePreviewCard(card) {
		if (card.type !== 'empty') {
			setPreviewCard({
				show: card.name !== 'Jail' && card.name !== 'Start' ? true : false,
				card: card // needed for regular preview card
			})
		}

		if (landedCardPreview) {
			setLandedCardPreview(false)
		}
	}

	function handleExit() {
		if (previewCard.card !== null) {
			setPreviewCard({
				show: false,
				card: { ...previewCard.card }
			})
		}

		cards.map(
			card => card.position === recentSum && setLandedCardPreview(false)
		)
	}

	function handleBuy(card) {
		playerPurchases.push(card)

		if (playerBank - card.property_details.price < 0) {
			alert('you cant afford this, mortgage a property or sell hotels')
		} else {
			setPlayerBank(playerBank - card.property_details.price)
		}
		setLandedCardPreview({ show: false })
	}

	function rollTheDice() {
		// returns a random number from 1 to 6
		const roll = Math.floor(Math.random() * 6 + 1)
		setDiceRolled(roll)
		dicesPlayed.push(roll)
		moveTokenOnBoard()
		setLandedCardPreview(true)
		collectTaxes()
	}

	// function drawAChanceCard() {
	// 	cards
	// 		.filter(card => card.type === 'chance')
	// 		.map(
	// 			item =>
	// 				item.position === recentSum &&
	// 				setChanceCard(
	// 					chanceCards[Math.floor(Math.random() * chanceCards.length)]
	// 				)
	// 		)
	// }

	function collectTaxes() {
		cards
			.filter(card => card.name === 'Tax')
			.map(
				item =>
					item.position === recentSum &&
					setPlayerBank(playerBank - parseInt((playerBank / 100) * 7))
			)
	}

	function moveTokenOnBoard() {
		// drawAChanceCard()
		// move the players token on the board
		const sumOfDicesRolled = dicesPlayed.reduce((a, b) => a + b, 0)
		const wentPastStart = sumOfDicesRolled > 19
		const resetSumOfDices = sumOfDicesRolled - 20

		if (wentPastStart) {
			setPlayerBank(playerBank + 200)
			setDicesPlayed([resetSumOfDices]) // if player has moved past Start, reset the initial dice
			setRecentSum(resetSumOfDices) // needed for handleExit()
			TokenPosition(resetSumOfDices, setPlayerTokenBoardPosition) // Set the token board position
		} else {
			setRecentSum(sumOfDicesRolled) // needed for handleExit()
			TokenPosition(sumOfDicesRolled, setPlayerTokenBoardPosition) // Set the token board position
		}
	}

	// function numberOfSixesRolled() {
	// 	// if 3 x 6 die rolls, go to jail
	// }

	return (
		<>
			<div style={{ color: 'white' }}>You rolled a {recentDiceRolled}</div>
			<button onClick={() => rollTheDice()}>Roll the dice</button>
			<Board>
				<PlayerToken tokenBoardPosition={tokenBoardPosition} />
				{cards.map((card, i) => (
					<div key={i} onClick={() => handlePreviewCard(card)}>
						<Card color={card.color} type={card.type}>
							<h1>{card.name}</h1>
							{card.property_details && <p>${card.property_details.price}</p>}

							{playerPurchases.find(o => o.name === card.name) && (
								<P1Tag>
									{console.log(card.name)}
									<span>$ {card.property_details.rent}</span>
									<PlayerGreen />
								</P1Tag>
							)}
						</Card>
					</div>
				))}
				{previewCard.show && (
					<PreviewCard card={previewCard.card} handleExit={handleExit} />
				)}

				{cards.map((card, i) => (
					<span key={i}>
						{card.position === recentSum &&
							card.name !== 'Start' &&
							landedCardPreview && (
								<span>
									<PreviewCard
										card={card}
										buy={
											playerPurchases.find(o => o.name === card.name)
												? false
												: true
										}
										handleExit={handleExit}
										handleBuy={handleBuy}
									/>
								</span>
							)}
					</span>
				))}
			</Board>

			{cards.map(
				card =>
					recentSum === card.position &&
					card.type === 'place' &&
					playerPurchases.find(o => o.name === card.name) && (
						<>
							<Button style={{ marginTop: '20px' }}>Upgrade 1 hotel</Button>
							<Button style={{ marginTop: '20px' }}>Upgrade 2 hotels</Button>
							<Button style={{ marginTop: '20px' }}>Upgrade 3 hotels</Button>
						</>
					)
			)}
			{cards.map(
				card =>
					recentSum === card.position &&
					card.type === 'utility' &&
					playerPurchases.find(o => o.name === card.name) && (
						<>
							<Button style={{ marginTop: '20px' }}>Upgrade 1 star</Button>
							<Button style={{ marginTop: '20px' }}>Upgrade 2 stars</Button>
							<Button style={{ marginTop: '20px' }}>Upgrade 3 stars</Button>
						</>
					)
			)}
			<PlayerMoney playerBank={playerBank} />
		</>
	)
}

function PlayerMoney({ playerBank }) {
	return <PlayerMoneyWrapper>$ {playerBank}</PlayerMoneyWrapper>
}

const PlayerMoneyWrapper = styled.div`
	margin-top: 10px;
	font-size: 40px;
	color: #fff;
	letter-spacing: 2px;
`

const P1Tag = styled.span`
	position: absolute;
	top: 40px;
	left: -1px;
	transform: rotate(-9deg);
	span {
		position: absolute;
		width: 100%;
		top: 10px;
		left: 0;
		font-size: 19px;
		letter-spacing: 1px;
		text-shadow: 0 0 1px rgba(0, 0, 0, 0.7);
		color: #fff;
	}
`

export default App
