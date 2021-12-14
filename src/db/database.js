import mongoose from 'mongoose'
// require('dotenv').config({ path: 'variables.env' })
;(async () => {
	try {
		const db = await mongoose.connect('mongodb://127.0.0.1:27017/crud-mongo', {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
		console.log('DB connected to', db.connections[0].name)
	} catch (error) {
		console.log(error)
	}
})()
