import { Category } from '../schemas/book.shema';

export class BookDto {
  readonly title: string;
  readonly descriptin: string;
  readonly author: string;
  readonly price: number;
  readonly category: Category;
}
