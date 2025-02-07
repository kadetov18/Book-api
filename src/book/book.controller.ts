import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './schemas/book.shema';
import { BookDto } from './dto/create-book.dto';
import { updateBookDto } from './dto/update-book.dto';
import { Query as ExpressQuery } from 'express-serve-static-core';

@Controller('book')
export class BookController {
  constructor(private bookServis: BookService) {}
  @Get()
  async getAll(@Query() query: ExpressQuery): Promise<Book[]> {
    return await this.bookServis.findAll(query);
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
