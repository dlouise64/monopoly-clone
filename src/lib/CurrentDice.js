import React from 'react'

function CurrentDice({ diceRolled }) {
	return (
		<span>
			{diceRolled === 0
				? 'Roll the dice'
				: `You rolled a ${diceRolled < 21 ? diceRolled : diceRolled - 20}`}
		</span>
	)
}

export default CurrentDice
