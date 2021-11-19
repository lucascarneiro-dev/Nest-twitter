import {
  IsString,
  Length,
  IsEmail,
  IsOptional,
  IsNotEmpty,
} from 'class-validator';

export class CreateUserDto {
  @IsOptional()
  createdAt: Date;

  @IsOptional()
  updatedAt: Date;

  @IsNotEmpty()
  @IsString()
  @Length(3, 30)
  username: string;

  @IsNotEmpty()
  @IsEmail()
  @IsString()
  email: string;

  @IsOptional()
  @IsString()
  img: string;

  @IsNotEmpty()
  @IsString()
  @Length(8, 30)
  password: string;

  @IsNotEmpty()
  @IsString()
  @Length(2, 50)
  displayName: string;

  @IsNotEmpty()
  @IsString()
  birth: string;

  @IsNotEmpty()
  @IsString()
  bio: string;
}

export class UpdateUserDto {
  @IsOptional()
  createdAt: Date;

  @IsOptional()
  updatedAt: Date;

  @IsOptional()
  @IsString()
  @Length(3, 30)
  username: string;

  @IsOptional()
  @IsEmail()
  @IsString()
  email: string;

  @IsOptional()
  @IsString()
  img: string;

  @IsOptional()
  @IsString()
  @Length(8, 30)
  password: string;

  @IsOptional()
  @IsString()
  @Length(2, 50)
  displayName: string;

  @IsOptional()
  @IsString()
  birth: string;

  @IsOptional()
  @IsString()
  bio: string;
}
