export class CreateContactDto {
    name: string;
    department: string;
    phone: string;
    email: string;
    status: boolean = true;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}
