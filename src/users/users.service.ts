import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { User, Prisma } from '.prisma/client';
import { PrismaService } from 'src/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private db: PrismaService) {}

  async create(data: Prisma.UserCreateInput): Promise<User> {
    const existing = await this.db.user.findUnique({
      where: { username: data.username },
    });

    if (existing) {
      throw new ConflictException('Username already exists');
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);

    const user = await this.db.user.create({
      data: {
        ...data,
        password: hashedPassword,
      },
    });

    return user;
  }

  async findAll(): Promise<User[]> {
    return this.db.user.findMany({
      include: {
        tweets: true,
        follows: true,
        likes: true,
      },
    });
  }

  async findOne(username: string): Promise<User> {
    const user = await this.db.user.findUnique({
      where: { username },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  async update(username: string, data: Prisma.UserCreateInput): Promise<User> {
    return this.db.user.update({
      data,
      where: {
        username: username,
      },
    });
  }

  async deleteOne(username: string): Promise<User> {
    return this.db.user.delete({
      where: { username },
    });
  }
}
