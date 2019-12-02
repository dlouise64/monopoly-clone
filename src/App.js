import React, { useState, useEffect } from 'react'
import './App.css'
import Card from './components/Card'
import Board from './components/Board'
import cards from './data/cards'
import PreviewCard from './components/PreviewCard'
import Token from './images/monopoly_token_ship.png'
import { ReactComponent as PlayerGreen } from './images/player_green.svg'
import styled from 'styled-components'

function App() {
	const [previewCard, setPreviewCard] = useState({
		show: false,
		card: null
	})

	const [landedCard, setLandedCard] = useState({
		show: true,
		card: null
	})

	const [currentDiceRolled, setCurrentDiceRolled] = useState(0)
	const [position, setPosition] = useState([])
	const [curSum, setSum] = useState(0)
	const [tokenStyle, setTokenStyle] = useState({})
	const [sixes, setSixes] = useState([])
	const [p1Purchased, setP1Purchased] = useState([])

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
		if (previewCard.card !== null) {
			setPreviewCard({ show: false, card: { ...previewCard.card } })
		}
		cards.map(
			card =>
				card.position === curSum && setLandedCard({ show: false, card: card })
		)
	}

	function rollDice(e) {
		e.preventDefault()
		setLandedCard({ show: true })

		countSixes()

		const roll = Math.floor(Math.random() * 6 + 1)
		// const roll = 6
		setCurrentDiceRolled(roll)
		position.push(roll)

		const sum = position.reduce((a, b) => a + b, 0)
		// const sum = 6

		if (sum > 19) {
			setPosition([sum - 20])
			setSum(sum - 20)
			setTokenPosition(sum - 20)
		} else {
			setSum(sum)
			setTokenPosition(sum)
		}
	}

	function handleBuy(card) {
		p1Purchased.push(card)
		setLandedCard({ show: false })
	}
	function setTokenPosition(pos) {
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

	function countSixes() {
		if (sixes.length === 0 && currentDiceRolled === 6) {
			setSixes(['*'])
		}

		if (sixes.length === 0 && currentDiceRolled !== 6) {
			setSixes([])
		}

		if (sixes.length === 1 && currentDiceRolled === 6) {
			setSixes(['*', '*'])
		}

		if (sixes.length === 1 && currentDiceRolled !== 6) {
			setSixes([])
		}

		if (sixes.length === 2 && currentDiceRolled !== 6) {
			setSixes([])
		}

		if (sixes.length === 2 && currentDiceRolled === 6) {
			setSixes(['*', '*', '*'])
		}

		if (sixes.length === 3) {
			alert('go to jail, you rolled 6 3 times in a row')
			setSixes([])
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
					<span key={i}>
						{card.position === curSum && (
							<span>
								{card.name === 'Start'
									? ', you are on Start'
									: ` & landed on ${card.name}`}
							</span>
						)}
					</span>
				))}
				<Button onClick={e => rollDice(e)} style={{ marginLeft: '10px' }}>
					Roll Dice
				</Button>
			</div>

			<Board>
				<img src={Token} style={tokenStyle} alt="token" />
				{cards.map((card, i) => (
					<div key={i} onClick={() => handlePreviewCard(card)}>
						<Card color={card.color} type={card.type}>
							<h1>{card.name}</h1>
							{card.property_details && <p>${card.property_details.price}</p>}

							{p1Purchased.find(o => o.name === card.name) && (
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
						{card.position === curSum &&
							card.name !== 'Start' &&
							landedCard.show && (
								<span>
									<PreviewCard
										card={card}
										buy={true}
										handleExit={handleExit}
										handleBuy={handleBuy}
									/>
								</span>
							)}
					</span>
				))}
			</Board>
		</>
	)
}

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
const Button = styled.button`
	width: 120px;
	padding: 10px;
	background: #b4cb55;
	color: #fff;
	border-radius: 4px;
	border: 0;
	font-size: 18px;
`
export default App
