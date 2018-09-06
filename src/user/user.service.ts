import { Injectable } from '@nestjs/common';
import { UserDto } from '../dto/user.dto';

@Injectable()
export class UserService {

    private readonly users: UserDto[] = [];

    async create(user: UserDto) {
        this.users.push(user);
        return user;
    }

    findAll(): UserDto[] {
        return this.users;
    }

    findByEmail(email): UserDto[] {
        return this.users.filter(u => u.email === email);
    }

}
