import React from 'react'
import Token from '../images/monopoly_token_ship.png'

function PlayerToken({ tokenStyle }) {
	return <img src={Token} style={tokenStyle} alt="token" />
}

export default PlayerToken
