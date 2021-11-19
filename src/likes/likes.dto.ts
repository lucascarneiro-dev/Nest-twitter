import { IsOptional } from 'class-validator';

export class CreateLikeDto {
  @IsOptional()
  tweetId: number;

  @IsOptional()
  userId: number;
}
