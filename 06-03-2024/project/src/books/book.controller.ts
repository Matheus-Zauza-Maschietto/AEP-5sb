import { Request, Response } from 'express'
import { BookService } from './book.service'

class BookController {
    async create(req: Request, res: Response) {
        const book = await new BookService().create(req.body)
        return res.json(book)
    }

    async findAll(req: Request, res: Response) {
        try{
            const books = await new BookService().findAll()
            res.sendStatus(200)
            return res.json(books)
        }
        catch{
            return res.sendStatus(400)
        }
    }

    async findById(req: Request, res: Response) {
        try {
            const books = await new BookService().findById(req.params?.id)
            res.sendStatus(200)
            return res.json(books)    
        } catch {
            return res.sendStatus(400)
        }
    }

    async updateById(req: Request, res: Response) {
        try {
            const books = await new BookService().updateById(req.params?.id, req.body)
            res.sendStatus(200)
            return res.json(books)
        } catch {
            return res.sendStatus(400)
        }

    }

    async deleteById(req: Request, res: Response) {
        try {
            const books = await new BookService().deleteById(req.params?.id)
            return res.sendStatus(204)
        } catch {
            return res.sendStatus(400)
        }

    }
}

export default new BookController()