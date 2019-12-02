import React, { useState, useEffect } from 'react'
import './App.css'
import Card from './components/Card'
import Board from './components/Board'
import cards from './data/cards'
import PreviewCard from './components/PreviewCard'

import { ReactComponent as PlayerGreen } from './images/player_green.svg'
import styled from 'styled-components'
import PlayerScreen from './components/PlayerScreen'
import GoToJailChecker from './lib/GotoJailChecker'
import TokenPosition from './lib/TokenPosition'
import PlayerToken from './components/PlayerToken'
import Button from './components/Button'

function App() {
	const [previewCard, setPreviewCard] = useState({
		show: false,
		card: null
	})

	const [landedCard, setLandedCard] = useState({
		show: true,
		card: null
	})

	const [diceRolled, setDiceRolled] = useState(0)
	const [position, setPosition] = useState([])
	const [curSum, setSum] = useState(0)
	const [tokenStyle, setTokenStyle] = useState({})
	const [sixes, setSixes] = useState([])
	const [p1Purchased, setP1Purchased] = useState([])
	const [playerBank, setPlayerBank] = useState(750)

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

	function handleBuy(card) {
		p1Purchased.push(card)
		setLandedCard({ show: false })
		setPlayerBank(playerBank - card.property_details.price)
	}

	return (
		<>
			<PlayerScreen
				setLandedCard={setLandedCard}
				GoToJailChecker={GoToJailChecker}
				setDiceRolled={setDiceRolled}
				position={position}
				setPosition={setPosition}
				setSum={setSum}
				TokenPosition={TokenPosition}
				setTokenStyle={setTokenStyle}
				sixes={sixes}
				diceRolled={diceRolled}
				setSixes={setSixes}
				cards={cards}
				curSum={curSum}
			/>

			<Board>
				<PlayerToken tokenStyle={tokenStyle} />
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
										buy={
											p1Purchased.find(o => o.name === card.name) ? false : true
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
					card.position === curSum &&
					card.name !== 'Start' &&
					landedCard.show &&
					card.type === 'place' &&
					p1Purchased.find(o => o.name === card.name) && (
						<>
							<Button style={{ marginTop: '20px' }}>Buy 1 Hotels</Button>
							<Button style={{ marginTop: '20px' }}>Buy 2 Hotels</Button>
							<Button style={{ marginTop: '20px' }}>Buy 3 Hotels</Button>
						</>
					)
			)}
			{cards.map(
				card =>
					card.position === curSum &&
					card.name !== 'Start' &&
					landedCard.show &&
					card.type === 'utility' &&
					p1Purchased.find(o => o.name === card.name) && (
						<>
							<Button style={{ marginTop: '20px' }}>Upgrade 1 star</Button>
							<Button style={{ marginTop: '20px' }}>Upgrade 2 stars</Button>
							<Button style={{ marginTop: '20px' }}>Upgrade 3 star</Button>
						</>
					)
			)}
			{cards.map(
				card =>
					card.position === curSum &&
					card.name !== 'Start' &&
					landedCard.show &&
					card.type === 'place' &&
					p1Purchased.find(o => o.name === card.name) && (
						<>
							<Button style={{ marginTop: '20px' }}>Buy 1 Hotels</Button>
							<Button style={{ marginTop: '20px' }}>Buy 2 Hotels</Button>
							<Button style={{ marginTop: '20px' }}>Buy 3 Hotels</Button>
						</>
					)
			)}
			{cards.map(
				card =>
					card.position === curSum &&
					card.name !== 'Start' &&
					landedCard.show &&
					card.type === 'utility' &&
					p1Purchased.find(o => o.name === card.name) && (
						<>
							<Button style={{ marginTop: '20px' }}>Upgrade 1 stars</Button>
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
