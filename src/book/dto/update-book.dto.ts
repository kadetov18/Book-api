import { Category } from '../schemas/book.shema';

export class updateBookDto {
  readonly title: string;
  readonly descriptin: string;
  readonly author: string;
  readonly price: number;
  readonly category: Category;
}
