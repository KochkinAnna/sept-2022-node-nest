import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/users.dto';

@Injectable()
export class UsersService {
  private users: any = [];

  async createUser(userData: CreateUserDto) {
    this.users.push(userData);
    return this.users;
  }
}
