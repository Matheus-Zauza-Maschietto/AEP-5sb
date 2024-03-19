import { Router } from 'express'
import bookController from './src/books/book.controller'

const routes = Router()
routes.get('/health-check')
routes.post('/books', bookController.create)
routes.get('/books', bookController.findAll)
routes.get('/books/:id', bookController.findById)
routes.put('/books/:id', bookController.updateById)
routes.delete('/books/:id', bookController.deleteById)

export {
    routes
}