import { IsNotEmpty } from 'class-validator';

export class UpdatePostDto {
  id: string;

  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  body: string;
}
