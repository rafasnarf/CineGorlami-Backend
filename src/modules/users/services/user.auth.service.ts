import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UserAuthService {
  private readonly users = [
    {
      userId: 1,
      username: 'Teste1',
      useremail: 'teste1@teste.com',
      password: '123456',
    },
    {
      userId: 2,
      username: 'Teste2',
      useremail: 'teste2@teste.com',
      password: '123456',
    },
  ];
  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => (user.username = username));
  }
}
