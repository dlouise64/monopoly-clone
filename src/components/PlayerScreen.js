import React from 'react'
import styled from 'styled-components'
import CurrentDice from '../lib/CurrentDice'
import PlayerLocation from '../lib/PlayerLocation'
import Button from './Button'
import RollDice from '../lib/RollDice'
function PlayerScreen({
	setLandedCard,
	GoToJailChecker,
	setDiceRolled,
	position,
	setPosition,
	setSum,
	TokenPosition,
	setTokenStyle,
	sixes,
	diceRolled,
	setSixes,
	cards,
	curSum
}) {
	return (
		<PlayerScreenWrapper>
			<CurrentDice diceRolled={diceRolled} />
			<PlayerLocation cards={cards} curSum={curSum} />
			<Button
				onClick={e =>
					RollDice(
						e,
						setLandedCard,
						GoToJailChecker,
						setDiceRolled,
						position,
						setPosition,
						setSum,
						TokenPosition,
						setTokenStyle,
						sixes,
						diceRolled,
						setSixes
					)
				}>
				Roll Dice
			</Button>
		</PlayerScreenWrapper>
	)
}

const PlayerScreenWrapper = styled.div`
	letter-spacing: 1px;
	color: #fff;
	padding-top: 10px;
	padding-bottom: 10px;
`

export default PlayerScreen
