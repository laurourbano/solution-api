import { Injectable } from '@nestjs/common';
import { Contact } from './entities/contact.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ContactsService {

  constructor(
    @InjectRepository(Contact)
    private contactsRepository: Repository<Contact>,
  ){}

  create(contact: Contact): Promise<Contact> {
    return this.contactsRepository.save(contact);
  }

  findAll() {
    return this.contactsRepository.find();
  }

  async findOne(id: string): Promise<Contact | null> {
    return this.contactsRepository.findOne({ where: { id } });
  }

  async update(id: string, updateContact: Contact) {
    await this.contactsRepository.update(id, updateContact);
  }

  async remove(id: string) {
    await this.contactsRepository.delete(id);
  }
}
