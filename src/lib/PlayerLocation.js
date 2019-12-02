import React from 'react'

function PlayerLocation({ cards, curSum }) {
	return cards.map((card, i) => (
		<span key={i}>
			{card.position === curSum && (
				<span>
					{card.name === 'Start'
						? ', you are on Start'
						: ` & landed on ${card.name}`}
				</span>
			)}
		</span>
	))
}

export default PlayerLocation
