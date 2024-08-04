import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ListTaskService {
  constructor(private readonly prisma: PrismaService) {}

  async ListTask() {
    return this.prisma.task.findMany();
  }
}
