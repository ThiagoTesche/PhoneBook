import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { Contact } from '@prisma/client';
import { ContactService } from './contact.service';
import { CreateContactDto } from './dto/create-contact.dto';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Get()
  findAll() {
    return this.contactService.findAll();
  }

  @Post()
  create(contact: CreateContactDto) {
    return this.contactService.create(contact);
  }

  @Patch(':id')
  update(id: number, contact: Partial<Contact>) {
    return this.contactService.update(+id, contact);
  }

  @Delete(':id')
  delete(id: number) {
    return this.contactService.delete(+id);
  }
}
