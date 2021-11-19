import {
  Body,
  Controller,
  Delete,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { CreateFollowDto } from './follows.dto';
import { FollowsService } from './follows.service';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@Controller('follows')
export class FollowsController {
  constructor(private service: FollowsService) {}

  @Post('/')
  create(@Body() follow: CreateFollowDto) {
    return this.service.create(follow);
  }

  @Delete('/unfollow/:id')
  delete(@Param('id') id: number) {
    return this.service.delete(id);
  }
}
