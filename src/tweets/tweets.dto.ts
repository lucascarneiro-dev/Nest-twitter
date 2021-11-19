import { IsString, IsOptional, IsNotEmpty } from 'class-validator';

export class CreateTweetDto {
  @IsOptional()
  createdAt: Date;

  @IsOptional()
  updatedAt: Date;

  @IsOptional()
  userId: number;

  @IsNotEmpty()
  @IsString()
  text: string;
}
