function GoToJailChecker(sixes, diceRolled, setSixes) {
	if (sixes.length === 0 && diceRolled === 6) {
		setSixes(['*'])
	}

	if (sixes.length === 0 && diceRolled !== 6) {
		setSixes([])
	}

	if (sixes.length === 1 && diceRolled === 6) {
		setSixes(['*', '*'])
	}

	if (sixes.length === 1 && diceRolled !== 6) {
		setSixes([])
	}

	if (sixes.length === 2 && diceRolled !== 6) {
		setSixes([])
	}

	if (sixes.length === 2 && diceRolled === 6) {
		setSixes(['*', '*', '*'])
	}

	if (sixes.length === 3) {
		alert('go to jail, you rolled 6 3 times in a row')
		setSixes([])
	}
}

export default GoToJailChecker
