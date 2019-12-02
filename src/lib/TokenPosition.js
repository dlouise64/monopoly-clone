function TokenPosition(position, setTokenStyle) {
	const tokenDefaultStyles = {
		position: 'absolute',
		zIndex: 1
	}
	switch (position) {
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

export default TokenPosition
