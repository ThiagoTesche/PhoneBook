import { Injectable } from '@nestjs/common';
import { Contact } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateContactDto } from './dto/create-contact.dto';

@Injectable()
export class ContactService {
  constructor(private prisma: PrismaService) {}

  async create(contact: CreateContactDto): Promise<Contact> {
    const contactCreated = await this.prisma.contact.create({
      data: contact,
    });

    return contactCreated;
  }

  async findAll(): Promise<Contact[]> {
    const contacts = await this.prisma.contact.findMany();

    return contacts;
  }

  async update(id: number, contact: Partial<Contact>): Promise<Contact> {
    const contactUpdated = await this.prisma.contact.update({
      where: {
        id,
      },
      data: contact,
    });

    return contactUpdated;
  }

  async delete(id: number) {
    const contact = await this.prisma.contact.delete({
      where: {
        id,
      },
    });

    return contact;
  }
}
