import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { Tweet } from '@prisma/client';
import { CreateTweetDto } from './tweets.dto';
import { TweetsService } from './tweets.service';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@Controller('tweets')
export class TweetsController {
  constructor(private service: TweetsService) {}

  @Post('/create-tweet')
  create(@Body() createTweet: CreateTweetDto) {
    return this.service.create(createTweet);
  }

  @Get('/findAll')
  findAll(): Promise<Tweet[]> {
    return this.service.findAll();
  }

  @Get('/findOne/:id')
  findOne(@Param('id') id: number): Promise<Tweet> {
    return this.service.findOne(id);
  }

  @Put('update/:id')
  async update(
    @Param('id') id: number,
    @Body() updateTweet: CreateTweetDto,
  ): Promise<Tweet> {
    return this.service.update(id, updateTweet);
  }

  @Delete('/delete/:id')
  delete(@Param('id') id: number) {
    return this.service.deleteOne(id);
  }
}
