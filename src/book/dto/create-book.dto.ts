import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Category } from '../schemas/book.schema';

export class BookDto {
  @IsNotEmpty()
  @IsString()
  readonly title: string;

  @IsNotEmpty()
  @IsString()
  readonly description: string;

  @IsNotEmpty()
  @IsString()
  readonly author: string;

  @IsNotEmpty()
  @IsNumber()
  readonly price: number;

  @IsNotEmpty()
  @IsEnum(Category, { message: 'Pleas enter correct category.' })
  readonly category: Category;
}
