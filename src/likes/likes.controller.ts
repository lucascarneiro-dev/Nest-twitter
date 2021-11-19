import { Body, Controller, Param, Post, Put, UseGuards } from '@nestjs/common';
import { CreateLikeDto } from './likes.dto';
import { LikesService } from './likes.service';
import { AuthGuard } from '@nestjs/passport';
import { Like } from '@prisma/client';

@UseGuards(AuthGuard('jwt'))
@Controller('likes')
export class LikesController {
  constructor(private service: LikesService) {}

  @Post('/')
  create(@Body() addLike: CreateLikeDto) {
    return this.service.create(addLike);
  }

  @Put('/:id')
  async update(@Param('id') id: number): Promise<Like> {
    return this.service.update(id);
  }
}
