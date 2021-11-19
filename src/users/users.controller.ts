import {
  Controller,
  Body,
  Get,
  Post,
  Param,
  UseGuards,
  Put,
  Delete,
} from '@nestjs/common';
import { User } from '.prisma/client';
import { CreateUserDto, UpdateUserDto } from './users.dto';
import { UsersService } from './users.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
export class UsersController {
  constructor(private service: UsersService) {}

  @Post('/create-user')
  create(@Body() createUser: CreateUserDto) {
    return this.service.create(createUser);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/findAll')
  findAll(): Promise<User[]> {
    return this.service.findAll();
  }

  @Get('/findOne/:username')
  findOne(@Param('username') username: string): Promise<User> {
    return this.service.findOne(username);
  }

  @Put('/update/:username')
  async update(
    @Param('username') username: string,
    @Body() updateUser: UpdateUserDto,
  ): Promise<User> {
    return this.service.update(username, updateUser);
  }

  @Delete('/delete/:username')
  deleteOne(@Param('username') username: string): Promise<User> {
    return this.service.deleteOne(username);
  }
}
