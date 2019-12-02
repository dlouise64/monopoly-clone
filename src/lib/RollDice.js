function RollDice(
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
) {
	e.preventDefault()
	setLandedCard({ show: true })
	GoToJailChecker(sixes, diceRolled, setSixes)

	const roll = Math.floor(Math.random() * 6 + 1)

	setDiceRolled(roll)
	position.push(roll)

	const sum = position.reduce((a, b) => a + b, 0)

	if (sum > 19) {
		setPosition([sum - 20])
		setSum(sum - 20)
		TokenPosition(sum - 20, setTokenStyle)
	} else {
		setSum(sum)
		TokenPosition(sum, setTokenStyle)
	}
}

export default RollDice
