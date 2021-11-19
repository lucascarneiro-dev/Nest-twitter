import { IsOptional, IsNotEmpty } from 'class-validator';

export class CreateFollowDto {
  @IsOptional()
  userId: number;

  @IsNotEmpty()
  followedId: number;
}
