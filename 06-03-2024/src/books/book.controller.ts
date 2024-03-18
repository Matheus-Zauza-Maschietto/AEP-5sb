import { Request, Response } from 'express'
import { BookService } from './book.service'

class BookController {
    async create(req: Request, res: Response) {
        const book = await new BookService().create(req.body)
        return res.json(book)
    }

    async findAll(req: Request, res: Response) {
        const books = await new BookService().findAll()
        return res.json(books)
    }

    async findById(req: Request, res: Response) {
        const books = await new BookService().findById(req.params?.id)
        return res.json(books)
    }

    async updateById(req: Request, res: Response) {
        const books = await new BookService().updateById(req.params?.id, req.body)
        return res.json(books)
    }

    async deleteById(req: Request, res: Response) {
        const books = await new BookService().deleteById(req.params?.id)
        return res.sendStatus(204)
    }
}

export default new BookController()