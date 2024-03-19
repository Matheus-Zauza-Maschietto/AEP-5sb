import { spec } from 'node:test/reporters'
import bookModel from './book.schema'

export class BookService {

    async create(book: any) {
        const createdBook = bookModel.create(book)

        return createdBook
    }

    async findAll(): Promise<any> {
        const bookList = await bookModel.find()
        return bookList
    }
    
    async findById(id: any): Promise<any> {
        const bookList = await bookModel.findById(id)
        return bookList
    }

    async updateById(id: any, book: any): Promise<any> {
        const bookList = await bookModel.updateOne(id, book)
        return bookList
    }

    async deleteById(id: any) {
        await bookModel.deleteOne(id)
    }
}
