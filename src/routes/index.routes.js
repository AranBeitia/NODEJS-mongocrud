import { Router } from 'express'
const router = Router()

import {
	renderTasks,
	addTasks,
	renderTaskEdit,
	editTask,
	deleteTask,
	toggleTask,
} from '../controllers/tasks.controller'

router.get('/', renderTasks)

router.post('/tasks/add', addTasks)

router.get('/tasks/:id/edit', renderTaskEdit)

router.post('/tasks/:id/edit', editTask)

router.get('/tasks/:id/delete', deleteTask)

router.get('/tasks/:id/toggleDone', toggleTask)

export default router
