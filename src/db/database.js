import mongoose from 'mongoose'
import { MONGODB_URI } from '../config'
;(async () => {
	try {
		const db = await mongoose.connect(
			MONGODB_URI || 'mongodb://127.0.0.1/test',
			{
				useNewUrlParser: true,
				useUnifiedTopology: true,
			}
		)
		console.log('DB connected to', db.connections[0].name)
	} catch (error) {
		console.log(error)
	}
})()
