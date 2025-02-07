import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './schemas/book.shema';
import { BookDto } from './dto/create-book.dto';
import { updateBookDto } from './dto/update-book.dto';

@Controller('book')
export class BookController {
  constructor(private bookServis: BookService) {}
  @Get()
  async getAll(): Promise<Book[]> {
    return await this.bookServis.findAll();
  }

  @Post()
  async createBook(
    @Body()
    book: BookDto,
  ): Promise<Book> {
    return this.bookServis.create(book);
  }

  @Get(':id')
  async getBookById(
    @Param('id')
    id: string,
  ): Promise<Book> {
    return await this.bookServis.findById(id);
  }

  @Put(':id')
  async updateBook(
    @Param('id')
    id: string,
    @Body()
    book: updateBookDto,
  ): Promise<Book> {
    return this.bookServis.updateById(id, book);
  }
}
