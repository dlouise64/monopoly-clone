import colour from '../components/colours'

const cards = [
	{
		type: 'chance',
		name: '?',
		color: colour.green,
		description: 'Draw a Chance card'
	},
	{
		type: 'place',
		name: 'Rio',
		color: colour.green,
		property_details: {
			price: 160,
			rent: 18,
			mortgage: 80,
			upgrade: 90,
			hotel_rents: [70, 180, 280]
		}
	},
	{
		type: 'text',
		name: 'Tax',
		color: colour.green,
		description: 'Pay 7% of your assets to the bank when you land on this card'
	},
	{
		type: 'place',
		name: 'Madrid',
		color: colour.green,
		property_details: {
			price: 160,
			rent: 18,
			mortgage: 80,
			upgrade: 90,
			hotel_rents: [70, 180, 280]
		}
	},
	{
		type: 'utility',
		name: 'Water works',
		color: colour.beige,
		property_details: {
			price: 120,
			rent: 12,
			mortgage: 60,
			upgrade: 80
		}
	},

	{
		type: 'text',
		name: 'Jail'
	},
	{
		type: 'utility',
		name: 'Electricity',
		color: colour.beige,
		property_details: {
			price: 80,
			rent: 8,
			mortgage: 40,
			upgrade: 60
		}
	},
	{
		type: 'empty'
	},
	{
		type: 'empty'
	},
	{
		type: 'empty'
	},
	{
		type: 'empty'
	},
	{
		type: 'place',
		name: 'Paris',
		color: colour.blue,
		property_details: {
			price: 200,
			rent: 22,
			mortgage: 100,
			upgrade: 120,
			hotel_rents: [90, 225, 350]
		}
	},
	{
		type: 'place',
		name: 'Delhi',
		color: colour.yellow,
		property_details: {
			price: 100,
			rent: 12,
			mortgage: 50,
			upgrade: 70,
			hotel_rents: [50, 125, 200]
		}
	},
	{
		type: 'empty'
	},
	{
		type: 'empty'
	},
	{
		type: 'empty'
	},
	{
		type: 'empty'
	},
	{
		type: 'place',
		name: 'London',
		color: colour.blue,
		property_details: {
			price: 200,
			rent: 22,
			mortgage: 100,
			upgrade: 120,
			hotel_rents: [90, 225, 350]
		}
	},
	{
		type: 'utility',
		name: 'Airlines',
		color: colour.beige,
		property_details: {
			price: 60,
			rent: 5,
			mortgage: 30,
			upgrade: 40
		}
	},
	{
		type: 'empty'
	},
	{
		type: 'empty'
	},
	{
		type: 'empty'
	},
	{
		type: 'empty'
	},
	{
		type: 'text',
		name: 'Tax',
		color: colour.green,
		description: 'Pay 7% of your assets to the bank when you land on this card'
	},
	{
		type: 'place',
		name: 'Sydney',
		color: colour.yellow,
		property_details: {
			price: 100,
			rent: 12,
			mortgage: 50,
			upgrade: 70,
			hotel_rents: [50, 125, 200]
		}
	},
	{
		type: 'empty'
	},
	{
		type: 'empty'
	},
	{
		type: 'empty'
	},
	{
		type: 'empty'
	},
	{
		type: 'place',
		name: 'Moscow',
		color: colour.turq,
		property_details: {
			price: 240,
			rent: 30,
			mortgage: 120,
			upgrade: 150,
			hotel_rents: [125, 310, 450]
		}
	},
	{
		type: 'text',
		name: 'Start'
	},
	{
		type: 'place',
		name: 'Dubai',
		color: colour.orange,
		property_details: {
			price: 180,
			rent: 20,
			mortgage: 90,
			upgrade: 110,
			hotel_rents: [80, 200, 320]
		}
	},
	{
		type: 'place',
		name: 'Vegas',
		color: colour.orange,
		property_details: {
			price: 180,
			rent: 20,
			mortgage: 90,
			upgrade: 110,
			hotel_rents: [80, 200, 320]
		}
	},

	{
		type: 'utility',
		name: 'Railway',
		color: colour.beige,
		property_details: {
			price: 140,
			rent: 15,
			mortgage: 70,
			upgrade: 100
		}
	},

	{
		type: 'place',
		name: 'Tokyo',
		color: colour.turq,
		property_details: {
			price: 240,
			rent: 30,
			mortgage: 120,
			upgrade: 150,
			hotel_rents: [125, 310, 450]
		}
	},
	{
		type: 'community',
		name: '?',
		color: colour.green,
		description: 'Draw a Community card'
	}
]

export default cards
