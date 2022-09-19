export class CreateContactDto {
  id?: number;
  name: string;
  cellphone: string;
  email: string;
  createdAt: Date;
  observations: string;
  authorId: number;
}
