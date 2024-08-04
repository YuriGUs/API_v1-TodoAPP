import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class ListTaskService {
  private prisma = new PrismaClient();

  async ListTask() {
    return this.prisma.task.findMany();
  }
}
