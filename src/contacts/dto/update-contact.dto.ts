import { PartialType } from '@nestjs/mapped-types';
import { CreateContactDto } from './create-contact.dto';

export class UpdateContactDto extends PartialType(CreateContactDto) {
    id: string;
    name: string;
    department: string;
    phone: string;
    email: string;
    status: boolean = true;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}
