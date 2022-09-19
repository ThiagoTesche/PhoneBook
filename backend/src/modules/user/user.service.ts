import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(createUser: User): Promise<User> {
    const userExists = await this.prisma.user.findFirst({
      where: {
        email: createUser.email,
      },
    });

    if (userExists) {
      throw new Error('User already exists');
    }

    const user = await this.prisma.user.create({
      data: createUser,
    });

    return user;
  }

  async findById(id: number): Promise<User> {
    const user = await this.prisma.user.findFirst({
      where: {
        id: id,
      },
    });

    return user;
  }

  async findAll(): Promise<User[]> {
    const user = await this.prisma.user.findMany();

    return user;
  }

  async update(id: number, data: Partial<User>): Promise<User> {
    const user = await this.prisma.user.update({
      where: {
        id: id,
      },
      data: data,
    });

    return user;
  }

  async delete(id: number) {
    const user = await this.prisma.user.delete({
      where: {
        id: id,
      },
    });

    return user;
  }
}
