import React from 'react'
import Token from '../images/monopoly_token_ship.png'

function PlayerToken({ tokenBoardPosition }) {
	return <img src={Token} style={tokenBoardPosition} alt="token" />
}

export default PlayerToken
