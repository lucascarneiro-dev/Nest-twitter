import { Injectable } from '@nestjs/common';
import { Follow } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateFollowDto } from './follows.dto';

@Injectable()
export class FollowsService {
  constructor(private db: PrismaService) {}

  async create(data: CreateFollowDto): Promise<Follow> {
    return this.db.follow.create({
      data,
      include: {
        User: true,
      },
    });
  }

  async delete(id: number): Promise<Follow> {
    return this.db.follow.delete({
      where: { id },
    });
  }
}
